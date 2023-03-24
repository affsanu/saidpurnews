import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterOne from "./components/FooterOne";
import Login from "./pages/Login";
import "./App.css";
import NavbarT from "./components/NavbarT";

const App = () => {

  return (
    <BrowserRouter>
    <NavbarT />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <FooterOne />
    </BrowserRouter>
  );
};

export default App;
