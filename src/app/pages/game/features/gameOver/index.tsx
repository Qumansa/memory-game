import { useEffect } from 'react';

import { Difficulty } from '../../../../../components/difficulty';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { updateAllCats } from '../../../../../redux/slices/cats';
import { resetGame } from '../../../../../redux/slices/game';
import { selectDifficulty } from '../../../../../redux/slices/game/selectors';

import global from '../../../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const GameOver = () => {
	const dispatch = useAppDispatch();
	const difficulty = useAppSelector(selectDifficulty);
	const cats = useAppSelector((state) => state.cats.cats[difficulty]);

	const reset = () => {
		dispatch(resetGame());
		dispatch(
			updateAllCats({
				difficulty,
				cats: cats.map((cat) => {
					return { ...cat, isFound: false };
				}),
			})
		);
	};

	useEffect(() => {
		return () => {
			reset();
		};
	}, []);

	return (
		<div className={styles.gameOver}>
			<p className={styles.gameOver__text}>Поздравляем! Вы нашли всех котиков!!! &#128576;</p>
			<p className={styles.gameOver__text}>Вы большой молодец!</p>
			<Difficulty classNames={styles.gameOver__difficulty} />
			<button
				className={`${global.button} ${styles.gameOver__link}`}
				onClick={reset}>
				Сыграть ещё раз
			</button>
		</div>
	);
};
