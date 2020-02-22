import styled from 'styled-components';

const InventoryColorDot = styled.span`
	display: inline-block;
	overflow: hidden;
	color: transparent;
	height: 16px;
	width: 16px;
	border-radius: 100px/100px;
	background: ${({ color }) => color || 'black'};
	margin: 2px 2px 2px 10px;
	vertical-align: bottom;
`;

export default InventoryColorDot;

