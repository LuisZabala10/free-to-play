import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowserGames from "./components/BrowserGames";
import Header from "./components/common/Header";
import ComputerGames from "./components/ComputerGames";
import Games from "./components/Games";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="allgames" element={<Games />} />
          <Route path="computergames" element={<ComputerGames />} />
          <Route path="browsergames" element={<BrowserGames />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
