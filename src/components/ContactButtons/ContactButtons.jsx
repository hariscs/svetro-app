import { RiWhatsappFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import styles from './ContactButtons.module.css';

const ContactButtons = () => {
	return (
		<a
			href='https://wa.me/9234344135578'
			target='_blank'
			className={styles.buttons}
			rel='noreferrer'
		>
			<IconContext.Provider
				value={{ color: '#25D366', className: styles.icon }}
			>
				<RiWhatsappFill />
			</IconContext.Provider>
		</a>
	);
};

export default ContactButtons;
