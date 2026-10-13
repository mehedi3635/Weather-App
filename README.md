# 🌦️ Weatherly — Weather App

A responsive weather application built with **React, Vite, and the OpenWeatherMap API**. Search for a city to view its current temperature and weather conditions.

## ✨ Features

* 🔎 Search weather by city name
* 🌡️ Temperature displayed in Celsius
* 🌤️ Weather condition descriptions and icons
* ⏳ Loading and error handling
* 📱 Responsive interface for desktop and mobile
* ⚡ Data fetching with TanStack React Query

## 🛠️ Tech Stack

* React
* Vite
* JavaScript
* Bootstrap
* TanStack React Query
* OpenWeatherMap API

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* An [OpenWeatherMap API key](https://openweathermap.org/api)

### 1. Clone the Repository

```bash
git clone https://github.com/mehedi3635/Weather-App.git
cd Weather-App/weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure the API Key

Create a `.env` file inside the `weather-app` folder:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Replace the example value with your own API key. Never commit your real `.env` file to GitHub.

### 4. Run the Application

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🏗️ Production Build

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```text
Weather-App/
├── README.md
└── weather-app/
    ├── public/
    ├── src/
    │   ├── api/
    │   ├── componets/
    │   ├── hooks/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🌐 Weather API

Weather information is provided by [OpenWeatherMap](https://openweathermap.org/api).

## 👨‍💻 Author

**Mehedi Hasan**

* GitHub: [@mehedi3635](https://github.com/mehedi3635)

---

⭐ If you find this project useful, consider starring the repository.
