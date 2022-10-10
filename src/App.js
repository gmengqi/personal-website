import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/landingPage";
import Menu from "./pages/menu"; 

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/menu" exact element={<Menu />} />
      </Routes>
    </div>
  );
}

