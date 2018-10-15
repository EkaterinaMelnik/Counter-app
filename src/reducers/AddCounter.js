export default function addNewCounter(state = [], action){
    switch (action.type) {
        case 'ADD_COUNTER':
            return [...state, 0];
        default:
            return state;
    }
}