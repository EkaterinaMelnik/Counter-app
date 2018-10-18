import React from 'react';
import AddCounter from './components/AddCounter.js';
import CountersList from "./containers/CountersList";
import './App.css';

const App = () => (
    <div className="App">
        <CountersList/>
        <hr/>
        <AddCounter/>
    </div>
);

export default App;