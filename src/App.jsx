// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import RecipeList from './components/recipeList';
import RecipeDetails from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/" element={<RecipeList />} />
      </Routes>
    </Router>
  );
}

export default App;
