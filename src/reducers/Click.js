import {combineReducers} from "redux";

const initialState = {
    counter: 0,
    double_counter: 1
};

function click(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

function doubleClick(state = initialState, action) {
    switch (action.type) {
        case 'DOUBLE_INCREMENT':
            return {
                ...state,
                double_counter: state.double_counter + 2
            };
        case  'DOUBLE_DECREMENT':
            return {
                ...state,
                double_counter: state.double_counter - 2
            };
        default:
            return state
    }
}

export default combineReducers({click, doubleClick});