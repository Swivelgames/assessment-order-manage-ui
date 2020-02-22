import React from 'react';
import styled from 'styled-components';

import OrderLi from 'Styled/orders/list-item';
import StatusIcon from 'Styled/orders/list-item/status-icon';
import OrderInfo from 'Styled/orders/list-item/info';

import Button from 'Styled/button';
import SecondaryButton from 'Styled/button/secondary';
import SoftButton from 'Styled/button/soft';
import BorderedButton from 'Styled/button/bordered';

const TempSpace = styled.div`
	flex: 1;
`;

const Orders = ({ status, time, number, recipes }) => {
	const type = status;

	return (
		<OrderLi type={type}>
			<StatusIcon type={type} />
			<OrderInfo type={type} time="02:49" number="78" />
			<TempSpace />
			<SecondaryButton>Dismiss</SecondaryButton>
			<Button>Undo</Button>
			<SoftButton>Start Order</SoftButton>
			<BorderedButton>Start Order</BorderedButton>
		</OrderLi>
	);
};

export default Orders;
