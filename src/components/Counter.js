import React from 'react';
import {doIncrement, doDecrement} from "../actions/Action";
import {connect} from 'react-redux';

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

const mapStateToProps = state => ({
    clicked: state.click
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(doIncrement),
    onDecrement: () => dispatch(doDecrement)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)