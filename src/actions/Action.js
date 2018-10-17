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

export const doDoubleIncrement = {type: 'DOUBLE_INCREMENT'};

export const doDoubleDecrement = {type: 'DOUBLE_DECREMENT'};

export const addCounter = {type: 'ADD_COUNTER'};