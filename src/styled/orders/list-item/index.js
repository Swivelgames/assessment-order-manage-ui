import styled from 'styled-components';

import * as colors from 'Styled/colors';

const { getColor, getGradP, getGradS } = colors;

const getInsetShadow = ({ type = 'pending' }) => (
	type === 'deleted' ||
	type === 'fulfilled'
) ? '' : `, inset -105px 0px 0px -100px ${getColor({ type })}`;

const getBorder = ({ type = 'pending' }) => (
	type === 'deleted' ||
	type === 'fulfilled'
) ? `2px solid ${getColor({ type })}` : 'none';

const getPadding = ({ type = 'pending' }) => (
	type === 'deleted' ||
	type === 'fulfilled'
) ? '8px' : '10px';


const OrderLi = styled.article`
	display: flex;

	height: 60px;
	padding: ${getPadding};

	background: ${colors.black};
	background-image: radial-gradient(
		circle at center, ${getGradP} 0%, ${getGradS} 100%
	);

	border: ${getBorder};
	border-radius: 6px;

	box-shadow: 0 10px 30px 0 rgba(0,0,0,0.25)${getInsetShadow};
`;

export default OrderLi;
