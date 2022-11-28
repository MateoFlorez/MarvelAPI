import "./App.css";
// import logo from "./assets/logo.png";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Card } from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Character } from "./components/Character";
import { NavBar } from "./components/NavBar";

// https://gateway.marvel.com:443/v1/public/characters?apikey=788c8412ebf85f4bcc2e87b43c0b3ece

// public key: 788c8412ebf85f4bcc2e87b43c0b3ece
// private key: 77a51717ba4808f3b7e7b9ff27ff35c3a8d74f80
// ts: 1

// 177a51717ba4808f3b7e7b9ff27ff35c3a8d74f80788c8412ebf85f4bcc2e87b43c0b3ece

// Hash: 3abdddf8b16f921bf669846b5e259bf2

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Character />}></Route>
          <Route path="/character/:id" element={<h1>Hola</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
