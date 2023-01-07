import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Home/Home";
import Collectie from "../components/Collectie/Collectie";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Collectie" element={<Collectie />}></Route>
      </Routes>
    </>
  );
}

export default App;
