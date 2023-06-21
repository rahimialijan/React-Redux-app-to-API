import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent';
import Books from './router/Books';
import Categories from './router/Categories';
import './styles/App.css';

function App() {
  return (
    <Router>
      <NavigationComponent />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
