import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js"; 

// Crée la racine avec `createRoot`
const root = ReactDOM.createRoot(document.getElementById("root"));

// Utilise root.render pour rendre l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
