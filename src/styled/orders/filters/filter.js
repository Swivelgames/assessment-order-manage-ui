import React from 'react';
import styled from 'styled-components';

import * as colors from 'Styled/colors';

// Generates a function that returns `y` if checked === true, else `n`
const c = (y,n) => ({ selected }) => selected ? y : n;

const OrderFilter = styled.label`
	cursor: pointer;

	display: block;
	opacity: ${c(1, 0.7)};
	vertical-align: middle;

	margin: 0;
	margin-left: 2vw;

	color: #ffffff;
	font-size: 1.6rem;
	font-weight: 500;
	text-align: center;
	text-transform: capitalize;

	text-shadow: 0 3px 5px rgba(0,0,0,0.5);

	& > input {
		position: absolute;
		left: -9999999vw;
	}
`;

export default OrderFilter;

