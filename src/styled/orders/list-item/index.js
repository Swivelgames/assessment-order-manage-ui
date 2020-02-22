import styled from 'styled-components';

import * as colors from 'Styled/colors';

const { gradients } = colors;

const typeColors = {
	'pending': colors.teal,
	'in-progress': colors.blue
};

const getColor = ({ type = 'pending' }) => typeColors[type];

const OrderLi = styled.article`
	display: flex;

	height: 60px;
	padding: 10px;

	background: ${colors.black};
	background-image: radial-gradient(
		circle at center,
		${gradients.black.dark[0]} 0%,
		${gradients.black.dark[1]} 100%
	);

	border-radius: 6px;

	box-shadow: inset -105px 0px 0px -100px ${getColor};
`;

export default OrderLi;
