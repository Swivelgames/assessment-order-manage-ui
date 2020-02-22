import styled from 'styled-components';

import * as colors from 'Styled/colors';

const { gradients: { black: { dark: grad } } } = colors;

const InventoryList = styled.div`
	display: flex;
	flex-direction: column;

	border-radius: 6px;
	background: ${colors.black};
	background-image: radial-gradient(
		circle at center, ${grad[0]} 0%, ${grad[1]} 100%
	);
`;

export default InventoryList;
