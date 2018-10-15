import React from 'react';
import './App.css';
import Counter from './components/Counter.js';
import DoubleCounter from "./components/DoubleCounter.js";
import AddCounter from './components/AddCounter.js';

const App = () => (
    <div className="App">
        <Counter/>
        <DoubleCounter/>
        <hr/>
        <AddCounter/>
    </div>
);

export default App;