import React from 'react';

import OrdersList from 'Styled/orders/list';

import OrderLi from './list-item';

const type = "fulfilled";

const Orders = ({ orders, autoStart, startOrder, fulfillOrder, cancelOrder }) => (
	<OrdersList>
		{orders.map((order) => (
			<OrderLi
				key={order.id}
				order={order}
				autoStart={autoStart}
				startOrder={startOrder}
				fulfillOrder={fulfillOrder}
				cancelOrder={cancelOrder}
			/>
		))}
	</OrdersList>
);

export default Orders;
