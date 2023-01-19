import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';

import { resetAmountOfCatsOpened, updateAllCats } from '../../../../../redux/slices/cats';
import { selectAmountOfCatsOpened, selectCats } from '../../../../../redux/slices/cats/selectors';
import { increaseScore } from '../../../../../redux/slices/score';

import { Card } from '../card';

import { shuffleArray } from './utils/shuffleArray';

import styles from './styles.module.scss';

export const CardList = () => {
	const dispatch = useAppDispatch();
	const cats = useAppSelector(selectCats);
	const amountOfCatsOpened = useAppSelector(selectAmountOfCatsOpened);

	useEffect(() => {
		dispatch(updateAllCats(shuffleArray([...cats])));
	}, []);

	useEffect(() => {
		if (amountOfCatsOpened === 2) {
			setTimeout(() => {
				let checkedSrc;
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
