import React from 'react';

import Modal from 'Styled/modal/types/new-order';

import StatusIcon from 'Styled/orders/list-item/status-icon';

import NewOrderHeader from 'Styled/modal/types/new-order/header';
import RecipesList from 'Styled/modal/types/new-order/recipes-list';
import RecipesItem from 'Styled/modal/types/new-order/recipe-item';

import BigAssButton from 'Styled/button/big';

import { black } from 'Styled/colors';

const NewOrderModal = () => (
	<Modal>
		<NewOrderHeader>
			<StatusIcon type="pending" />
			<h1>New Order</h1>
		</NewOrderHeader>

		<RecipesList>
			<RecipesItem>
				<h1>
					<label>
						<input type="checkbox" />
						Pineapple Burger
					</label>
				</h1>
				<ul>
					<li>Egg</li>
					<li>Cabbage</li>
				</ul>
			</RecipesItem>
			<RecipesItem>
				<h1>
					<label>
						<input type="checkbox" />
						Cheese Burger
					</label>
				</h1>
				<ul>
					<li>Egg</li>
					<li>Cabbage</li>
				</ul>
			</RecipesItem>
		</RecipesList>

		<BigAssButton color={black}>Place Order</BigAssButton>
	</Modal>
);

export default NewOrderModal;
