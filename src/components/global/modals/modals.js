import React from 'react';

import ModalContainer from 'Styled/modal/container';
import ModalOverlay from 'Styled/modal/overlay';

import * as modals from 'Components/modals';

const Modals = ({ modalName, close }) => {
	if (!modalName) return null;

	if (!(modalName in modals)) {
		console.warn(`DEBUG: <Modals>: Unknown modalName: ${modalName}`);
	}

	const Modal = modals[modalName];

	return (
		<>
			<ModalOverlay onClick={close} />
			<ModalContainer>
				<Modal close={close} />
			</ModalContainer>
		</>
	);
};

export default Modals;
