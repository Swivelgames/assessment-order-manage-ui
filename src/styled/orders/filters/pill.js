import styled from 'styled-components';

import { getColor } from 'Styled/colors';

const OrderFilterPill = styled.span`
	display: inline-block;
	background: ${getColor};
	border-radius: 100px/100px;
	padding: 1px 10px;
	margin-right: 10px;
	margin-bottom: 1px;
	vertical-align: bottom;

	color: #ffffff;
	font-size: 1.2rem;
	font-weight: 700;
	text-align: center;
	text-shadow: none;

	box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);
`;

export default OrderFilterPill;

