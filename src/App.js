import React from 'react';
import './App.css';
import Counter from './components/Counter.js';
import DoubleCounter from "./components/DoubleCounter.js";
import AddCounter from './components/AddCounter.js';
import {addNewCounter} from './actions/Action';
import {connect} from 'react-redux';

const App = (counters) => (
    <div className="App">
        {counters.map(() =>
            <Counter/>
        )}
        <DoubleCounter/>
        <hr/>
        <AddCounter/>
    </div>
);

const mapStateToProps = state => ({
    counters: state.addNewCounter
});
export default connect(mapStateToProps)(App);