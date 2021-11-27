import React from 'react';
import './App.css';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div >
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
