const initialState = {
	orderFilter: ['pending', 'in-progress'],
	orderFadeDur: 10 * 1000, // 10 Seconds
	inventoryFilter: [],
	inventoryLowQty: 30,
};

const UIReducer = (state = initialState, action) => {
	return state;
};

export default UIReducer;
