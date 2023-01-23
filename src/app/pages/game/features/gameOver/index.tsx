import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { updateAllCats } from '../../../../../redux/slices/cats';
import { resetGame } from '../../../../../redux/slices/game';
import { selectDifficulty } from '../../../../../redux/slices/game/selectors';
import { resetTimer } from '../../../../../redux/slices/timer';

import { Difficulty } from '../../../../../components/difficulty';

import global from '../../../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const GameOver = () => {
	const dispatch = useAppDispatch();
	const difficulty = useAppSelector(selectDifficulty);
	const cats = useAppSelector((state) => state.cats.cats[difficulty]);
	const seconds = useAppSelector((state) => state.timer.value[difficulty]);

	const reset = () => {
		dispatch(resetGame());
		dispatch(resetTimer());
		dispatch(
			updateAllCats({
				difficulty,
				cats: cats.map((cat) => ({ ...cat, isActive: false, isFound: false })),
			})
		);
	};

	const text = useMemo(() => {
		return seconds > 0 ? (
			<>
				<p className={`${styles.gameOver__text} ${styles.gameOver__text_big}`}>
					Поздравляем! Вы нашли всех котиков!!! &#128576;
				</p>
				<p className={`${styles.gameOver__text} ${styles.gameOver__text_big}`}>Вы большой молодец!</p>
			</>
		) : (
			<>
				<p className={`${styles.gameOver__text} ${styles.gameOver__text_big}`}>
					К сожалению, Вам не удалось найти всех котиков за отведённое время. &#128575;
				</p>
				<p className={`${styles.gameOver__text} ${styles.gameOver__text_big}`}>Попробуйте ещё раз!!!</p>
			</>
		);
	}, []);

	return (
		<div className={styles.gameOver}>
			{text}
			<Difficulty classNames={styles.gameOver__difficulty} />
			<button
				className={`${global.button} ${styles.gameOver__link}`}
				onClick={reset}>
				Сыграть ещё раз
			</button>
		</div>
	);
};
