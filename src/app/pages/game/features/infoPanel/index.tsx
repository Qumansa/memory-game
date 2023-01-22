import { useAppSelector } from '../../../../../redux/hooks';
import { selectDifficulty, selectScore } from '../../../../../redux/slices/game/selectors';

import styles from './styles.module.scss';

export const InfoPanel = () => {
	const score = useAppSelector(selectScore);
	const difficulty = useAppSelector(selectDifficulty);
	const totalCats = useAppSelector((state) => state.cats.cats[difficulty]).length;
	const transformedDifficulty = difficulty.toLowerCase();

	return (
		<div className={styles.game__info}>
			<span className={styles.game__difficulty}>Уровень сложности: {transformedDifficulty}</span>
			<span className={styles.game__result}>
				Отгадано котиков: {score}/{totalCats}
			</span>
		</div>
	);
};
