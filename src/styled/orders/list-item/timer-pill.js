import styled from 'styled-components';

import { getColor } from 'Styled/colors';

const TimerPill = styled.time`
	display: inline-block;
	background: ${getColor};
	border-radius: 7px;
	padding: 0px 6px;
	width: 50px;
	vertical-align: middle;

	color: #ffffff;
	font-size: 1.2rem;
	font-weight: 700;
	text-align: center;
`;

export default TimerPill;

