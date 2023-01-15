import { Link } from 'react-router-dom';

import global from '../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Home = () => {
	return (
		<section className={styles.home}>
			<div className={`${global.container} ${styles.home__container}`}>
				<h2 className={global.srOnly}>Старт</h2>
				<p
					className={`${styles.home__text} ${styles.home__text_big} ${styles.home__text_center} ${styles.home__text_bold}`}>
					Добро пожаловать в игру "MATCH 2"!
				</p>
				<p className={`${styles.home__text} ${styles.home__text_withIndent}`}>
					В этой игре Вы сможете потренировать свою память и полюбоваться прекрасными животными. Правила очень
					просты: на старте Вы увидите несколько двухсторонних карточек, повёрнутых рубашкой вверх. При клике
					по любой из них левой кнопкой мыши откроется изображение котика. Кликнув по другой карточке, Вы
					откроете ещё одно. Если изображения совпали - поздравляем, Вы нашли двух одинаковых котиков! Если
					нет, карточки закроются, и Вам нужно будет искать дальше.
				</p>
				<p className={`${styles.home__text} ${styles.home__text_center}`}>
					Цель игры: найти всех котиков. &#128573;
				</p>
				<p className={`${styles.home__text} ${styles.home__text_center}`}>Желаем удачи!</p>
				<Link
					className={`${global.button} ${styles.home__link}`}
					to={`/game`}>
					Начать игру
				</Link>
			</div>
		</section>
	);
};
