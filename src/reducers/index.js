import { combineReducers } from 'redux';

import IngredientsReducer from './ingredients';
import OrdersReducer from './orders';
import RecipesReducer from './recipes';

const reducers = combineReducers({
	ingredients: IngredientsReducer,
	orders: OrdersReducer,
	recipes: RecipesReducer
});

export default reducers;
