import { Link } from 'react-router-dom';

import global from '../../styles/global.module.scss';
import styles from './styles.module.scss';

export const Page404 = () => {
	return (
		<section className={global.section}>
			<div className={`${styles.page404__container} ${global.container}`}>
				<h2 className={styles.page404__text}>404 Страница не найдена!</h2>
				<svg
					className={styles.page404__img}
					width="800"
					height="800"
					viewBox="0 0 800 800"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M97.8932 240C82.7427 270 66.275 343.122 87.8935 403.75C92.1265 415.62 97.304 426.347 103.143 436.11C112.874 398.93 124.466 360.265 136.25 333.75C147.432 308.59 254.317 268.5 263.167 265.215C263.592 265.057 263.985 265.045 264.432 265.132L316.25 275.097C316.25 275.097 342.5 256.25 353.75 252.5C359.672 250.527 374.225 251.257 393.587 253.715C401.1 232.294 404.04 212.768 400 201.25C392.557 180.032 390.52 186.976 387.238 198.164C385.3 204.771 382.927 212.859 378.75 217.5C367.152 230.385 348.75 227.5 341.25 210C334.642 194.581 347.5 173.722 350 170C359.235 156.25 383.84 149.825 408.75 157.5C438.695 166.726 449.835 193.78 452.5 225C453.655 238.529 452.588 251.165 449.868 262.91C503.67 273.052 565.157 287.52 595 296.25C650 312.345 660 461.25 588.75 448.125V567.07C588.75 568.087 588.135 569.002 587.195 569.385L460.065 621.255C518.712 630.775 589.27 624.03 649.143 570C693.048 530.38 715.808 496.462 720.393 437.5C725.598 370.562 699.175 308.75 674.143 260C639.595 192.719 584.142 157.576 536.642 136.25C489.142 114.923 412.892 100 342.892 100C272.892 100 211.643 128.75 175.393 151.25C139.143 173.75 113.043 210 97.8932 240Z"
						fill="#0F6C76"
					/>
					<path
						d="M432.5 632.503L587.195 569.385C588.135 569.003 588.75 568.088 588.75 567.07V448.125M432.5 632.503C437.5 581.25 450.248 432.583 478.75 405C517.5 367.5 588.75 327.5 588.75 327.5M432.5 632.503C394.043 630.81 360.315 628.273 329.103 624.355M588.75 448.125V327.5M588.75 448.125C660 461.25 650 312.345 595 296.25M588.75 327.5L533.75 316.925M329.103 624.355C337.873 604.96 345.36 585.513 350.615 571.033M329.103 624.355C311.953 662.278 289.895 700 270 700C249.097 700 251.735 655.035 256.35 611.695M533.75 316.925C533.75 316.925 453.335 351.773 420 393.75C415.358 399.598 411.11 407.31 407.238 416.25M533.75 316.925C548.463 296.72 559.228 288.708 595 296.25M533.75 316.925L435.822 298.093M316.25 275.098L264.433 265.133C263.985 265.048 263.593 265.058 263.168 265.218C254.318 268.5 147.432 308.59 136.25 333.75C108.253 396.743 81.3457 528.318 77.8765 545.613C77.649 546.745 78.2428 547.84 79.2955 548.32C101.777 558.57 122.698 567.603 142.677 575.563M316.25 275.098C316.25 275.098 342.5 256.25 353.75 252.5C359.673 250.528 374.225 251.258 393.588 253.715M316.25 275.098C316.25 275.098 278.243 287.26 242.5 307.753M316.25 275.098L378.853 287.135M142.677 575.563C146.839 556.513 153.047 536.105 161.503 515.568M142.677 575.563C130.479 631.403 135.86 675.618 153.75 677.5C176.247 679.868 198.294 639.97 216.915 601.428M393.588 253.715C401.1 232.294 404.04 212.769 400 201.251C388.163 167.501 390 205.001 378.75 217.501C367.153 230.386 348.75 227.501 341.25 210.001C334.643 194.581 347.5 173.723 350 170.001C359.235 156.251 383.84 149.825 408.75 157.501C438.695 166.727 449.835 193.781 452.5 225.001C453.655 238.53 452.588 251.165 449.868 262.91M393.588 253.715C389.758 264.633 384.74 276.043 378.853 287.135M242.5 307.753C224.312 318.18 206.709 330.765 195 345C170.956 374.233 155.8 494.25 153.943 509.628C153.823 510.625 154.318 511.573 155.193 512.065C157.313 513.258 159.416 514.425 161.503 515.568M242.5 307.753L235 405.81M378.853 287.135C362.443 318.055 339.278 346.518 316.25 355C284.578 366.67 257.635 384.458 235 405.81M407.238 416.25C385.54 466.373 375.65 555.165 374.003 571.225C373.858 572.618 372.61 573.625 371.22 573.468C364.108 572.663 357.248 571.855 350.615 571.033M407.238 416.25C387.283 385.453 359.018 382.625 347.132 380.173C345.14 379.76 345.07 377.585 346.898 376.688C361.628 369.463 409.76 343.265 435.822 298.093M595 296.25C565.158 287.52 503.67 273.053 449.868 262.91M435.822 298.093C441.98 287.423 446.905 275.695 449.868 262.91M161.503 515.568C177.501 476.705 201.545 437.368 235 405.81M350.615 571.033C355.745 556.9 358.75 547.5 358.75 547.5M290 428.75C295.923 437.258 297.88 442.708 298.75 453.75M275 448.75C287.35 440.428 295.075 437.255 310 433.75M420 573.753C421.978 581.413 421.505 585.048 420 591.25M388.75 611.25C393.25 609.575 397.1 609.455 407.238 611.25M547.5 521.25C547.305 526.3 547.275 528.873 547.5 532.5M565 505C564.69 509.395 564.648 511.858 565 516.25M565 537.5C565.633 543.578 565.485 545.795 565 547.5M110 506.25C108.484 508.973 107.356 512.678 105 522.5M118.75 532.5C117.062 539.253 115.933 541.37 113.75 543.75M241.92 550.06C248.087 538.853 253.358 531.868 257.5 532.5C261.743 533.148 262.648 542.12 261.975 555.608M241.92 550.06C248.464 552.053 255.125 553.893 261.975 555.608M241.92 550.06C234.692 563.2 226.233 582.145 216.915 601.428M261.975 555.608C261.23 570.505 258.563 590.913 256.35 611.695M216.915 601.428C230.057 605.273 243.129 608.678 256.35 611.695M533.75 170.001C533.75 170.001 565 146.251 575 170.001C585 193.751 540 210.001 540 210.001M540 230.001V235.001M561.25 408.84V427.033C561.25 428.068 560.612 428.995 559.647 429.368L499.647 452.445C498.01 453.073 496.25 451.865 496.25 450.11V435.378C496.25 434.39 496.833 433.493 497.738 433.093L557.738 406.555C559.393 405.823 561.25 407.033 561.25 408.84Z"
						stroke="black"
						stroke-width="12.5"
						stroke-linecap="round"
					/>
				</svg>
				<Link
					className={`${styles.page404__link} ${global.button} `}
					to={`/`}>
					На главную
				</Link>
			</div>
		</section>
	);
};