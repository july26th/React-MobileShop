import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import filters from './filters';

const appReducers = combineReducers({
    products,
    categories,
    filters
});

export default appReducers;