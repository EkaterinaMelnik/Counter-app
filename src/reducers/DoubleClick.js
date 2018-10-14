function doubleClick (state = {double_counter: 0}, action) {
    switch (action.type) {
        case 'DOUBLE_INCREMENT':
            return {double_counter: state.double_counter + 2};
        case  'DOUBLE_DECREMENT':
            return {double_counter: state.double_counter - 2};
        default:
            return state
    }
};

export default doubleClick