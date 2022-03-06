import { NavLink } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children }) => {
	return (
		<NavLink to='/contact' className={styles.btn}>
			{children}
		</NavLink>
	);
};

export default Button;
