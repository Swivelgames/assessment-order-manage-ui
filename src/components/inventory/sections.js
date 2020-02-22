import React from 'react';

import Section from 'Styled/inventory/section';
import SectionLabel from 'Styled/inventory/section/label';
import SectionList from 'Styled/inventory/section/list';
import SectionListItem from 'Styled/inventory/section/list-item';
import ColorDot from 'Styled/inventory/section/list-item/color';
import ItemCount from 'Styled/inventory/section/list-item/count';

const Sections = ({ sections }) => (
	<>
		{sections.map(({ label, items }) => (
			<Section key={label}>
				<SectionLabel>{label} &mdash; {items.length}</SectionLabel>
				<SectionList>
					{items.map(({ id, name, count, colors }) => (
						<SectionListItem key={id}>
							<div>
								<ItemCount danger={label === 'Running Low'}>{count}</ItemCount>
								{name}
							</div>
							<div>
								{colors.map(c => (
									<ColorDot key={c} color={c} />
								))}
							</div>
						</SectionListItem>
					))}
				</SectionList>
			</Section>
		))}
	</>
);

export default Sections;
