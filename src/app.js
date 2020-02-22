import React from 'react';
import { Provider } from 'react-redux';

import store from 'Store';

// Router
//import Router from 'router';
// Components
import Main from 'Components/global/main';

import ActiveOrders from 'Pages/orders/active';

const App = () => (
	<Provider store={store}>
		<Main>
			<ActiveOrders />
		</Main>
	</Provider>
);

export default App;
