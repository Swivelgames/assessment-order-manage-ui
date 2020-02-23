import styled from 'styled-components';

import Modal from 'Styled/modal';

import { oranges } from 'Styled/colors';

const NewOrderModal = styled(Modal)`
	background: ${oranges.normal};
	background: radial-gradient(
		circle at center,
		${oranges.normal} 0%,
		${oranges.dark} 100%
	);

	display: flex;
	flex-direction: column;

	padding: 10px;

	width: 500px;
`;

export default NewOrderModal;

