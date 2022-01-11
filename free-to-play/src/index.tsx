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
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
