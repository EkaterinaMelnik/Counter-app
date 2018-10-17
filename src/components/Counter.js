import React, {PropTypes} from 'react';
import {doDecrement, doIncrement} from "../actions/Action";
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


// const mapStateToProps = state => ({
//     counters: state.click
// });
//
// const mapDispatchToProps = dispatch => ({
//     onIncrement: id => dispatch(doIncrement(id)),
//     onDecrement: id => dispatch(doDecrement(id))
// });

export default Counter