import React from 'react';
import './App.css';
import  Counter from './components/Counter.js';
import DoubleCounter from "./components/DoubleCounter";

const App = () => (
      <div className="App">
          <Counter/>
          <DoubleCounter/>
      </div>
);

export default App;