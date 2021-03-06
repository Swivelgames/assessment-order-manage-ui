import {
	ORDER_POKE,
	ORDER_FULFILLED,
	ORDER_STARTED,
	ORDER_CANCELLED,
	ORDER_CREATED,

	INGREDIENTS_ADD,
	INGREDIENTS_USED,

	UI_ORDER_FILTER_RESET,
	UI_ORDER_FILTER_TOGGLE
} from 'Actions/types';

export const toggleFilter = filter => dispatch => {
	dispatch({
		type: UI_ORDER_FILTER_TOGGLE,
		payload: filter
	});
};

export const resetFilter = filter => dispatch => {
	dispatch({ type: UI_ORDER_FILTER_RESET });
};


export const startOrder = id => (dispatch, getAppState) => {
	const { orders } = getAppState();
	if (!(id in orders)) {
		console.warn(`DEBUG: startOrder(): Order ${id} was not found in app state`);
		return;
	}

	const { [id]: order } = orders;

	dispatch({
		type: ORDER_STARTED,
		payload: { id }
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
		payload: { id }
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
	const { recipes, ingredients, orders, ui } = getAppState();

	const { orderUndoHalflife } = ui;

	if (!(id in orders)) {
		console.warn(`DEBUG: startOrder(): Order ${id} was not found in app state`);
		return;
	}

	const { [id]: order } = orders;

	const recipeIngredients = order.recipes.reduce((a, { id, qty }) => [
		...Object.keys(recipes[id].ingredients).map((iId) => ({
			id: iId, qty: recipes[id].ingredients[iId] * qty
		}))
	], []).forEach((ingredient) => dispatch({
		type: INGREDIENTS_ADD,
		payload: ingredient
	}));

	dispatch({
		type: ORDER_CANCELLED,
		payload: { id }
	});

	// @TODO: This is a TERRIBLE SOLUTION
	setTimeout(() => {
		dispatch({
			type: ORDER_POKE,
			payload: { id }
		});
	}, orderUndoHalflife);
};

export const placeOrder = (order) => (dispatch, getAppState) => {
	const { recipes, ingredients, orders, ui } = getAppState();
	const { orderAutoStartTime } = ui;
	const { $next: orderId } = orders;

	const recipeIngredients = order.reduce((a, id) => [
		...Object.keys(recipes[id].ingredients).map((iId) => ({
			id: iId, qty: recipes[id].ingredients[iId]
		}))
	], []).forEach((ingredient) => dispatch({
		type: INGREDIENTS_USED,
		payload: ingredient
	}));

	dispatch({
		type: ORDER_CREATED,
		payload: order.map(recipe => ({
			id: recipe, qty: 1
		}))
	});

	setTimeout(() => {
		const { orders: { [orderId]: order } } = getAppState();

		if(order.status !== 'pending') return;

		dispatch({
			type: ORDER_STARTED,
			payload: { id: orderId }
		});
	}, orderAutoStartTime);
};
