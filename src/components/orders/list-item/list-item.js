import React from 'react';
import styled from 'styled-components';

import OrderLiStyled from 'Styled/orders/list-item';
import StatusIcon from 'Styled/orders/list-item/status-icon';

import OrderInfo from './timer';

import PendingButtons from './buttons/pending';
import InProgressButtons from './buttons/in-progress';

const OrderLi = ({ order, startOrder, fulfillOrder, cancelOrder }) => {
	const { status: type } = order;

	return (
		<OrderLiStyled type={type}>
			<StatusIcon type={type} />
			<OrderInfo type={type} {...order} />
			{type === 'pending' && (
				<PendingButtons startOrder={startOrder} cancelOrder={cancelOrder} {...order} />
			)}
			{type === 'in-progress' && (
				<InProgressButtons fulfillOrder={fulfillOrder} cancelOrder={cancelOrder} {...order} />
			)}
		</OrderLiStyled>
	);
};

export default OrderLi;
