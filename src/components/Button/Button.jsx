import React from 'react';

const Button = ({ children, btnType }) => {
	return (
		<a href='https://tidycal.com/svetro/book-a-meeting' className={`btn ${btnType}`}>
			{children}
		</a>
	);
};

export default Button;

