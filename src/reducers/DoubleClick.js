const doubleClick = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_DOUBLE':
            return state + 2;
        case  'DECREMENT_DOUBLE':
            return state - 2;
        default:
            return state
    }
};

export default doubleClick