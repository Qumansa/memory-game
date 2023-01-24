import { useMemo } from 'react';

import { useAppSelector } from '../../../../../redux/hooks';
import { selectDifficulty, selectIsGameOver, selectScore } from '../../../../../redux/slices/game/selectors';

import { Timer } from '../timer';

import styles from './styles.module.scss';

export const InfoPanel = () => {
	const score = useAppSelector(selectScore);
	const difficulty = useAppSelector(selectDifficulty);
	const isGameOver = useAppSelector(selectIsGameOver);
	const seconds = useAppSelector((state) => state.timer.value[difficulty]);
	const totalCats = useAppSelector((state) => state.cats.cats[difficulty]).length;

	const transformedDifficulty = difficulty.toLowerCase();
	const memoizedDifficulty = useMemo(() => difficulty, [isGameOver]);

	const amountOfCatsGuessed =
		isGameOver && seconds > 0 && memoizedDifficulty === difficulty
			? 'все!'
			: memoizedDifficulty === difficulty
			? `${score}/${totalCats}`
			: `0/${totalCats}`;

	return (
		<div className={styles.game__info}>
			<span className={styles.game__text}>Уровень сложности: {transformedDifficulty}</span>
			{difficulty !== 'Легкий' && <Timer />}
			<span className={styles.game__text}>Отгадано котиков: {amountOfCatsGuessed}</span>
		</div>
	);
};
