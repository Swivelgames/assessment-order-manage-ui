const initialState = {
	$next: 1038298,
	1038296: {
		created: Date.now() - (3.5 * 60 * 1000),
		started: Date.now() - 4000,
		updated: Date.now() - 4000,
		status: "in-progress",
		recipes: [ { id: 92736, qty: 3 } ],
	},
	1038297: {
		created: Date.now() - (24 * 1000),
		updated: Date.now() - (24 * 1000),
		status: "pending",
		recipes: [ { id: 92736, qty: 3 } ],
	},
};

const OrdersReducer = (state = initialState, action) => {
	return state;
};

export default OrdersReducer;

