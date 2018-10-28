import React from 'react';
import Counter from '../components/Counter.js';
import {doDecrement, doDecrementAsync, doIncrement, doIncrementAsync} from '../actions/Action';
import {connect} from 'react-redux';

const CountersList = ({counters, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync}) => (
    <div className="App">
        {counters.map((counter, index) =>
            <Counter key={index}
                     clicked={counter}
                     onIncrement={() => onIncrement(index)}
                     onDecrement={() => onDecrement(index)}
                     onIncrementAsync={() => onIncrementAsync(index)}
                     onDecrementAsync={() => onDecrementAsync(index)}

            />
        )}
    </div>
);

const mapStateToProps = state => ({
    counters: state.click
});

const mapDispatchToProps = dispatch => ({
    onIncrement: id => dispatch(doIncrement(id)),
    onDecrement: id => dispatch(doDecrement(id)),
    onIncrementAsync: id => dispatch(doIncrementAsync(id)),
    onDecrementAsync: id => dispatch(doDecrementAsync(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(CountersList);