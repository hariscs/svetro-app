import styles from './Modal.module.css';
import { images } from '../../constants';

const Modal = ({ setModal }) => {
	return (
		<div className={styles.modal__container}>
			<div className={styles.modal}>
				<div className={styles.modal__img}>
					<img src={images.modalimg} alt='img' />
				</div>
				<div className={styles.modal__data}>
					<h2 className={styles.modal__title}>Increase your sales</h2>
					<p className={styles.modal__subtitle}>
						Connect with us and Increase your selling and advance your business
						on Amazon, Ebay and Walmart today.
					</p>
					<div className={styles.modal__inputForm}>
						<form
							className={styles.inputForm}
							action='https://formsubmit.co/contact-us@svetro.com'
							method='POST'
						>
							<input
								type='email'
								name='email'
								id='email'
								required
								placeholder='connect with Us'
							/>

							<input type='hidden' name='_captcha' value='false' />
							<input type='hidden' name='_next' value='https://svetro.com/' />
							<button type='submit'>Send</button>
						</form>
						<button
							className={styles.modal__btn}
							onClick={() => setModal(false)}
						>
							No Thanks
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
