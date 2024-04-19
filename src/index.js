import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Contact";
import Login from "./Login";
import Fashion from "./Fashion";
import About from "./About";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {" "}
      {/* Wrap your routes in Routes */}
      <Route path="/" element={<App />} /> {/* Home route */}
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/contact" element={<Contact />} />
      {/* Add more routes as needed */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
