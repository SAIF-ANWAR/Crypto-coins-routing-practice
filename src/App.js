import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import CoinDetails from "./components/Coin-details/CoinDetails";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

    </div>
  );
}

export default App;
