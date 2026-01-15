# 🍽️ Meal App

A modern, responsive web application for exploring and discovering delicious meals from around the world. Built with Vue.js and powered by TheMealDB API.

![Meal App](https://img.shields.io/badge/Vue.js-3.x-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🔍 **Smart Search**: Search for meals by name with real-time results
- 🏷️ **Category Filtering**: Filter meals by categories (Chicken, Pasta, Seafood, etc.)
- ❤️ **Favorites System**: Save your favorite meals with persistent storage
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful cards with hover effects and smooth animations
- 📖 **Detailed View**: View complete meal details including ingredients and instructions
- 🎥 **Video Tutorials**: Direct links to YouTube cooking videos
- ⚡ **Fast Loading**: Efficient data fetching with loading indicators

## 🚀 Demo

[Live Demo](https://youtu.be/M4g1F52Ikyc)

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Bootstrap 5** - CSS framework for responsive design
- **TheMealDB API** - Free meal database API
- **Claude Storage API** - For persistent favorites storage
- **Font Awesome** - Icons library
- **Google Fonts (Cairo)** - Arabic-friendly font

## 📋 Prerequisites

Before running this project, make sure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- Internet connection (for API calls)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/MohamedMostafa-M2/meal-app.git
cd meal-app
```

2. **Project Structure**
```
MealApp/
├── css/
│   ├── all.min.css
│   ├── bootstrap.min.css
│   └── style.css
├── imgs/
│   ├── m2-black.ico
│   ├── m2-white.ico
│   └── m2.ico
├── javascript/
│   ├── bootstrap.bundle.min.js
│   ├── main.js
│   └── vue.global.js
└── index.html
```

3. **Run the application**

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

4. **Access the application**
```
http://localhost:8000
```

## 💻 Usage

### Searching for Meals
1. Type the meal name in the search box (e.g., "chicken", "pasta")
2. Results will appear instantly as you type

### Filtering by Category
1. Select a category from the dropdown menu
2. View all meals in that specific category

### Managing Favorites
1. Click the heart icon (🤍) on any meal card to add it to favorites
2. Click the filled heart (❤️) to remove from favorites
3. Switch to the "Favorites" tab to view all saved meals

### Viewing Meal Details
1. Click on any meal card or "View details" button
2. See complete ingredients list with measurements
3. Read preparation instructions
4. Watch cooking video on YouTube (if available)

## 🎨 Customization

### Changing Colors
Edit `css/style.css` to customize the color scheme:

```css
/* Primary gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Background color */
body {
    background: #c1c7cd;
}
```

### Modifying Meals Per Page
In `javascript/main.js`, change the initial value:

```javascript
mealsToShow: 6, // Change to your preferred number
```

## 🔌 API Reference

This project uses [TheMealDB API](https://www.themealdb.com/api.php)

**Endpoints used:**
- Search meals: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
- List all meals: `https://www.themealdb.com/api/json/v1/1/search.php?s=a`

## 🌟 Features in Detail

### Storage System
The app uses a persistent storage system to save favorites:
- Automatically saves when you add/remove favorites
- Loads saved favorites on app startup
- Data persists across browser sessions

### Responsive Design
- Mobile-first approach
- Adaptive navigation
- Touch-friendly interface
- Optimized for all screen sizes

### Performance
- Lazy loading for images
- Efficient re-rendering with Vue.js
- Minimal API calls
- Smooth animations

## 🐛 Known Issues

- None at the moment. Please report any bugs you find!

## 🚧 Future Enhancements

- [ ] Add meal rating system
- [ ] Implement advanced search filters
- [ ] Add meal planning calendar
- [ ] Include nutrition information
- [ ] Support multiple languages
- [ ] Add shopping list feature
- [ ] Implement user accounts
- [ ] Add recipe sharing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Mohamed Mostafa**

- GitHub: [@MohamedMostafa-M2](https://github.com/MohamedMostafa-M2)

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for the amazing free API
- [Bootstrap](https://getbootstrap.com/) for the UI framework
- [Vue.js](https://vuejs.org/) for the reactive framework
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the Cairo font

## 📧 Contact

For questions or suggestions, please open an issue or contact me directly.

---

⭐ If you like this project, please give it a star on GitHub! ⭐

Made with ❤️ by Mohamed Mostafa
