import { useAppSelector } from '../../../redux/hooks';
import { selectIsGameOver } from '../../../redux/slices/game/selectors';

import { CardList, GameOver, InfoPanel } from './features';

import global from '../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Game = () => {
	const isGameOver = useAppSelector(selectIsGameOver);

	return (
		<section className={`${styles.game} ${global.section}`}>
			<div className={global.container}>
				<h2 className={global.srOnly}>Игра</h2>
				<InfoPanel />
				{isGameOver ? <GameOver /> : <CardList />}
			</div>
		</section>
	);
};
