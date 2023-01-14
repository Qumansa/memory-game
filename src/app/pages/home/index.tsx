import { Link } from 'react-router-dom';

import global from '../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Home = () => {
	return (
		<section className={styles.home}>
			<div className={`${global.container} ${styles.home__container}`}>
				<h2 className={global.srOnly}>Старт</h2>
				<p className={styles.home__text}>Добро пожаловать в игру!</p>
				<Link
					className={`${global.button} ${styles.home__link}`}
					to={`/game`}>
					Начать игру
				</Link>
			</div>
		</section>
	);
};
