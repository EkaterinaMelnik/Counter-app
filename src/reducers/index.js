import  {combineReducers} from 'redux';
import click from './Click';
import doubleClick from './DoubleClick';

export default combineReducers({
    click,
    doubleClick
});