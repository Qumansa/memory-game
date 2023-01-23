import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { selectDifficulty } from '../../../../../redux/slices/game/selectors';
import { updateTimerValue } from '../../../../../redux/slices/timer';
import { selectIsTimerActive } from '../../../../../redux/slices/timer/selectors';

import styles from './styles.module.scss';

export const Timer = () => {
	const dispatch = useAppDispatch();
	const difficulty = useAppSelector(selectDifficulty);
	const isTimerActive = useAppSelector(selectIsTimerActive);
	const seconds = useAppSelector((state) => state.timer.value[difficulty]);

	useEffect(() => {
		if (!isTimerActive) return;
		if (seconds < 1) return;

		const timer = setTimeout(() => {
			dispatch(
				updateTimerValue({
					difficulty,
					value: seconds - 1,
				})
			);
		}, 1000);

		return () => clearTimeout(timer);
	}, [seconds, isTimerActive]);

	const transformedSeconds = seconds < 10 ? `0${seconds}` : seconds;

	const valueClassNames =
		seconds <= 10 && seconds > 0 && isTimerActive
			? `${styles.timer__value} ${styles.timer__value_danger}`
			: seconds === 0 && isTimerActive
			? `${styles.timer__value} ${styles.timer__value_stop}`
			: styles.timer__value;

	return (
		<span className={styles.timer}>
			Осталось времени: <span className={valueClassNames}>{transformedSeconds}</span> сек.
		</span>
	);
};
