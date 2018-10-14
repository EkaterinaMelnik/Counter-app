export default function doubleClick(state = 0, action) {
    switch (action.type) {
        case 'DOUBLE_INCREMENT':
            return state + 2;
        case  'DOUBLE_DECREMENT':
            return state - 2 >= 0 ? state - 2 : 0;
        default:
            return state
    }
}