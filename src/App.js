import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./components/index/Navbar";
import Weather from "./components/weather/Weather";
import "./App.css";
import Home from './components/home/Home';
import About from './components/about/About';


function App() {
  return (
    <>
      {/* <Home />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/weather" element={<Weather/>} />

      </Routes> */}
      <Navbar/>
      <Router>
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/weather" element={<Weather />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
