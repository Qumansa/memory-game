import { useAppSelector } from '../../../redux/hooks';
import { selectIsGameOver } from '../../../redux/slices/result/selectors';
import global from '../../../styles/global.module.scss';
import { CardList, GameOver, InfoPanel } from './features';
import styles from './styles.module.scss';

interface GameProps {
	difficulty: string;
}

export const Game = ({ difficulty }: GameProps) => {
	const isGameOver = useAppSelector(selectIsGameOver);

	return (
		<section className={styles.game}>
			<div className={global.container}>
				<h2 className={global.srOnly}>Игра</h2>
				<InfoPanel />
				{isGameOver ? <GameOver /> : <CardList />}
				{/* <GameOver /> */}
			</div>
		</section>
	);
};
