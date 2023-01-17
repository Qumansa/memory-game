import { useMemo } from 'react';
import { Card } from '../card';

import { catImages } from '../card/data';

import styles from './styles.module.scss';
import { shuffleArray } from './utils/shuffleArray';

export const CardList = () => {
	const shuffledCatImages = useMemo(() => shuffleArray(catImages), [catImages]);

	return (
		<ul className={styles.cards}>
			{shuffledCatImages.map(({ id, src }) => (
				<Card
					key={id}
					src={src}
				/>
			))}
		</ul>
	);
};
