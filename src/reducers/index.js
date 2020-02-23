import { combineReducers } from 'redux';

import IngredientsReducer from './ingredients';
import OrdersReducer from './orders';
import RecipesReducer from './recipes';
import ModalReducer from './modal';
import UIReducer from './ui';

const reducers = combineReducers({
	ingredients: IngredientsReducer,
	orders: OrdersReducer,
	recipes: RecipesReducer,
	modal: ModalReducer,
	ui: UIReducer
});

export default reducers;
