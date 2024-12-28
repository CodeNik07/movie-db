import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import MoviesLayout from "./Components/Movies/MoviesLayout.jsx";
import Home from "./Components/Home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
