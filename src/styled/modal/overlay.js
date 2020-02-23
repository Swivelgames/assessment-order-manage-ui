import styled from 'styled-components';

const ModalOverlay = styled.aside`
	background: rgba(0,0,0,0.1);

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 30px;
`;

export default ModalOverlay;

