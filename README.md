# 🌦️ Weather App using React.js (Vite)

A beautiful and responsive weather application built using **React.js** and **Vite** that shows current weather information for any city worldwide using the **OpenWeatherMap API**. Includes dynamic weather backgrounds and a sleek **glassmorphism UI**.

> 🌐 Live Demo: [https://ankit-weatherapp-using-reactjs.netlify.app](https://ankit-weatherapp-using-reactjs.netlify.app)

---

## ✨ Features

- 🔍 Search weather by city name
- 🌤️ Displays:
  - Temperature
  - Weather Condition
  - Humidity
  - Wind Speed
- 🖼️ Dynamic background based on weather condition
- 💠 Glassmorphism design for elegant UI
- 🎯 Responsive layout for all screen sizes
- 🔃 Default city loads on page load (Mumbai)

---

## 🛠️ Tech Stack

- **React.js (Vite)**
- **CSS3** (with Google Fonts)
- **OpenWeatherMap API**

---

## 📁 Project Structure
weather-app/
├── public/
├── src/
│ ├── assets/ # Weather icons
│ ├── components/
│ │ └── Weather.jsx # Main weather component
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── Weather.css
├── .env
├── vite.config.js
└── README.md


---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_ID=your_openweathermap_api_key

🚀 Getting Started Locally

1) Clone the repository
git clone https://github.com/yourusername/weather-app.git
cd weather-app

2) Install dependencies
npm install

3) Create .env file
VITE_APP_ID=your_api_key_here

4) Run the app
npm run dev

🧪 Build for Production
npm run build

☁️ Deployment
This app is deployed on Netlify:

Build Command: vite build

Publish Directory: dist

Environment Variables:

VITE_APP_ID → OpenWeatherMap API key

📜 License
This project is open-source and available under the MIT License.

🙋‍♂️ Author
Ankit Vijay Shinde
Frontend Developer
LinkedIn • GitHub

💬 Feedback
If you have suggestions or issues, feel free to open an issue or create a pull request!






