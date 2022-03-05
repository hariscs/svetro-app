import styles from './Button.module.css';

const Button = ({ link, text }) => {
	return (
		<a href={link} className={styles.btn}>
			{text}
		</a>
	);
};

export default Button;
