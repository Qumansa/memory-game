import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { resetAmountOfCatsOpened, updateAllCats } from '../../../../../redux/slices/cats';
import { selectAmountOfCatsOpened, selectCats } from '../../../../../redux/slices/cats/selectors';
import { increaseScore, updateIsGameOver } from '../../../../../redux/slices/result';
import { selectScore } from '../../../../../redux/slices/result/selectors';

import { Card } from '../card';

import { shuffleArray } from './utils/shuffleArray';

import styles from './styles.module.scss';

export const CardList = () => {
	const dispatch = useAppDispatch();
	const cats = useAppSelector(selectCats);
	const amountOfCatsOpened = useAppSelector(selectAmountOfCatsOpened);
	const score = useAppSelector(selectScore);

	useEffect(() => {
		dispatch(updateAllCats(shuffleArray([...cats])));
	}, []);

	useEffect(() => {
		if (amountOfCatsOpened === 2) {
			setTimeout(() => {
				let checkedSrc: string | null | undefined;
				for (let i = 0; i < cats.length; i++) {
					if (cats[i].isActive) {
						if (!checkedSrc) {
							checkedSrc = cats[i].src;
						} else {
							if (checkedSrc === cats[i].src) {
								dispatch(
									updateAllCats(
										cats.map((cat) => {
											if (cat.isActive) {
												return { ...cat, isActive: false, isFound: true };
											} else {
												return { ...cat, isActive: false };
											}
										})
									)
								);

								dispatch(increaseScore());

								if (score === 10) {
									dispatch(updateIsGameOver(true));
								}
							} else {
								dispatch(
									updateAllCats(
										cats.map((cat) => {
											return { ...cat, isActive: false };
										})
									)
								);
							}
						}
					}
				}

				dispatch(resetAmountOfCatsOpened());
			}, 1000);
		}
	}, [amountOfCatsOpened]);

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
