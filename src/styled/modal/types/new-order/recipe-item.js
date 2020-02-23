import styled from 'styled-components';

import { black, blacks } from 'Styled/colors';

const RecipeItem = styled.article`
	border-bottom: 3px solid rgba(0,0,0,0.1);

	color: #ffffff;
	font-size: 1.4rem;

	padding: 20px;

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

		li {
			color: rgba(255,255,255,0.5);
			font-weight: 600;
			line-height: 2.5rem;
		}
	}

	&:last-of-type {
		border-bottom: 0;
	}
`;

export default RecipeItem;
