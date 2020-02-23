import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { openModal } from 'Actions/modals';

import Orders from 'Components/orders';

import StatusIcon from 'Styled/orders/list-item/status-icon';
import BigButton from 'Styled/button/big';

const Page = styled.section``;

const PageH1 = styled.h1`
	font-size: 2.5rem;
	font-weight: 300;
	margin: 0 0px 30px;
`;

const ActiveOrdersPage = ({ openModal }) => (
	<Page>
		<PageH1>Active Orders</PageH1>
		<Orders />
		<BigButton onClick={() => openModal('NewOrder')}>
			Start New Order
		</BigButton>
	</Page>
);

const ConnectedActiveOrdersPage = connect(null, dispatch => ({
	openModal: (...args) => dispatch(openModal(...args))
}))(ActiveOrdersPage);

export default ConnectedActiveOrdersPage;
