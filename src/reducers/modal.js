import {
	MODAL_OPEN,
	MODAL_CLOSE
}  from 'Actions/types';

const initialState = { open: false };

const ModalReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch(type) {
		case MODAL_OPEN:
			return { ...state, open: payload };
		case MODAL_CLOSE:
			return { ...state, open: false };
		default:
			return state;
	}

};

export default ModalReducer;

