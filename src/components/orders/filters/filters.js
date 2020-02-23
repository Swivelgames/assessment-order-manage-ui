import React from 'react';

import OrderFiltersStyled from 'Styled/orders/filters';

import OrderFilter from './filter';

const TYPES = [
	"pending",
	"in-progress",
	"fulfilled",
	"deleted"
];

const TYPE_COPY = {
	"pending": "Pending",
	"in-progress": "In Progress",
	"fulfilled": "Fulfilled",
	"deleted": "Cancelled"
};

const OrderFilters = ({ selection, onSelect, counts }) => (
	<OrderFiltersStyled>
		{TYPES.map(type => (
			<OrderFilter
				key={type}
				type={type}
				count={counts[type]}
				onSelect={onSelect}
				selected={selection.indexOf(type) > -1}
			>{TYPE_COPY[type]}</OrderFilter>
		))}
	</OrderFiltersStyled>
);

export default OrderFilters;
