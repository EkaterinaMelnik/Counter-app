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

export function doIncrementAsync(id) {
    return {
        type: 'INCREMENT_ASYNC',
        id
    }
}

export function doDecrementAsync(id) {
    return {
        type: 'DECREMENT_ASYNC',
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
