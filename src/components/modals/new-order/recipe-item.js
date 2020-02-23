import React from 'react';

import RecipesItem from 'Styled/modal/types/new-order/recipe-item';
import RecipeIngredient from 'Styled/modal/types/new-order/recipe-ingredient';

const RecipeItem = ({ id, name, ingredients, selected, onSelect, remaining }) => (
	<RecipesItem remaining={remaining}>
		<h1>
			<label>
				<input
					type="checkbox"
					onChange={() => onSelect(id)}
					checked={selected}
					disabled={remaining === 0}
				/>
				{name}
			</label>
		</h1>
		<ul>
			{ingredients.map(({ name, qty, count }) => (
				<RecipeIngredient key={name} count={count}>
					{qty}x {name} ({count} left)
				</RecipeIngredient>
			))}
		</ul>
	</RecipesItem>
);

export default RecipeItem;
