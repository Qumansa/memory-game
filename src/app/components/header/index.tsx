import { Link } from 'react-router-dom';

import logo from './assets/img/logo.svg';

import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link
				className={styles.header__link}
				to={`/`}>
				<img
					className={styles.header__img}
					src={logo}
					width="170px"
					height="109px"
					alt="Логотип MATCH 2"
				/>
			</Link>
		</header>
	);
};
