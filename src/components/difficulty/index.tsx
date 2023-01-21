import { ChangeEvent } from 'react';

import global from '../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Difficulty = () => {
	const blurOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
		e.currentTarget.blur();
	};

	return (
		<>
			<select
				className={`${styles.difficulty} ${global.button}`}
				defaultValue="Легкий"
				onChange={blurOnChange}>
				<option
					className={styles.difficulty__option}
					value="Легкий">
					Легкий
				</option>
				<option
					className={styles.difficulty__option}
					value="Средний">
					Средний
				</option>
				<option
					className={styles.difficulty__option}
					value="Сложный">
					Сложный
				</option>
			</select>
		</>
	);
};
