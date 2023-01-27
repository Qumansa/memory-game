import { useMemo } from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import { selectDifficulty, selectIsGameOver, selectScore } from '../../../../redux/slices/game/selectors';

import { Timer } from './features/timer';

import styles from './styles.module.scss';

export const InfoPanel = () => {
	const score = useAppSelector(selectScore);
	const difficulty = useAppSelector(selectDifficulty);
	const isGameOver = useAppSelector(selectIsGameOver);
	const totalCats = useAppSelector((state) => state.cats.cats[difficulty]).length;
	const seconds = useAppSelector((state) => state.timer.value[difficulty]);

	const transformedDifficulty = difficulty.toLowerCase();
	const memoizedDifficulty = useMemo(() => difficulty, [isGameOver]);

	const amountOfCatsGuessed =
		isGameOver && ((seconds && seconds > 0) || seconds === null) && memoizedDifficulty === difficulty
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
