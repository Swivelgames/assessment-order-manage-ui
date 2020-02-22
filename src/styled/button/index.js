import styled from 'styled-components';

import { black } from 'Styled/colors';

// Default value for prop
const d = (name, def) => props => props[name] ?? def;

const Button = styled.button`
	cursor: pointer;
	border: 0;
	border-radius: 100px;
	padding: 10px 20px;
	margin: 0px 15px;

	background: ${d('background', '#ffffff')};

	color: ${d('color', black)};
	font-size: 1.4rem;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
`;

export default Button;

