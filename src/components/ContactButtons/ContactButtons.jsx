import { BsWhatsapp } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import styles from './ContactButtons.module.css';

const ContactButtons = () => {
	return (
		<a
			href='https://wa.me/+12109533347'
			target='_blank'
			className={styles.buttons}
			rel='noreferrer'
		>
			<IconContext.Provider value={{ color: '#fff', className: styles.icon }}>
				<BsWhatsapp />
			</IconContext.Provider>
		</a>
	);
};

export default ContactButtons;
