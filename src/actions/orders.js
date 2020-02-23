import {
	ORDER_POKE,
	ORDER_FULFILLED,
	ORDER_STARTED,
	ORDER_CANCELLED,
	ORDER_CREATED
} from './types';

export const startOrder = id => (dispatch, getAppState) => {
	const { orders } = getAppState();
	if (!(id in orders)) {
		console.warn(`DEBUG: startOrder(): Order ${id} was not found in app state`);
		return;
	}

	const { [id]: order } = orders;

	dispatch({
		type: ORDER_STARTED,
		payload: {
			id,
			...order,
			status: 'in-progress',
			started: Date.now(),
		}
	});
};

export const fulfillOrder = id => (dispatch, getAppState) => {
	const { orders, ui: { orderUndoHalflife } } = getAppState();
	if (!(id in orders)) {
		console.warn(`DEBUG: startOrder(): Order ${id} was not found in app state`);
		return;
	}

	const { [id]: order } = orders;

	dispatch({
		type: ORDER_FULFILLED,
		payload: {
			id,
			...order,
			status: 'fulfilled',
		}
	});

	// @TODO: This is a TERRIBLE SOLUTION
	setTimeout(() => {
		dispatch({
			type: ORDER_POKE,
			payload: { id }
		});
	}, orderUndoHalflife);
};

export const cancelOrder = id => (dispatch, getAppState) => {
	const { orders, ui: { orderUndoHalflife } } = getAppState();
	if (!(id in orders)) {
		console.warn(`DEBUG: startOrder(): Order ${id} was not found in app state`);
		return;
	}

	const { [id]: order } = orders;

	dispatch({
		type: ORDER_CANCELLED,
		payload: {
			id,
			...order,
			status: 'deleted',
		}
	});

	// @TODO: This is a TERRIBLE SOLUTION
	setTimeout(() => {
		dispatch({
			type: ORDER_POKE,
			payload: { id }
		});
	}, orderUndoHalflife);
};

