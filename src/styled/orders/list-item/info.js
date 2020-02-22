import React from 'react';
import styled from 'styled-components';

import TimerPill from './timer-pill';

const OrderInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0px 10px;
`;

const OrderInfoNumber = styled.h1`
	display: inline-block;
	margin: 0px 5px !important;
	font-size: 1.6rem !important;
	font-weight: 600 !important;
	vertical-align: middle;
`;

const OrderInfoStatus = styled.span`
	display: block;
	opacity: 0.75;
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: uppercase;
`;

const OrderInfoHelper = ({ type, time, number }) => (
	<OrderInfo>
		<div>
			<TimerPill type={type}>{time}</TimerPill>
			<OrderInfoNumber>Order #{number}</OrderInfoNumber>
		</div>
		<OrderInfoStatus>
			{type === 'pending' && "New Order - Pending"}
			{type === 'in-progress' && "In Progress"}
			{type === 'deleted' && "Cancelled"}
			{type === 'fulfilled' && "Order Fulfilled"}
		</OrderInfoStatus>
	</OrderInfo>
);

export default OrderInfoHelper;

