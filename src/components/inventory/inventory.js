import React from 'react';

import SidebarStyled from 'Styled/global/sidebar';

import InventoryHeading from 'Styled/inventory/heading';

import Filters from 'Styled/inventory/filters';
import FilterPill from 'Styled/inventory/filters/pill';

import Section from 'Styled/inventory/section';
import SectionLabel from 'Styled/inventory/section/label';
import SectionList from 'Styled/inventory/section/list';
import SectionListItem from 'Styled/inventory/section/list-item';
import ColorDot from 'Styled/inventory/section/list-item/color';
import ItemCount from 'Styled/inventory/section/list-item/count';

const Inventory = () => (
	<SidebarStyled>
		<InventoryHeading>Inventory</InventoryHeading>

		<Filters>
			<FilterPill checked={true}>All</FilterPill>
			<FilterPill color="red">Red</FilterPill>
			<FilterPill color="green">Green</FilterPill>
			<FilterPill color="blue">Blue</FilterPill>
			<FilterPill color="cyan">Cyan</FilterPill>
			<FilterPill color="yellow">Yellow</FilterPill>
			<FilterPill color="purple">Purple</FilterPill>
			<FilterPill color="white">white</FilterPill>
		</Filters>

		<Section>
			<SectionLabel>Out Of Stock &mdash; 2</SectionLabel>
			<SectionList>
				<SectionListItem>
					<ItemCount>240</ItemCount>
					Foobar
					<div>
						<ColorDot color="red" />
						<ColorDot color="yellow" />
					</div>
				</SectionListItem>
				<SectionListItem>baz quux</SectionListItem>
			</SectionList>
		</Section>
	</SidebarStyled>
);

export default Inventory;

