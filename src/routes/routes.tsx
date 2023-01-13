import { createBrowserRouter } from 'react-router-dom';

import { Game, Home } from '../pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/game',
		element: <Game />,
	},
]);
