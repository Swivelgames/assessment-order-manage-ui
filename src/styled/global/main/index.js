import styled from 'styled-components';

import { blacks, gradients } from 'Styled/colors';

const Main = styled.main`
	display: flex;

	flex-direction: column;
	flex-wrap: wrap;

	height: 100%;
	width: 100%;

	background: ${blacks.normal};
	background-image: radial-gradient(
		circle at top left,
		${gradients.black.bright[0]} 0%,
		${gradients.black.bright[1]} 100%
	);

	font-size: 1.2rem;
`;

export default Main;
