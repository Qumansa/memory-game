import global from '../../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Page404 = () => {
	return (
		<>
			<section>
				<div className={global.container}>
					<p>Страница не найдена.</p>
				</div>
			</section>
		</>
	);
};
