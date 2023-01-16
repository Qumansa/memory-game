import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';

import global from '../styles/global.module.scss';

export const Layout = () => {
	return (
		<>
			<Header />
			<main className={global.main}>
				<Outlet />
			</main>
		</>
	);
};
