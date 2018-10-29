import React from 'react';
import {connect} from 'react-redux';

const FetchButton = ({fetchData}) => (
    <button onClick={() => fetchData}>fetch</button>
);

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch({type: 'FETCH_SUCCEEDED'})
});

export default connect(null, mapDispatchToProps)(FetchButton);