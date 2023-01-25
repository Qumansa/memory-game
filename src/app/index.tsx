import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout } from '../layout';
import { Game, Home, Page404 } from './pages';

import '../styles/main.scss';

export const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					path="/"
					element={<Layout />}
					errorElement={<Page404 />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="/game"
						element={<Game />}
					/>
					<Route
						path="*"
						element={<Page404 />}
					/>
				</Route>
			</>
		)
	);
	return <RouterProvider router={router} />;
};
