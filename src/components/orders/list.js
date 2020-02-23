import React from 'react';

import OrdersList from 'Styled/orders/list';
import EmptyOrders from 'Styled/orders/list/empty';

import OrderLi from './list-item';

const type = "fulfilled";

const Orders = ({ orders, autoStart, startOrder, fulfillOrder, cancelOrder }) => (
	<OrdersList>
		{orders.length === 0 && (
			<EmptyOrders>
				No orders. Try clicking the filters above, or Place a New Order when you're ready.
			</EmptyOrders>
		)}
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
