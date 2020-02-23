const initialState = {
	$next: 1038298,
	1038296: {
		created: Date.now() - (3 * 60 * 1000),
		status: "in-progress",
		statusTime: Date.now(),
		recipes: [ { id: 92736, qty: 3 } ],
	},
	1038297: {
		created: Date.now() - (24 * 1000),
		status: "pending",
		statusTime: Date.now() - (24 * 1000),
		recipes: [ { id: 92736, qty: 3 } ],
	},
};

const OrdersReducer = (state = initialState, action) => {
	return state;
};

export default OrdersReducer;

