let app = {
    data() {
        return {
            meals: [],
            allMeals: [],
            categories: [],
            loading: true,
            error: null,
            searchQuery: '',
            selectedCategory: '',
            mealsToShow: 6,
            favorites: [],
            currentTab: 'all',
            selectedMeal: null,
            showModal: false,
        }
    },
    computed: {
        currentMeals() {
            if (this.currentTab === 'favorites') {
                return this.favorites;
            }
            return this.meals;
        },
        currentDisplayedMeals() {
            if (this.currentTab === 'favorites') {
                return this.favorites;
            }
            return this.meals.slice(0, this.mealsToShow);
        }
    },
    methods: {
        async fetchMeals() {
            try {
                this.loading = true;
                this.error = null;
                const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (data.meals) {
                    this.allMeals = data.meals;
                    this.meals = data.meals;
                    this.extractCategories();
                } else {
                    this.error = 'No meals found';
                }
                
            } catch (err) {
                console.error('Data fetch error:', err);
                this.error = 'An error occurred while loading data. Please ensure your internet connection.';
            } finally {
                this.loading = false;
            }
        },
        extractCategories() {
            const uniqueCategories = new Set();
            this.allMeals.forEach(meal => {
                if (meal.strCategory) {
                    uniqueCategories.add(meal.strCategory);
                }
            });
            this.categories = Array.from(uniqueCategories).sort();
            console.log('Available categories:', this.categories);
        },
        async searchMeals() {
            if (this.searchQuery.trim() === '') {
                this.meals = this.allMeals;
                if (this.selectedCategory) {
                    this.filterByCategory();
                }
                this.mealsToShow = 6;
                return;
            }
            try {
                this.loading = true;
                const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchQuery}`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (data.meals) {
                    this.meals = data.meals;
                    if (this.selectedCategory) {
                        this.meals = this.meals.filter(meal => 
                            meal.strCategory === this.selectedCategory
                        );
                    }
                } else {
                    this.meals = [];
                }
                
                this.mealsToShow = 6;
                
            } catch (err) {
                console.error('Search error:', err);
                this.meals = [];
            } finally {
                this.loading = false;
            }
        },
        filterByCategory() {
            if (this.selectedCategory === '') {
                this.meals = this.allMeals;
                if (this.searchQuery.trim() !== '') {
                    this.searchMeals();
                }
                this.mealsToShow = 6;
                return;
            }
            this.meals = this.allMeals.filter(meal => 
                meal.strCategory === this.selectedCategory
            );
            if (this.searchQuery.trim() !== '') {
                this.meals = this.meals.filter(meal =>
                    meal.strMeal.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            }
            this.mealsToShow = 6;
            console.log(`Filtered: ${this.meals.length} Meal in category ${this.selectedCategory}`);
        },
        loadMore() {
            this.mealsToShow += 6;
            console.log(`Show ${this.mealsToShow} of ${this.meals.length} meal`);
        },
        isFavorite(mealId) {
            return this.favorites.some(meal => meal.idMeal === mealId);
        },
        toggleFavorite(meal) {
            const index = this.favorites.findIndex(fav => fav.idMeal === meal.idMeal);
            
            if (index > -1) {
                this.favorites.splice(index, 1);
                console.log('Removed from favorites:', meal.strMeal);
                this.saveFavoritesToStorage();
            } else {
                this.favorites.push(meal);
                console.log('Added to Favorites:', meal.strMeal);
                this.saveFavoritesToStorage();
                this.showNotification(`"${meal.strMeal}" has been added to favorites`);
            }
        },
        async saveFavoritesToStorage() {
            try {
                await window.storage.set('favorites', JSON.stringify(this.favorites));
            } catch (err) {
                console.log('Warning: Favorites not saved');
            }
        },
        async loadFavoritesFromStorage() {
            try {
                const result = await window.storage.get('favorites');
                if (result && result.value) {
                    this.favorites = JSON.parse(result.value);
                    console.log(`${this.favorites.length} meal from Favorites has been loaded`);
                }
            } catch (err) {
                console.log('Favorites are empty - start adding your favorite meals!');
                this.favorites = [];
            }
        },
        showMealDetails(meal) {
            this.selectedMeal = meal;
            this.showModal = true;
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                const modal = document.getElementById('mealModal');
                if (modal) {
                    modal.classList.add('show');
                    modal.style.display = 'block';
                }
            }, 10);
            
            console.log('Show details:', meal.strMeal);
        },
        closeModal() {
            const modal = document.getElementById('mealModal');
            if (modal) {
                modal.classList.remove('show');
            }
            
            setTimeout(() => {
                this.showModal = false;
                this.selectedMeal = null;
                if (modal) {
                    modal.style.display = 'none';
                }
                document.body.style.overflow = 'auto';
            }, 300);
        },
        getIngredients(meal) {
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient && ingredient.trim() !== '') {
                    ingredients.push({
                        ingredient: ingredient,
                        measure: measure || ''
                    });
                }
            }
            
            return ingredients;
        },
        showNotification(message) {
            console.log('🔔', message);
        }
    },
    async mounted() {
        await this.loadFavoritesFromStorage();
        await this.fetchMeals();
        
        console.log('The meal app is ready with favorites and details!');
        console.log(`You have ${this.favorites.length} a meal in your favorites`);
    }
    
}
Vue.createApp(app).mount('#app');