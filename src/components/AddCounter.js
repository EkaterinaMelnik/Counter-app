import React from 'react';
import {addCounter} from "../actions/Action";
import {connect} from 'react-redux';

const AddCounter = ({addNewCounter}) => (
    <button onClick={addNewCounter}>
        Add new counter
    </button>
);

const mapDispatchToProps = dispatch => ({
    addNewCounter: () => dispatch(addCounter())
});

export default connect(null, mapDispatchToProps)(AddCounter)