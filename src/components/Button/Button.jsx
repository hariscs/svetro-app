import { NavLink } from 'react-router-dom';

const Button = ({ children, btnType }) => {
	return (
		<NavLink to='/contact' className={`btn ${btnType}`}>
			{children}
		</NavLink>
	);
};

export default Button;
