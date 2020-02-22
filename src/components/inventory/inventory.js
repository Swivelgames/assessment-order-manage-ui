import React from 'react';

import SidebarStyled from 'Styled/global/sidebar';

import InventoryHeading from 'Styled/inventory/heading';

import FiltersSection from './filters';
import Sections from './sections';

const Inventory = ({
	filter, filtersAvailable,
	sections
}) => (
	<SidebarStyled>
		<InventoryHeading>Inventory</InventoryHeading>

		<FiltersSection selection={filter} filters={filtersAvailable} />
		<Sections sections={sections} />
	</SidebarStyled>
);

export default Inventory;

