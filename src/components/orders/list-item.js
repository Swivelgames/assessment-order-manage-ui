import React from 'react';

import OrderLi from 'Styled/orders/list-item';
import StatusIcon from 'Styled/orders/list-item/status-icon';
import OrderInfo from 'Styled/orders/list-item/info';

const Orders = ({ status, time, number, recipes }) => {
	const type = status;

	return (
		<OrderLi type={type}>
			<StatusIcon type={type} />
			<OrderInfo type={type} time="02:49" number="78" />
		</OrderLi>
	);
};

export default Orders;
