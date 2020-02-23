import React from 'react';

import OrdersList from 'Styled/orders/list';

import OrderLi from './list-item';

const type = "fulfilled";

const Orders = ({ orders, startOrder, fulfillOrder, cancelOrder }) => (
	<OrdersList>
		{orders.map((order) => (
			<OrderLi
				key={order.id}
				order={order}
				startOrder={startOrder}
				fulfillOrder={fulfillOrder}
				cancelOrder={cancelOrder}
			/>
		))}
	</OrdersList>
);

export default Orders;
