import { connect } from 'react-redux';

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
			if (item.statusTime + halflife > Date.now()) {
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

const ConnectedOrdersList = connect(mapStateToProps)(OrdersList);

export default ConnectedOrdersList;
