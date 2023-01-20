import { Link } from 'react-router-dom';
import global from '../../../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const GameOver = () => {
	return (
		<div className={styles.gameOver}>
			<p className={styles.gameOver__text}>Поздравляем! Вы нашли всех котиков!!! &#128576;</p>
			<p className={styles.gameOver__text}> Вы большой молодец!</p>
			<Link
				className={`${global.button} ${styles.gameOver__link}`}
				to={`/game`}>
				Сыграть ещё раз
			</Link>
		</div>
	);
};
