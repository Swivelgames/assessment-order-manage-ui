import {
	MODAL_OPEN,
	MODAL_CLOSE
}  from 'Actions/types';

export const openModal = type => dispatch => dispatch({
	type: MODAL_OPEN,
	payload: type
});

export const closeModal = () => dispatch => dispatch({
	type: MODAL_CLOSE
});
