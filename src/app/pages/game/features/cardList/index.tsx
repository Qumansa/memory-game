import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { resetAmountOfCatsOpened, updateAllCats } from '../../../../../redux/slices/cats';
import { selectAmountOfCatsOpened } from '../../../../../redux/slices/cats/selectors';
import { increaseScore, updateIsGameOver } from '../../../../../redux/slices/game';
import { selectDifficulty, selectScore } from '../../../../../redux/slices/game/selectors';
import { toggleTimer } from '../../../../../redux/slices/timer';

import { Card } from '../card';

import { shuffleArray } from './utils/shuffleArray';

import styles from './styles.module.scss';

export const CardList = () => {
	const dispatch = useAppDispatch();
	const difficulty = useAppSelector(selectDifficulty);
	const score = useAppSelector(selectScore);
	const amountOfCatsOpened = useAppSelector(selectAmountOfCatsOpened);
	const cats = useAppSelector((state) => state.cats.cats[difficulty]);
	const seconds = useAppSelector((state) => state.timer.value[difficulty]);

	const endGame = () => {
		dispatch(toggleTimer(false));
		dispatch(updateIsGameOver(true));

		if (amountOfCatsOpened > 0) dispatch(resetAmountOfCatsOpened());
	};

	useEffect(() => {
		dispatch(
			updateAllCats({
				difficulty,
				cats: shuffleArray([...cats]),
			})
		);
	}, []);

	useEffect(() => {
		if (amountOfCatsOpened !== 2) return;

		const timerID = setTimeout(() => {
			let checkedSrc: string | null | undefined;

			for (let i = 0; i < cats.length; i++) {
				if (!cats[i].isActive) continue;

				if (!checkedSrc) {
					checkedSrc = cats[i].src;
					continue;
				}

				if (checkedSrc === cats[i].src) {
					dispatch(
						updateAllCats({
							difficulty,
							cats: cats.map((cat) => {
								if (cat.isActive) {
									return { ...cat, isActive: false, isFound: true };
								} else {
									return { ...cat, isActive: false };
								}
							}),
						})
					);

					dispatch(increaseScore());

					continue;
				}

				dispatch(
					updateAllCats({
						difficulty,
						cats: cats.map((cat) => ({ ...cat, isActive: false })),
					})
				);
			}

			dispatch(resetAmountOfCatsOpened());
		}, 1000);

		return () => clearTimeout(timerID);
	}, [amountOfCatsOpened]);

	useEffect(() => {
		if (score !== cats.length) return;

		const timerID = setTimeout(() => {
			endGame();
		}, 800);

		return () => clearTimeout(timerID);
	}, [score]);

	useEffect(() => {
		if (seconds === 0) endGame();
	}, [seconds]);

	return (
		<ul className={styles.cards}>
			{cats.map(({ id, isActive, isFound, src }) => (
				<Card
					key={id}
					id={id}
					isActive={isActive}
					isFound={isFound}
					src={src}
				/>
			))}
		</ul>
	);
};
