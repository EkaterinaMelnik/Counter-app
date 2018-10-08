import React from 'react';
import {doIncrement, doDecrement} from "../actions/Action";
import {connect} from 'react-redux';

const Counter = ({value, onIncrement, onDecrement}) => {
    return (
        <div>
            <p>Value: {value}</p>
            <button onClick={onIncrement}>
                +
            </button>
            <button onClick={onDecrement}>
                -
            </button>
        </div>
    )
};

const mapStateToProps = state => {
    return {value: state}
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(doIncrement),
        onDecrement: () => dispatch(doDecrement)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)