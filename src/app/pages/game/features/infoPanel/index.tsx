import { useAppSelector } from '../../../../../redux/hooks';
import { selectDifficulty, selectScore } from '../../../../../redux/slices/game/selectors';

import styles from './styles.module.scss';

export const InfoPanel = () => {
	const score = useAppSelector(selectScore);
	const difficulty = useAppSelector(selectDifficulty).toLowerCase();

	return (
		<div className={styles.game__info}>
			<span className={styles.game__difficulty}>Уровень сложности: {difficulty}</span>
			<span className={styles.game__result}>Отгадано котиков: {score}/12</span>
		</div>
	);
};
