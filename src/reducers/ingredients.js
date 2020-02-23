import {
	INGREDIENTS_USED
} from 'Actions/types';

const initialState = {
	12345: { count: 240,	name: "Tomato Slices",	colors: ['blue', 'purple'] },
	67890: { count: 12,		name: "Pickles",		colors: ['green', 'red'] },
	34567: { count: 18,		name: "Hamburger Buns",	colors: ['yellow', 'red'] },
	76543: { count: 0,		name: "Turkey Slices",	colors: ['blue', 'red'] },
};

const useIngredient = (state, id, qty) => ({
	...state,
	[id]: {
		...state[id],
		count: Math.max(0, state[id].count - qty)
	}
});

const IngredientsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch(type) {
		case INGREDIENTS_USED:
			return useIngredient(state, payload.id, payload.qty);
		default:
			return state;
	}
};

export default IngredientsReducer;

