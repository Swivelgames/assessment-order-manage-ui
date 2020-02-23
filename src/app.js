import React from 'react';
import { Provider } from 'react-redux';

import store from 'Store';

// Router
//import Router from 'router';
// Components
import Main from 'Components/global/main';
import Modals from 'Components/global/modals';

import ActiveOrders from 'Pages/orders/active';

const App = () => (
	<Provider store={store}>
		<Main>
			<ActiveOrders />
		</Main>
		<Modals />
	</Provider>
);

export default App;
