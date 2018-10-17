export default function click(state = [0], action) {
    switch (action.type) {
        case 'INCREMENT':
            return state.map((counter, index) => {
                if(action.id === index){
                    return counter++;
                }
                return counter;
            });
        case 'DECREMENT':
            return state.map((counter, index) => {
                if(action.id === index){
                    return counter--;
                }
                return counter;
            });
        case 'ADD_COUNTER':
            return [...state, 0];
        default:
            return state;
    }
}