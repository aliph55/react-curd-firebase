import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./pages/register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default App;
