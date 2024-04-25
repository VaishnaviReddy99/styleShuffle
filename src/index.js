import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Contact";
import Login from "./Login";
import Profile from "./Profile";
import About from "./About";
import Outfit from "./outfit";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./common.css"; // Import your CSS file here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {" "}
      {/* Wrap your routes in Routes */}
      <Route path="/" element={<Login />} /> {/* Home route */}
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/outfit" element={<Outfit />} />
      {/* Add more routes as needed */}
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
