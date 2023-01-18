import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { selectScore } from '../../../../../redux/score/selectors';
import { increaseScore } from '../../../../../redux/score/slice';

import styles from './styles.module.scss';

import cardBack from './assets/img/card-back.png';

interface CardProps {
	src: string;
}

export const Card = ({ src }: CardProps) => {
	const [isActive, setIsActive] = useState(false);
	// const score = useAppSelector(selectScore);
	const dispatch = useAppDispatch();
	const catRef = useRef(null);

	const checkCard = () => {
		setIsActive((prev) => !prev);

		setTimeout(() => {
			// dispatch(increaseScore());
		}, 1000);
	};

	return (
		<li
			className={isActive ? `${styles.cards__item} ${styles.cards__item_active}` : styles.cards__item}
			onClick={checkCard}>
			<div className={styles.cards__itemFront}>
				<img
					className={styles.cards__img}
					src={src}
					ref={catRef}
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
