import { connect } from 'react-redux';

import { toggleFilter } from 'Actions/orders';

import OrderFilters from './filters';

const count = (type, orders) => (
	Object.keys(orders).filter(
		id => orders[id].status === type
	).length
);

const mapStateToProps = ({ ui, orders }) => ({
	selection: ui.orderFilter,
	counts: {
		'pending': count('pending', orders),
		'in-progress': count('in-progress', orders),
		'fulfilled': count('fulfilled', orders),
		'deleted': count('deleted', orders),
	}
});

const mapDispatchToProps = dispatch => ({
	onSelect: (...args) => dispatch(toggleFilter(...args))
});

const ConnectedOrderFilters = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderFilters);

export default ConnectedOrderFilters;
