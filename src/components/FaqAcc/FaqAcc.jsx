import { useState } from 'react';
import AccordionItem from './FaqItem';

const faqs = [
	{
		question: 'How much budget we need for Starting Amazon Business?',
		answer:
			'It depends on the marketplace competition in which the business will be established.',
	},
	{
		question: 'How much time it takes to achieve ROI?',
		answer:
			'It varies for different business models and platforms but 6-8 months is the average Time period based on experience.',
	},
	{
		question: 'How much profit we can expect in Amazon private label?',
		answer:
			'Our target margin is 25% net, it can grow more over the time and can fluctuate according to market situation',
	},
	{
		question: 'What is the potential of Walmart in comparison with Amazon?',
		answer:
			'Its a second biggest online retail body in US with incredibly low competition as compare to Amazon which means higher chances to grow faster',
	},
	{
		question: 'Is ebay business good in US or UK?',
		answer: 'Based on the market and results we recommend ebay business in UK.',
	},
];

const Accordion = () => {
	const [clicked, setClicked] = useState('0');

	const handleToggle = (index) => {
		if (clicked === index) {
			return setClicked('0');
		}
		setClicked(index);
	};

	return (
		<ul className='accordion'>
			{faqs.map((faq, index) => (
				<AccordionItem
					onToggle={() => handleToggle(index)}
					active={clicked === index}
					key={index}
					faq={faq}
				/>
			))}
		</ul>
	);
};

export default Accordion;
