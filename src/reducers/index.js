import { combineReducers } from 'redux';

import IngredientsReducer from './ingredients';
import OrdersReducer from './orders';
import RecipesReducer from './recipes';
import UIReducer from './ui';

const reducers = combineReducers({
	ingredients: IngredientsReducer,
	orders: OrdersReducer,
	recipes: RecipesReducer,
	ui: UIReducer
});

export default reducers;
