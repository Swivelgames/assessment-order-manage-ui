import React from 'react';

import MainStyled from 'Styled/global/main';

import Toolbar from 'Components/global/toolbar';
import Sidebar from 'Components/global/sidebar';
import Body from 'Components/global/body';

const Main = ({ children, modalOpen }) => (
	<MainStyled modalOpen={modalOpen}>
		<Toolbar />
		<Body>
			{children}
		</Body>
		<Sidebar />
	</MainStyled>
);

export default Main;
