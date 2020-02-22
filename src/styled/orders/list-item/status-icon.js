import React from 'react';
import styled from 'styled-components';

const Icon = styled.span`
	display: block;
	height: 30px;
	width: 30px;
	background: transparent;
	background-position: center center;
	background-repeat: no-repeat;
`;

const icon = url => styled(Icon)`
	background-image: url('${url}');
`;

const IconPending = icon('images/icon-pending.svg');
const IconInProgress = icon('images/icon-in-progress.svg');
const IconDelete = icon('images/icon-delete.svg');
const IconFulfilled = icon('images/icon-fulfilled.svg');

const StatusIcon = styled.figure`
	margin: 0;
	padding: 5px;
`;

const StatusIconHelper = ({ type }) => (
	<StatusIcon>
		{type === 'pending' && <IconPending />}
		{type === 'in-progress' && <IconInProgress />}
		{type === 'deleted' && <IconDelete />}
		{type === 'fulfilled' && <IconFulfilled />}
	</StatusIcon>
);

export default StatusIconHelper;
