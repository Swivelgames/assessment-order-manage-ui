import { connect } from 'react-redux';

import {
	resetFilter,
	toggleFilter
} from 'Actions/inventory';

import Inventory from './inventory';

const getOutOfStock = items =>
	Object.keys(items).filter(
		id => items[id].count === 0
	).map(
		id => ({ ...items[id], id })
	);

const getRunningOut = (items, limit = 10) =>
	Object.keys(items).filter(id => (
		items[id].count <= limit &&
		items[id].count > 0
	)).map(
		id => ({ ...items[id], id })
	);

const getInStock = (items, limit = 10) =>
	Object.keys(items).filter(
		id => items[id].count > limit
	).map(
		id => ({ ...items[id], id })
	);

const getAvailableFilters = items => Array.from(
	new Set(
		Object.keys(items)
			.map(id => items[id])
			.reduce((a, o) => [...a, ...o.colors], [])
	)
);

const applyFilters = (filters = [], arr) => {
	arr.sort((a, b) => {
		console.log(a.count, b.count, a.count - b.count);
		return a.count - b.count;
	});

	if (filters.length === 0) return arr;

	return arr.filter(
		item => filters.filter(
			f => item.colors.indexOf(f) > -1
		).length !== 0
	);
}

const mapStateToProps = ({
	ingredients: items,
	ui: {
		inventoryFilter: filter,
		inventoryLowQty: limit
	}
}) => ({
	filter,
	filtersAvailable: getAvailableFilters(items),
	sections: [
		{ label: "Out Of Stock", items: applyFilters(filter, getOutOfStock(items)) },
		{ label: "Running Out", items: applyFilters(filter, getRunningOut(items, limit)) },
		{ label: "In Stock", items: applyFilters(filter, getInStock(items, limit)) },
	]
});

const mapDispatchToProps = dispatch => ({
	resetFilter: (...args) => dispatch(resetFilter(...args)),
	toggleFilter: (...args) => dispatch(toggleFilter(...args))
});

const ConnectedInventory = connect(
	mapStateToProps,
	mapDispatchToProps
)(Inventory);

export default ConnectedInventory;
