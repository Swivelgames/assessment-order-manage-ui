import styled from 'styled-components';

import Button from './index';

import { green } from 'Styled/colors';

// Default value for prop
const d = (name, def) => props => props[name] ?? def;

const BorderedButton = styled(Button)`
	background: transparent;
	color: rgba(255,255,255,0.8);
	border: 2px solid ${d('color', green)};
	padding: 8px 20px;
`

export default BorderedButton;

