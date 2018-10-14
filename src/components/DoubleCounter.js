import React from 'react';
import {connect} from 'react-redux';
import {doDoubleIncrement, doDoubleDecrement} from "../actions/Action";

const DoubleCounter = ({double_clicked, onDoubleIncrement, onDoubleDecrement}) => {
    return (
        <div>
            <p>Double clicked: {double_clicked}</p>
            <button onClick={onDoubleIncrement}>
                ++
            </button>
            <button onClick={onDoubleDecrement}>
                --
            </button>
        </div>
    )
};

const mapStateToProps = state => ({
    double_clicked: state.doubleClick
});

const mapDispatchToProps = dispatch => ({
    onDoubleIncrement: () => dispatch(doDoubleIncrement),
    onDoubleDecrement: () => dispatch(doDoubleDecrement)
});

export default connect(mapStateToProps, mapDispatchToProps)(DoubleCounter);