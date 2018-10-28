import React from 'react';
import {deleteCounter} from "../actions/Action";
import {connect} from 'react-redux';

const DeleteCounter = ({deleteLastCounter}) => (
    <button onClick={deleteLastCounter}>
        Delete last counter
    </button>
);

const mapDispatchToProps = dispatch => ({
    deleteLastCounter: () => dispatch(deleteCounter())
});

export default connect(null, mapDispatchToProps)(DeleteCounter)