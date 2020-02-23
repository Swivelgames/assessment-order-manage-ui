import styled from 'styled-components';

import { black, blacks } from 'Styled/colors';

const RecipeItem = styled.article`
	border-bottom: 3px solid rgba(0,0,0,0.1);

	color: #ffffff;
	font-size: 1.4rem;

	padding: 20px;

	${({ remaining }) => remaining === 0 ? `
		opacity: 0.7;

		h1 { text-decoration: line-through; }
	` : ''}

	h1 {
		font-size: 1.8rem;
		font-weight: 600;
		margin: 0;

		input {
			margin: 0px 10px 3px 0px;
			vertical-align: middle;
		}
	}

	ul {
		list-style-type: none;
		margin: 10px 0 0;
		padding-left: 23px;
	}

	&:last-of-type {
		border-bottom: 0;
	}
`;

export default RecipeItem;
