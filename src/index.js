import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers/Reducer';

const store = createStore(rootReducer);

const render = () => ReactDOM.render(
    <Counter value={store.getState()}
             onIncrement={() => store.dispatch({type: 'INCREMENT'})}
             onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.getElementById('root'));

render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
