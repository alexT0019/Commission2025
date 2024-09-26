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
import { BrowserRouter, Routes, Route } from "react-router-dom";

//cors
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Or enable CORS for specific origins
// app.use(cors({ origin: 'https://example.com' }));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, CORS!' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
