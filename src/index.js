/* Test run: "npm run start" */ 
import React, { startTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardMemoryGame from './CardMemoryGame';

const cardImages = [ 
  {"src":"/img/Card 1.png"}, 
  {"src":"/img/Card 2.png"},
  {"src":"/img/Card 3.png"},
  {"src":"/img/Card 4.png"},
  {"src":"/img/Card 5.png"},
  {"src":"/img/Card 6.png"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardMemoryGame />
  </React.StrictMode>
);
