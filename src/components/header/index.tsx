import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import logo from './assets/img/logo.svg';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link
				className={styles.header__link}
				to={`/`}>
				<img
					className={styles.header__img}
					src={logo}
					width="220px"
					height="141px"
					alt="Логотип MATCH 2"
				/>
			</Link>
		</header>
	);
};
