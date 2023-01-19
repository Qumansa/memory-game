import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';

import { increaseAmountOfCatsOpened, updateAllCats } from '../../../../../redux/slices/cats';
import { selectCats } from '../../../../../redux/slices/cats/selectors';

import { CardProps } from './types';

import cardBack from './assets/img/card-back.png';

import styles from './styles.module.scss';

export const Card = ({ id, src, isActive, isFound }: CardProps) => {
	const dispatch = useAppDispatch();
	const cats = useAppSelector(selectCats);

	const checkCard = () => {
		dispatch(
			updateAllCats(
				cats.map((cat) => {
					if (cat.id === id) {
						return { ...cat, isActive: true };
					} else {
						return cat;
					}
				})
			)
		);

		dispatch(increaseAmountOfCatsOpened());
	};

	return (
		<li
			className={
				isActive
					? `${styles.cards__item} ${styles.cards__item_active}`
					: isFound
					? `${styles.cards__item} ${styles.cards__item_found}`
					: styles.cards__item
			}
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
