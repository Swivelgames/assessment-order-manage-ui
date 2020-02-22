import { connect } from 'react-redux';

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
			.reduce((a, o) => [...a, o.colors], [])
	)
);

const applyFilters = (filters = [], arr) => {
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
	sections: {
		"Out Of Stock": applyFilters(filter, getOutOfStock(items)),
		"Running Out": applyFilters(filter, getRunningOut(items, limit)),
		"In Stock": applyFilters(filter, getInStock(items, limit)),
	}
});

const ConnectedInventory = connect(mapStateToProps)(Inventory);

export default ConnectedInventory;
