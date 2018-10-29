import  {combineReducers} from 'redux';
import click from './click';
import getData from './getData';

export default combineReducers({
    click,
    getData
});