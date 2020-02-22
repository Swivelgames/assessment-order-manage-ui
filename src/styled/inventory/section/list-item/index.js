import styled from 'styled-components';

const InventoryListItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	font-weight: 600;
	font-size: 1.6rem;

	padding: 8px;

	border-bottom: 1px solid rgba(0,0,0,0.25);

	&:last-child {
		border-bottom: 0px;
	}
`;

export default InventoryListItem;
