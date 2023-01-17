import { Card } from '../card';
import { catImages } from '../card/data';

import styles from './styles.module.scss';

export const CardList = () => {
	return (
		<ul className={styles.cards}>
			{catImages.map(({ id, src }) => (
				<Card
					key={id}
					src={src}
				/>
			))}
		</ul>
	);
};
