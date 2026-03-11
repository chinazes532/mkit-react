import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Card from './components/Card';
import Cards from './components/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Cards />
    <App />
  </React.StrictMode>
);
