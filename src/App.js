import React from 'react';
import './App.css';
import Counter from './components/Counter.js';
import DoubleCounter from "./components/DoubleCounter.js";
import AddCounter from './components/AddCounter.js';
import {addNewCounter, doDecrement, doIncrement} from './actions/Action';
import {connect} from 'react-redux';

const App = ({counters, onIncrement, onDecrement}) => (
    <div className="App">
        {counters.map((counter, index) =>
            <Counter key={index}
                     clicked={counter}
                     onIncrement={() => onIncrement(index)}
                     onDecrement={() => onDecrement(index)}
            />
        )}
        {/*<Counter/>*/}
        {/*<DoubleCounter/>*/}
        <hr/>
        <AddCounter/>
    </div>
);

const mapStateToProps = state => ({
    counters: state.click
});

const mapDispatchToProps = dispatch => ({
    onIncrement: id => dispatch(doIncrement(id)),
    onDecrement: id => dispatch(doDecrement(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);