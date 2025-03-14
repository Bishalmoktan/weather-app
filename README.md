# Weather App

A modern weather application built with **React (Vite)**, **Tailwind CSS**, **ShadCN UI**, and **OpenWeather API**. It allows users to fetch weather data based on **current location** or **searched cities**, with features like debounced search and clean UI components.

## 🚀 Features

- Fetch weather data using **OpenWeather API**
- Get weather based on **current location** (Geolocation API)
- **Search for cities** with a debounced input
- Display **temperature, weather condition, and date**
- **Beautiful UI** with **ShadCN UI** and **Tailwind CSS**
- **Error handling** for invalid cities and API failures
- Built with **Vite** for fast performance

## 🛠️ Tech Stack

- **React (Vite)** – Frontend framework
- **TanStack Query** – Data fetching and caching
- **Axios** – API requests
- **Tailwind CSS** – Styling
- **ShadCN UI** – UI Components
- **OpenWeather API** – Weather data provider

## 📦 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Create a `.env` file** and add your OpenWeather API key:
   ```sh
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
4. **Start the development server**
   ```sh
   npm run dev
   ```

## 🔧 Usage

- **Get Weather by Location**: Allow browser to access location.
- **Search for a City**: Type the city name in the search bar (debounced input) and press **Enter**.
- **View Weather Data**: See temperature, conditions, and location details in a responsive UI.

## 📂 Project Structure

```
📦 weather-app
├── 📁 src
│   ├── 📁 components   # UI components
│   ├── 📁 hooks        # Custom hooks (useWeather, useWeatherByCity)
│   ├── 📁 pages        # Page components
│   ├── 📁 lib          # Utility functions (formatDate, etc.)
│   ├── 📁 assets       # Icons and images
│   ├── main.tsx       # Entry file
│   ├── App.tsx        # Root component
├── 📄 .env.example    # Example environment variables
├── 📄 README.md       # Documentation
├── 📄 package.json    # Dependencies and scripts
└── 📄 vite.config.ts  # Vite configuration
```

## 📝 To-Do

- [ ] Add **weekly forecast**
- [ ] Support **multiple language translations**
- [ ] Improve UI with **animations**

## 📜 License

This project is **MIT Licensed**. Feel free to use and modify it!

## 🌟 Show Your Support

If you like this project, give it a ⭐ on [GitHub](https://github.com/yourusername/weather-app)! 😊
