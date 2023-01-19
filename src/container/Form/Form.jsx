import {
	BsInstagram,
	BsFacebook,
	BsLinkedin,
	BsTwitter,
	BsYoutube,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import styles from './Form.module.css';
import { motion } from 'framer-motion';

const Form = () => {
	return (
		<div className={styles.form}>
			<div className='container'>
				<motion.div
					className={styles.form__info}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -100 },
					}}
				>
					<h2 className={styles.form__title}>Contact Us </h2>
					<p className={styles.form__subtitle}>
						We will get back to you as soon as possible.
					</p>
				</motion.div>
				<motion.div
					className={styles.form__flex}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -100 },
					}}
				>
					<div className={styles.flex__info}>
						<h2 className={styles.info__title}>Get In Touch</h2>
						<p className={styles.info__subtitle}>
							Tell us a little bit about yourself and what you are specifically looking for.
							You can also arrange a time to stop by the office and speak with our representative.
							Our doors are always open!
								
						</p>

						<div className={styles.iconFlex}>
							<IconContext.Provider
								value={{ color: 'white', className: 'icon' }}
							>
								<a href='/yt' className={styles.footer__iconContainer}>
									<BsYoutube />
								</a>
							</IconContext.Provider>

							<a href='/fb' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsFacebook />
								</IconContext.Provider>
							</a>
							<a href='/tw' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsTwitter />
								</IconContext.Provider>
							</a>
							<a href='/in' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsLinkedin />
								</IconContext.Provider>
							</a>
							<a href='/ig' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsInstagram />
								</IconContext.Provider>
							</a>
						</div>

						<div className={styles.flex}>
							<a href='mailto:info@svetro.com'>info@svetro.com</a>
							<a href='callto:+447915601167'>+1 (210) 953 3347</a>
							
							<div className={styles.address}>
								2186 Jackson Keller Rd Ste 1215
								<br/>San Antonio,TX 78213
								<br/>United States
							</div>
						
						</div>
					</div>
					<form
						className={styles.inputForm}
						action='https://formsubmit.co/contact-us@svetro.com'
						method='POST'
					>
						<div className={styles.form__inputs}>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								name='name'
								required
								placeholder='Name'
							/>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								id='email'
								required
								placeholder='John@gmail.com'
							/>
							<label htmlFor='call'>Phone No.</label>
							<input
								type='tel'
								name='number'
								id='call'
								placeholder='+1 210 123 4567'
							/>

							<label htmlFor='date'>Schedule a Date</label>
							<input type='date' name='date' id='date' required />
							<label htmlFor='time'>Schedule a Time, US (UTC-08:00)</label>
							<input type='time' name='time' id='time' required />
							<label htmlFor='message'>Message</label>
							<textarea
								name='message'
								id='message'
								placeholder='Message '
							></textarea>
							<input type='hidden' name='_captcha' value='false' />
							<input type='hidden' name='_next' value='https://svetro.com/' />
						</div>
						<button type='submit'>Send</button>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default Form;
