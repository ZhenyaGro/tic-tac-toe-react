import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import Game from './components/game';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);