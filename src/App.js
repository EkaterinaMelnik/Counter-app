import React from 'react';
import AddCounter from './components/AddCounter.js';
import CountersList from "./containers/CountersList";
import './App.css';
import DeleteCounter from "./components/DeleteCounter";

const App = () => (
    <div className="App">
        <CountersList/>
        <hr/>
        <AddCounter/>
        <DeleteCounter/>
    </div>
);

export default App;