import React from 'react';
import Counter from '../components/Counter.js';
import {doDecrement, doIncrement} from '../actions/Action';
import {connect} from 'react-redux';

const CountersList = ({counters, onIncrement, onDecrement}) => (
    <div className="App">
        {counters.map((counter, index) =>
            <Counter key={index}
                     clicked={counter}
                     onIncrement={() => onIncrement(index)}
                     onDecrement={() => onDecrement(index)}
            />
        )}
    </div>
);

const mapStateToProps = state => ({
    counters: state.click
});

const mapDispatchToProps = dispatch => ({
    onIncrement: id => dispatch(doIncrement(id)),
    onDecrement: id => dispatch(doDecrement(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountersList);