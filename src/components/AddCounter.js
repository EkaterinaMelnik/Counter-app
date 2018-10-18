import React from 'react';
import {addCounter} from "../actions/Action";
import {connect} from 'react-redux';

const AddCounter = ({addNewCounter, counterArr}) => (
    <button onClick={addNewCounter}>
        Add new counter ({counterArr.length})
    </button>
);

const mapStateToProps = state => ({
        counterArr: state.click
});

const mapDispatchToProps = dispatch => ({
    addNewCounter: () => dispatch(addCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCounter)