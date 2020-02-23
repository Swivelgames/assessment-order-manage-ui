import {
	ORDER_POKE,
	ORDER_FULFILLED,
	ORDER_STARTED,
	ORDER_CANCELLED,
	ORDER_CREATED
} from 'Actions/types';

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

const updateOrderById = (id, order, list) => {
	const newOrder = {
		created: order.created,
		started: order.started,
		status: order.status,
		recipes: order.recipes,
		updated: Date.now()
	};

	return { ...list, [id]: newOrder };
};

const createOrder = (state, recipes) => ({
	...state,
	[state.$next]: {
		created: Date.now(),
		updated: Date.now(),
		status: "pending",
		recipes: [ ...recipes ]
	},
	$next: state.$next + 1
});

const OrdersReducer = (state = initialState, action) => {
	const { type, payload = {} } = action;
	const { id } = payload;

	switch(type) {
		case ORDER_FULFILLED:
		case ORDER_STARTED:
		case ORDER_CANCELLED:
			return updateOrderById(id, payload, state);
		case ORDER_POKE:
			// @TODO: This is a TERRIBLE SOLUTION
			return {
				...state,
				[payload.id]: { ...state[payload.id] }
			};
		case ORDER_CREATED:
			return createOrder(state, payload);
		default:
			return state;
	}
};

export default OrdersReducer;

