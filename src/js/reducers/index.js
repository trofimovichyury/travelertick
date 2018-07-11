import { combineReducers } from 'redux';
import search from './Search';
import filters from './Filters';

export default combineReducers({
    search,
    filters
});