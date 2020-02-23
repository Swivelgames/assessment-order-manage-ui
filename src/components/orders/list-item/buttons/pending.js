import React from 'react';

import ButtonContainer from 'Styled/orders/list-item/right-side';
import SecondaryButton from 'Styled/button/secondary';
import SoftButton from 'Styled/button/soft';

const PendingOrderButtons = ({ id, startOrder, cancelOrder }) => {
	return (
		<ButtonContainer>
			<SoftButton onClick={() => startOrder(id)}>Start Order</SoftButton>
			<SecondaryButton onClick={() => cancelOrder(id)}>Cancel Order</SecondaryButton>
		</ButtonContainer>
	);
};

export default PendingOrderButtons;
