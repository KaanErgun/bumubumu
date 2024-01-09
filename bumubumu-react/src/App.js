import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // Hakkında sayfasını içe aktar
import Menu from './components/Menu';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        // Diğer route'lar
      </Routes>
    </Router>
  );
}

export default App;
