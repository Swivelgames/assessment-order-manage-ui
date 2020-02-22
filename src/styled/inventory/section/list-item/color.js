import styled from 'styled-components';

const InventoryColorDot = styled.span`
	display: inline-block;
	overflow: hidden;
	color: transparent;
	height: 16px;
	width: 16px;
	border-radius: 100px/100px;
	background: ${({ color }) => color || 'black'};
	margin-left: 10px;
	vertical-align: middle;
`;

export default InventoryColorDot;

