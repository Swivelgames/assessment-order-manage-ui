import React from 'react';
import styled from 'styled-components';

import OrderLi from 'Styled/orders/list-item';
import StatusIcon from 'Styled/orders/list-item/status-icon';

const Orders = () => (
	<div>
		<OrderLi type="in-progress">
			<StatusIcon type="in-progress" />
		</OrderLi>
	</div>
);

export default Orders;
