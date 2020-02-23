import styled from 'styled-components';

const RecipeIngredient = styled.li`
	color: rgba(255,255,255,0.5);
	font-weight: 600;
	line-height: 2.5rem;

	${({ count }) => count === 0 ? `
		text-decoration: line-through;
		font-weight: 400;
	` : ''}
`;

export default RecipeIngredient;
