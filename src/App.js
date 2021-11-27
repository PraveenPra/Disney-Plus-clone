import React from 'react';
import './App.css';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router, Routes as Switch, Route, Link
} from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path='/'
            element={<Home/>}/>
            <Route path='/detail'
            element={<Detail/>}/>
         
        </Switch>
      </Router>
    
    
    </div>
  );
}

export default App;
