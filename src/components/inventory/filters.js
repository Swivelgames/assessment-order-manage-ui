import React from 'react';

import Filters from 'Styled/inventory/filters';
import FilterPill from 'Styled/inventory/filters/pill';

const FiltersSection = ({
	selection, filters
}) => (
	<Filters>
		<FilterPill checked={selection.length === 0}>All</FilterPill>
		{filters.map(f => (
			<FilterPill key={f} color={f} checked={selection.indexOf(f) > -1}>{f}</FilterPill>
		))}
	</Filters>
);

export default FiltersSection;
