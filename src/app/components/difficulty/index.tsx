import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeDifficulty } from '../../redux/slices/game';
import { selectDifficulty } from '../../redux/slices/game/selectors';

import { isValidDifficulty } from './utils/isValidDifficulty';

import { DifficultyProps } from './types';

import global from '../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Difficulty = ({ classNames }: DifficultyProps) => {
	const dispatch = useAppDispatch();
	const difficulty = useAppSelector(selectDifficulty);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		e.currentTarget.blur();

		if (isValidDifficulty(e.currentTarget.value)) {
			dispatch(changeDifficulty(e.currentTarget.value));
		}
	};

	const difficultyClassNames = classNames ? `${styles.difficulty} ${classNames}` : styles.cards__difficulty;

	return (
		<>
			<div className={difficultyClassNames}>
				<span className={styles.difficulty__label}>Выберите уровень сложности:</span>
				<select
					className={`${styles.difficulty__select} ${global.button}`}
					defaultValue={difficulty}
					onChange={handleChange}>
					<option className={styles.difficulty__option}>Легкий</option>
					<option className={styles.difficulty__option}>Средний</option>
					<option className={styles.difficulty__option}>Сложный</option>
				</select>
			</div>
		</>
	);
};
