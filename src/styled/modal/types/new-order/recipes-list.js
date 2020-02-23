import styled from 'styled-components';

import * as colors from 'Styled/colors';

const { gradients: { black: { dark: grad } } } = colors;

const RecipesList = styled.section`
	display: flex;
	flex-direction: column;

	border-radius: 6px;
	box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);

	background: ${colors.black};
	background-image: radial-gradient(
		circle at center, ${grad[0]} 0%, ${grad[1]} 100%
	);

	margin-top: 20px;
`;

export default RecipesList;
