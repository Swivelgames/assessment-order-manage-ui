import React from 'react';

import ButtonContainer from 'Styled/orders/list-item/right-side';
import BorderedButton from 'Styled/button/bordered';

const InProgressOrderButtons = ({ id, fulfillOrder }) => {
	return (
		<ButtonContainer>
			<BorderedButton onClick={() => fulfillOrder(id)}>Fulfill</BorderedButton>
		</ButtonContainer>
	);
};

export default InProgressOrderButtons;
