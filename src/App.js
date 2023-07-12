import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import InputNote from './InputNote';
import Note from './Note';
import GetNotes from './GetNotes';

function App() {
  
  return (
    <div className="App">
      <InputNote />
      <Note />
    </div>
  );
}


export default App;


