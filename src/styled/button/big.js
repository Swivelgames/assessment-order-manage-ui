import styled from 'styled-components';

import BorderedButton from './bordered';

import { blue } from 'Styled/colors';

// Default value for prop
const d = (name, def) => props => props[name] ?? def;

const BigButton = styled(BorderedButton)`
	display: block;

	color: rgba(255,255,255,0.8);
	font-size: 1.8rem;
	font-weight: 700;

	background: rgba(0,0,0,0.3);
	border: 4px solid ${d('color', blue)};
	border-radius: 6px;

	margin: 0;
	margin-top: 30px;
	padding: 20px;

	width: 100%;
`

export default BigButton;

