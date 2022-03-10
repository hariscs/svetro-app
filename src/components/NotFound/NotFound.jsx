import { NavLink } from 'react-router-dom';
import { images } from '../../constants';
import styles from './NotFound.module.css';

const NotFound = () => {
	return (
		<section className={styles.lost}>
			<div className='container'>
				<div className={styles.lost__flex}>
					<div className={styles.lost__info}>
						<h2 className={styles.lost__title}>
							Oops it happened again... you navigated to the
							<span> wrong place!</span>
						</h2>
						<div className={styles.lost__img}>
							<img src={images.img404} alt='lost board' />
						</div>
					</div>

					<div className={styles.lost__btns}>
						<NavLink to='/' className={`${styles.btn} ${styles.btn__primary}`}>
							Go Back Home
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
