import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';

import global from '../styles/global.module.scss';

export const Layout = () => {
	return (
		<>
			<Header />
			<main className={global.main}>
				<h1 className={global.srOnly}>MATCH&nbsp;2. Найдите одинаковые изображения!</h1>
				<Outlet />
			</main>
		</>
	);
};
