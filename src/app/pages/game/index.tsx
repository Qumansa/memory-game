import global from '../../../styles/global.module.scss';
import { CardList } from './features/cardList';
import styles from './styles.module.scss';

interface GameProps {
	difficulty: string;
}

export const Game = ({ difficulty }: GameProps) => {
	return (
		<section className={styles.game}>
			<div className={global.container}>
				<h2 className={global.srOnly}>Игра</h2>
				<div className={styles.game__info}>
					<span className={styles.game__difficulty}>Уровень сложности: легкий</span>
					<span className={styles.game__result}>Отгадано котиков: 0/12</span>
				</div>
				<CardList />
			</div>
		</section>
	);
};
