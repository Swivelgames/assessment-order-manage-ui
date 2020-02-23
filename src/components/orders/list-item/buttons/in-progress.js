import React from 'react';

import ButtonContainer from 'Styled/orders/list-item/right-side';
import SecondaryButton from 'Styled/button/secondary';
import BorderedButton from 'Styled/button/bordered';

const InProgressOrderButtons = ({ id, fulfillOrder, cancelOrder }) => {
	return (
		<ButtonContainer>
			<BorderedButton onClick={() => fulfillOrder(id)}>Fulfill</BorderedButton>
			<SecondaryButton onClick={() => cancelOrder(id)}>Cancel Order</SecondaryButton>
		</ButtonContainer>
	);
};

export default InProgressOrderButtons;
