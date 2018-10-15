export default function addNewCounter(state = [0], action){
    switch (action.type) {
        case 'ADD_COUNTER':
            return state.slice().push('1');
        default:
            return state;
    }
}