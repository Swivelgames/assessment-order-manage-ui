import React from 'react';
import styled from 'styled-components';

import Orders from 'Components/orders';
import StatusIcon from 'Styled/orders/list-item/status-icon';

const Page = styled.section`
	h1 {
		font-size: 2.5rem;
		font-weight: 300;
		margin: 0 0px 30px;
	}
`;

const ActiveOrdersPage = () => (
	<Page>
		<h1>Active Orders</h1>
		<Orders />
	</Page>
);

export default ActiveOrdersPage;
