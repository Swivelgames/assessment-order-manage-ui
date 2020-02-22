import styled from 'styled-components';

const ToolbarIcon = styled.button`
	border: 0;
	color: transparent;
	overflow: hidden;

	display: inline-block;
	height: 48px;
	width: 48px;

	background: url(images/${({ image }) => image}.svg);
	background-position: center center;
	background-repeat: no-repeat;

	* + & {
		margin-left: 30px;
	}
`;

export default ToolbarIcon;

