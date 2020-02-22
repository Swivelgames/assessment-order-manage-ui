import React from 'react';
import styled from 'styled-components';

import * as colors from 'Styled/colors';

// Generates a function that returns `y` if checked === true, else `n`
const c = (y,n) => ({ checked }) => checked ? y : n;

const FilterPill = styled.label`
	display: block;
	background: ${c('#ffffff','rgba(0,0,0,0.3)')};
	opacity: ${c(1, 0.7)};
	border-radius: 20px;
	padding: ${({ color }) => color ?
		'3px 10px 3px 7px' :
		'3px 10px'
	};
	vertical-align: middle;

	color: ${c(colors.black, '#ffffff')};
	font-size: 1.2rem;
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;

	&::before {
		content: ' ';
		color: transparent;
		border-radius: 100px/100px;
		height 9px;
		width: 9px;
		overflow: hidden;
		padding: 0px;
		margin: 0px;
		margin-right: 4px;
		background: ${({ color }) => color};
		display: ${({ color }) => color ? 'inline-block' : 'none'}
	}

	& > input {
		position: absolute;
		left: -9999999vw;
	}
`;

const FilterPillHelper = props => (
	<FilterPill {...props}>
		<input type="checkbox" onChange={props.onChange} checked={props.checked} />
		{props.children}
	</FilterPill>
);

export default FilterPillHelper;

