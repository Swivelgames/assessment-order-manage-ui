import React from 'react';

import ToolbarStyled from 'Styled/global/toolbar';
import Icon from 'Styled/global/toolbar/icon';

const Toolbar = () => (
	<ToolbarStyled>
		<Icon image="logo" />
		<div>
			<Icon image="icon-settings" />
			<Icon image="icon-lock-screen" />
		</div>
	</ToolbarStyled>
);

export default Toolbar;

