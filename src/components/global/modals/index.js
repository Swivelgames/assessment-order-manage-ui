import { connect } from 'react-redux';

import { closeModal } from 'Actions/modals';

import Modals from './modals';

const mapStateToProps = ({ modal: { open: modalName } }) => ({ modalName });
const mapDispatchToProps = dispatch => ({
	close: (...args) => dispatch(closeModal(...args))
});

const ConnectedModals = connect(
	mapStateToProps,
	mapDispatchToProps
)(Modals);

export default ConnectedModals;
