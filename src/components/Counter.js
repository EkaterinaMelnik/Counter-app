import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({clicked, onIncrement, onDecrement}) => {
    return (
        <div>
            <p>Clicked: {clicked}</p>
            <button onClick={onIncrement}>
                +
            </button>
            <button onClick={onDecrement}>
                -
            </button>
        </div>
    )
};

Counter.propTypes = {
    clicked: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter