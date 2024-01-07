import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Post from './pages/postpage';
import Home from "./pages/getposts";
import Fullpost from './pages/fullpost';
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    
    <Router>
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post" element={<Post />} />
    <Route path='/fullpost' element={<Fullpost />} />
    </Routes>
    </Router>
  );
};

export default App;
