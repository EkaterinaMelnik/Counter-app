import  {combineReducers} from 'redux';
import click from './Click';
import doubleClick from './DoubleClick';
import addNewCounter from './AddCounter';

export default combineReducers({
    click,
    doubleClick,
    addNewCounter
});