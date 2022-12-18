import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/collectie" element={<Collectie />}></Route>
      </Routes>
    </>
  );
}

export default App;
