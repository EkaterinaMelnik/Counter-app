import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({clicked, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync}) => {
    return (
        <div>
            <p>Clicked: {clicked}</p>
            <button onClick={onIncrement}>
                +
            </button>
            <button onClick={onDecrement}>
                -
            </button>
            <button onClick={onIncrementAsync}>
                + (async)
            </button>
            <button onClick={onDecrementAsync}>
                - (async)
            </button>
        </div>
    )
};

Counter.propTypes = {
    clicked: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired,
    onDecrementAsync: PropTypes.func.isRequired
};

export default Counter