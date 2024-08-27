// src/App.js
import React from 'react';
import './App.css';
import ChessBoard from './components/ChessBoard';
import './components/ChessBoard.css';

function App() {
  return (
    <div className="App">
      <h1>Simple Chess Game</h1>
      <ChessBoard />
    </div>
  );
}

export default App;
