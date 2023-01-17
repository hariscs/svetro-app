import React from 'react';

const Button = ({ children, btnType }) => {
return (
<>
<a href='https://tidycal.com/svetro/book-a-meeting' className={btn ${btnType}}>
{children}
</a>
<script src="https://asset-tidycal.b-cdn.net//js/embed.js"></script>
<div id="tidycal-embed" data-path="svetro/book-a-meeting"></div>
</>
);
};

export default Button;
