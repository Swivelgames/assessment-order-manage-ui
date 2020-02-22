import styled from 'styled-components';

import { oranges } from 'Styled/colors';

const Sidebar = styled.section`
	padding: 30px;
	flex-basis: 100%;
	width: 30%;

	background: ${oranges.normal};
	background: radial-gradient(
		circle at center,
		${oranges.normal} 0%,
		${oranges.dark} 100%
	);

	border-radius: 16px 0 0 16px;

	box-shadow: 0 10px 30px 0 rgba(0,0,0,0.25);
`;

export default Sidebar;
