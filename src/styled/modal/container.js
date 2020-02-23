import styled from 'styled-components';

const ModalOverlay = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	max-height: 100vh;
	overflow-y: auto;

	padding: 30px;

	pointer-events: none;
`;

export default ModalOverlay;

