import React from 'react';

import OrderFilterStyled from 'Styled/orders/filters/filter';
import Pill from 'Styled/orders/filters/pill';

const OrderFilter = ({ onSelect, ...props }) => (
	<OrderFilterStyled {...props}>
		<input type="checkbox" onChange={() => onSelect(props.type)} checked={props.selected} />
		<Pill type={props.type}>{props.count}</Pill>
		{props.children}
	</OrderFilterStyled>
);

export default OrderFilter;

