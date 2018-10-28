export function doIncrement(id) {
    return {
        type: 'INCREMENT',
        id
    }
}

export function doDecrement(id) {
    return {
        type: 'DECREMENT',
        id
    }
}

export function addCounter() {
    return {
        type: 'ADD_COUNTER'
    }
}

export const deleteCounter = () => ({
   type: 'DELETE_COUNTER'
});
