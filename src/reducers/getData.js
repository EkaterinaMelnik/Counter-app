export default function getData(state = '', action) {
    switch (action.type) {
        case 'FETCH_SUCCEEDED':
            console.log('fetch');
            return 'fetch';
        default:
            return state;
    }
}