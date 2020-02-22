import styled from 'styled-components';

const Body = styled.div`
	padding: 30px;
	flex-basis: calc(100% - 110px);
	width: 70%;

	header + & {
		padding-top: 0px;
	}
`;

export default Body;
