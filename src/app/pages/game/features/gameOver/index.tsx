import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { updateAllCats } from '../../../../../redux/slices/cats';
import { selectCats } from '../../../../../redux/slices/cats/selectors';
import { resetGame } from '../../../../../redux/slices/result';
import global from '../../../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const GameOver = () => {
	const dispatch = useAppDispatch();
	const cats = useAppSelector(selectCats);

	const reset = () => {
		dispatch(resetGame());

		dispatch(
			updateAllCats(
				cats.map((cat) => {
					return { ...cat, isFound: false };
				})
			)
		);
	};

	return (
		<div className={styles.gameOver}>
			<p className={styles.gameOver__text}>Поздравляем! Вы нашли всех котиков!!! &#128576;</p>
			<p className={styles.gameOver__text}> Вы большой молодец!</p>
			<button
				className={`${global.button} ${styles.gameOver__link}`}
				onClick={reset}>
				Сыграть ещё раз
			</button>
		</div>
	);
};
