import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./Components/AddData.tsx";
import HeaderNav from "./Components/Header.tsx";
import { FetchUserData } from "./Components/FetchUserData.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/user" element={<App />} />
        <Route path="/user-specific-entries" element={<FetchUserData />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
