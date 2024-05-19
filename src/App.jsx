import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Like from "./pages/like/Like";
import UserContextProvider from "./config/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
