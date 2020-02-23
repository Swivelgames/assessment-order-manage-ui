import {
	UI_INVENTORY_FILTER_RESET,
	UI_INVENTORY_FILTER_TOGGLE
} from 'Actions/types';

const initialState = {
	orderFilter: ['pending', 'in-progress'],
	orderUndoHalflife: 10 * 1000, // 10 Seconds
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
