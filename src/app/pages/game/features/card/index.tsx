import { KeyboardEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';

import { increaseAmountOfCatsOpened, updateAllCats, updateAreCatsDisabled } from '../../../../../redux/slices/cats';
import { selectAreCatsDisabled } from '../../../../../redux/slices/cats/selectors';
import { selectDifficulty } from '../../../../../redux/slices/game/selectors';
import { toggleTimer } from '../../../../../redux/slices/timer';
import { selectIsTimerActive } from '../../../../../redux/slices/timer/selectors';

import { CardProps } from './types';

import cardBack from './assets/img/card-back.png';

import styles from './styles.module.scss';

export const Card = ({ id, src, isActive, isFound }: CardProps) => {
	const dispatch = useAppDispatch();
	const difficulty = useAppSelector(selectDifficulty);
	const cats = useAppSelector((state) => state.cats.cats[difficulty]);
	const areCatsDisabled = useAppSelector(selectAreCatsDisabled);
	const isTimerActive = useAppSelector(selectIsTimerActive);

	const checkCard = () => {
		if (!isTimerActive && difficulty !== 'Легкий') dispatch(toggleTimer(true));

		dispatch(updateAreCatsDisabled(true));

		dispatch(
			updateAllCats({
				difficulty,
				cats: cats.map((cat) => {
					if (cat.id === id) {
						return { ...cat, isActive: true };
					} else {
						return cat;
					}
				}),
			})
		);

		dispatch(increaseAmountOfCatsOpened());

		setTimeout(() => {
			dispatch(updateAreCatsDisabled(false));
		}, 1000);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
		if ((e.key === 'Enter' || e.key === ' ') && !areCatsDisabled) checkCard();
	};

	const cardItemClassNames = isActive
		? `${styles.cards__item} ${styles.cards__item_active}`
		: isFound
		? `${styles.cards__item} ${styles.cards__item_found}`
		: areCatsDisabled
		? `${styles.cards__item} ${styles.cards__item_disabled}`
		: styles.cards__item;

	return (
		<li
			className={cardItemClassNames}
			onClick={checkCard}
			tabIndex={isFound ? -1 : 0}
			onKeyDown={(e) => handleKeyDown(e)}>
			<div className={styles.cards__itemFront}>
				<img
					className={styles.cards__img}
					src={src}
					id={id}
					width="128px"
					height="230px"
					alt="Котик"
					loading="lazy"
				/>
			</div>
			<div className={styles.cards__itemBack}>
				{isFound ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.2"
						stroke="#0f6c76"
						className={`${styles.cards__check} w-6 h-6`}>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				) : (
					<img
						className={styles.cards__img}
						src={cardBack}
						alt="Рубашка карты"
						width="128px"
						height="230px"
						loading="lazy"
					/>
				)}
			</div>
		</li>
	);
};
