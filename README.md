# 🎵 Music Player

A modern and responsive Music Player built with **React.js**. The application allows users to play, pause, and navigate through a playlist while demonstrating React fundamentals such as component-based architecture, Context API, hooks, and state management.

> **Note:** AI tools were used to assist with the UI design and some implementation ideas, while the application logic, project structure, and integration were developed by me.

---

## 🚀 Features

- 🎧 Play and pause music
- ⏭️ Next and previous track navigation
- 🎵 Playlist management
- ⚡ Dynamic UI updates
- 🌙 Clean and modern interface
- 📱 Responsive design

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- HTML5

---

## 📂 Project Structure

```
src/
│
├── assets/
│   ├── audio/
│   └── images/
│
├── components/
│   ├── Card.jsx
│   ├── Controls.jsx
│   ├── LeftButton.jsx
│   ├── Music.jsx
│   ├── MusicBar.jsx
│   ├── MusicData.jsx
│   ├── Navigation.jsx
│   ├── PauseButton.jsx
│   ├── PlayButton.jsx
│   └── RightButton.jsx
│
├── context/
│   └── MusicContext.jsx
│
├── pages/
│   └── Main.jsx
│
├── styles/
│
├── App.js
└── index.js
```

---

## ⚛️ React Concepts Used

### Components

The application follows a reusable component-based architecture. Each UI element is separated into its own component to improve readability, scalability, and maintainability.

### Context API

The Context API is used to share music-related data and functions across components without prop drilling.

### useState

`useState` manages the application's interactive state, including:

- Play/Pause status
- Current song
- UI updates

### useRef

`useRef` is used to reference the HTML audio element, allowing direct control over audio playback methods such as:

- `play()`
- `pause()`

without causing unnecessary re-renders.

---

## 🎨 UI Design

The user interface was designed with assistance from AI tools for inspiration and layout improvements. The implementation, React integration, and application logic were developed by me.

---


## 📚 What I Learned

- Building reusable React components
- Managing global state using Context API
- Controlling DOM elements with `useRef`
- Managing application state using `useState`
- Organizing React projects into scalable folders
- Creating responsive user interfaces

---

## 👨‍💻 Author

**Yassin Nasrallah**

Junior Frontend Developer | Game Designer | Game Programmer

GitHub: https://github.com/yourusername
