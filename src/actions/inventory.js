import {
	UI_INVENTORY_FILTER_RESET,
	UI_INVENTORY_FILTER_TOGGLE
} from 'Actions/types';

export const toggleFilter = filter => dispatch => {
	dispatch({
		type: UI_INVENTORY_FILTER_TOGGLE,
		payload: filter
	});
};

export const resetFilter = filter => dispatch => {
	dispatch({ type: UI_INVENTORY_FILTER_RESET });
};

