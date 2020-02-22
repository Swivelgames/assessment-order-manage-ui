import styled from 'styled-components';

import { red } from 'Styled/colors';

const InventoryItemCount = styled.data`
	width: 40px;

	display: inline-block;
	background: rgba(0,0,0,0.5);
	border-radius: 3px;
	padding: 2px;
	margin-right: 10px;
	vertical-align: middle;

	color: #ffffff;
	font-size: 1.2rem;
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;

	${({ danger }) => danger && (`
		border: 2px solid ${red};
		background: rgba(255,255,255,0.1);
		padding: 0;
	`)}
`;

export default InventoryItemCount;
