import React from 'react';

import OrdersList from 'Styled/orders/list';

import OrderLi from './list-item';

const type = "fulfilled";

const Orders = () => (
	<OrdersList>
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
		<OrderLi status="in-progress" time="02:49" number="78" recipes={[]} />
	</OrdersList>
);

export default Orders;
