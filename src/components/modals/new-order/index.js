import { connect } from 'react-redux';

import { placeOrder } from 'Actions/orders';

import NewOrder from './new-order';

const compileIngredients = (recipeIngr, ingredients) => (
	Object.keys(recipeIngr)
		.map(id => ({
			...ingredients[id],
			qty: recipeIngr[id]
		}))
);


const compile = (recipes, ingredients) => (
	Object.keys(recipes)
		.map(id => ({
			...recipes[id],
			id,
			ingredients: compileIngredients(
				recipes[id].ingredients, ingredients
			)
		}))
);

const getOutOfStock = (recipes, ingredients) => (
	compile(recipes, ingredients).filter(
		r => !r.ingredients.reduce((b, i) => i.count === 0 ? false : b, true)
	)
);

const getInStock = (recipes, ingredients) => (
	compile(recipes, ingredients).filter(
		r => r.ingredients.reduce((b, i) => i.count === 0 ? false : b, true)
	)
);

const mapStateToProps = ({
	recipes, ingredients
}) => ({
	recipes: getInStock(recipes, ingredients),
	outOfStock: getOutOfStock(recipes, ingredients)
});

const mapDispatchToProps = dispatch => ({
	onSubmit: (...args) => dispatch(placeOrder(...args))
});

const ConnectedNewOrder = connect(
	mapStateToProps,
	mapDispatchToProps
)(NewOrder);

export default ConnectedNewOrder;
