import { connect } from 'react-redux';

import {
	startOrder, fulfillOrder, cancelOrder
} from 'Actions/orders';

import OrdersList from './list';

const prepareOrders = orders => (
	Object.keys(orders).map(
		id => ({ ...orders[id], id })
	)
);

const applyFilters = (filters = [], arr, halflife) => {
	arr.sort((a, b) => a.created - b.created);

	if (filters.length === 0) return arr;

	return arr.filter((item) => {
		let show = filters.indexOf(item.status) > -1;
		if (!show) {
			// Allow items, that the filter does not apply to, the
			// ability to linger a little while after their status
			// has changed
			if (item.updated + halflife > Date.now()) {
				show = true;
			}
		}
		return show;
	});
}

const mapStateToProps = ({
	orders,
	ui: {
		orderFilter: filter,
		orderUndoHalflife: undoDuration
	}
}) => ({
	orders: applyFilters(
		filter,
		prepareOrders(orders),
		undoDuration
	)
});

const mapDispatchToProps = dispatch => ({
	startOrder: (...args) => dispatch(startOrder(...args)),
	fulfillOrder: (...args) => dispatch(fulfillOrder(...args)),
	cancelOrder: (...args) => dispatch(cancelOrder(...args))
});

const ConnectedOrdersList = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrdersList);

export default ConnectedOrdersList;
