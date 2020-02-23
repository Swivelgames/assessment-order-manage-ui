const initialState = {
	12345: { count: 240,	name: "Tomato Slices",	colors: ['blue', 'purple'] },
	67890: { count: 12,		name: "Pickles",		colors: ['green', 'red'] },
	34567: { count: 18,		name: "Hamburger Buns",	colors: ['yellow', 'red'] },
	76543: { count: 0,		name: "Turkey Slices",	colors: ['blue', 'red'] },
};

const IngredientsReducer = (state = initialState, action) => {
	return state;
};

export default IngredientsReducer;

