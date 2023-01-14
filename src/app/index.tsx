import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Game, Home } from './pages';

import global from '../styles/global.module.scss';
import '../styles/main.scss';

export const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/game"
					element={<Game difficulty="test" />}
				/>
			</>
		)
	);
	return (
		<main className={global.main}>
			<RouterProvider router={router} />
		</main>
	);
};
