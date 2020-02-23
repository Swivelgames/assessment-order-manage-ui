import React from 'react';

import Modal from 'Styled/modal/types/new-order';

import StatusIcon from 'Styled/orders/list-item/status-icon';

import NewOrderHeader from 'Styled/modal/types/new-order/header';
import RecipesList from 'Styled/modal/types/new-order/recipes-list';

import RecipeItem from './recipe-item';

import BigAssButton from 'Styled/button/big';

import { black } from 'Styled/colors';

class NewOrderModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = { recipes: [] };

		this.toggleRecipe = this.toggleRecipe.bind(this);
		this.triggerSubmit = this.triggerSubmit.bind(this);
	}

	toggleRecipe(id) {
		const recipes = new Set(this.state.recipes);

		if (recipes.has(id)) recipes.delete(id);
		else recipes.add(id);

		this.setState({
			recipes: Array.from(recipes)
		});
	}

	triggerSubmit() {
		const { recipes: order } = this.state;
		const { onSubmit, close } = this.props;

		onSubmit(order);
		close();
	}

	render() {
		const order = new Set(this.state.recipes);
		const { recipes, outOfStock, placeOrder } = this.props

		return (
			<Modal>
				<NewOrderHeader>
					<StatusIcon type="pending" />
					<h1>New Order</h1>
				</NewOrderHeader>

				<RecipesList>
					{recipes.map(r => (
						<RecipeItem
							key={r.id}
							remaining={1}
							{...r}
							onSelect={this.toggleRecipe}
							selected={order.has(r.id)}
						/>
					))}
					{outOfStock.map(r => (
						<RecipeItem
							key={r.id}
							remaining={0}
							{...r}
							onSelect={() => {}}
							selected={false}
						/>
					))}
				</RecipesList>

				<BigAssButton
					onClick={() => this.triggerSubmit()} color={black}
				>Place Order</BigAssButton>
			</Modal>
		);

	}
}

export default NewOrderModal;
