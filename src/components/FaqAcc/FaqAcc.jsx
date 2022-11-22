import { useState } from 'react';
import AccordionItem from './FaqItem';

const faqs = [
	
	{
		question: 'Which eCommerce marketplace is the best place to start?'
		answer: 'When we compare different marketplaces, we can easily see that Amazon has 157.4 million Prime Members and a yearly revenue of $502.1 billion.'
	
	},
	
	
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
	
	{
		question: 'Is selling on Amazon worth it?'
		answer: 
		'If you are thinking about starting a business on Amazon, this is probably the most important consideration. Selling on Amazon isn't a pyramid scheme or a passing fad—a it's legitimate, profitable way to break into the ecommerce market. There is a lot to learn, as with any new platform, but Amazon is worth it. When you launch your own website or ecommerce store, you are responsible for attracting visitors, building an audience, and establishing trust.
		When you sell on Amazon, Amazon has already done all of the legwork; all you have to do is compete with the other products.'
	
	},
	
	{
		question: 'What is an Amazon Private Label?',
		answer: 
		
		'Amazon Accelerator allows manufacturers to launch brands and innovative products exclusively in Amazon store, paving the way them to become Amazon Private Brand or Private Label suppliers. Suppliers can create and trademark their own Amazon-exclusive brand, which will only be available on Amazon. The advantages include the ability to test products and receive immediate feedback, potential entry into Amazon Private Brands, brand protection, marketing services, onboarding support, trend insights, and analytics tools,'
		
		},
	{
		question: 'Is reselling on Amazon legal?'
		answer: 'Completely. You have the right to shop at local thrift stores and then sell your finds on Amazon. There's nothing wrong with purchasing products from Amazon and reselling them at a higher price.'
	
	},
	
	{
		question: 'In which state should you form your LLC for Amazon Wholesale FBA?'
		answer: 'Texas, Florida, and New York are the best states for it. Even Texas does not charge an annual renewal fee.'
	
	},
	
	{
		question: 'What do you require to work with Svetro?'
		answer: 'We accept a minimum investment of $5000 to begin with us, whether it is Amazon Private Label, Amazon Wholesale FBA, or another business model.'
	},
	
	{
		question: 'As a foreigner, can I form an LLC in the United States?'
		answer: 'Yes, you can form an LLC in the United States from anywhere in the world if you have your country's passport and driver's license. Please contact us so that we can assist you further.'
	
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
