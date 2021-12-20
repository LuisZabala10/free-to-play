import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/common/Header";
import ComputerGames from "./components/ComputerGames";
import Games from "./components/Games";
import '../src/index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="allgames" element={<Games />} />
        <Route path="computergames" element={<ComputerGames />} />
      </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
