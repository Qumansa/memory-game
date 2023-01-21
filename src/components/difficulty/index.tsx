import { ChangeEvent } from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { changeDifficulty } from '../../redux/slices/game';

import { DifficultyProps } from './types';

import global from '../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Difficulty = ({ classNames = '' }: DifficultyProps) => {
	const dispatch = useAppDispatch();

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		e.currentTarget.blur();

		if (
			e.currentTarget.value === 'Легкий' ||
			e.currentTarget.value === 'Средний' ||
			e.currentTarget.value === 'Сложный'
		) {
			dispatch(changeDifficulty(e.currentTarget.value));
		}
	};

	return (
		<>
			<div className={`${styles.difficulty} ${classNames}`}>
				<span className={styles.difficulty__label}>Выберите уровень сложности:</span>
				<select
					className={`${styles.difficulty__select} ${global.button}`}
					defaultValue="Легкий"
					onChange={handleChange}>
					<option className={styles.difficulty__option}>Легкий</option>
					<option className={styles.difficulty__option}>Средний</option>
					<option className={styles.difficulty__option}>Сложный</option>
				</select>
			</div>
		</>
	);
};
