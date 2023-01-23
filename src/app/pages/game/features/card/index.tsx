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
			onClick={checkCard}>
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
				<img
					className={styles.cards__img}
					src={cardBack}
					alt="Рубашка карты"
					width="128px"
					height="230px"
					loading="lazy"
				/>
			</div>
		</li>
	);
};
