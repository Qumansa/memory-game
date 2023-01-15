import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

import cardBack from './assets/img/card-back.png';
import cardFront from './assets/img/card-front.jpg';

export const Card = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleCard = () => {
		setIsActive((prev) => !prev);
	};

	return (
		<li
			className={isActive ? `${styles.cards__item} ${styles.cards__item_active}` : styles.cards__item}
			onClick={toggleCard}>
			<div className={styles.cards__itemFront}>
				<img
					className={styles.cards__img}
					src={cardFront}
					alt=""
					loading="lazy"
				/>
			</div>
			<div className={styles.cards__itemBack}>
				<img
					className={styles.cards__img}
					src={cardBack}
					alt="Рубашка карты"
					loading="lazy"
				/>
			</div>
		</li>
	);
};
