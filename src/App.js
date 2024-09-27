//import logo from './logo.svg';
import './App.css';
import Landing from './Pages/landing'
import Info from './Pages/info';
import Form from './Pages/form';
import Headshot from './Pages/headshot';
import WaistUp from './Pages/waistUp';
import FullBody from './Pages/fullBody';
import Illustration from './Pages/illustration';
import ItemList from './Pages/itemList';
import { Routes, Route } from "react-router-dom";

const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/itemList" element={<ItemList />}></Route>
            <Route path="/info" element={<Info />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/headshot" element={<Headshot />}></Route>
            <Route path="/waistUp" element={<WaistUp />}></Route>
            <Route path="/fullBody" element={<FullBody />}></Route>
            <Route path="/illustration" element={<Illustration />}></Route>
          </Routes>
    </div>
  );
}

export default App;
