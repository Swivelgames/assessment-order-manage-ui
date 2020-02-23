import React from 'react';

import OrdersList from 'Styled/orders/list';

import OrderLi from './list-item';

const type = "fulfilled";

const Orders = ({ orders }) => (
	<OrdersList>
		{orders.map((order) => (
			<OrderLi key={order.id} {...order} />
		))}
	</OrdersList>
);

export default Orders;
