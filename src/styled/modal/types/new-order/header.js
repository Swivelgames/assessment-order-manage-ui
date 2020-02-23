import styled from 'styled-components';

import { black } from 'Styled/colors';

const NewOrderHeader = styled.header`
	display: flex;
	background: ${black};
	padding: 15px;
	align-items: center;

	border-radius: 6px;
	box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.5);

	h1 {
		font-size: 2rem;
		font-weight: 600;
		margin: 0;
		margin-left: 20px;
	}
`;

export default NewOrderHeader;

