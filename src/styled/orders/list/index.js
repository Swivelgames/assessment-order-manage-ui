import styled from 'styled-components';

const OrdersList = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: visible;
	overflow-y: auto;

	margin: -30px;
	padding: 30px;

	& > * {
		margin: 15px 0px;
	}

	& > *:first-child {
		margin-top: 0;
	}

	& > *:last-child {
		margin-bottom: 0;
	}
`;

export default OrdersList;
