import { NavLink } from 'react-router-dom';

const Button = ({ children, btnType }) => {
	return (
		<NavLink to='https://tidycal.com/svetro/book-a-meeting' className={`btn ${btnType}`}>
			{children}
		</NavLink>
	);
};

export default Button;
