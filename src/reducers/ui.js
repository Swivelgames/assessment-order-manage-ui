import {
	UI_ORDER_FILTER_RESET,
	UI_ORDER_FILTER_TOGGLE,
	UI_INVENTORY_FILTER_RESET,
	UI_INVENTORY_FILTER_TOGGLE
} from 'Actions/types';

const initialState = {
	orderFilter: ['pending', 'in-progress'],
	orderUndoHalflife: 3 * 1000, // 3 Seconds
	orderAutoStartTime: 3 * 60 * 1000, // 3 minutes
	inventoryFilter: [],
	inventoryLowQty: 30,
};

const toggleFilter = (f, l) => {
	const s = new Set(l);
	if (s.has(f)) s.delete(f);
	else s.add(f);
	return Array.from(s);
}

const UIReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case UI_ORDER_FILTER_RESET:
			return { ...state, orderFilter: [] };
		case UI_ORDER_FILTER_TOGGLE:
			return {
				...state,
				orderFilter: toggleFilter(
					payload, state.orderFilter
				)
			};
		case UI_INVENTORY_FILTER_RESET:
			return { ...state, inventoryFilter: [] };
		case UI_INVENTORY_FILTER_TOGGLE:
			return {
				...state,
				inventoryFilter: toggleFilter(
					payload, state.inventoryFilter
				)
			};
		default:
			return state;
	}
};

export default UIReducer;
