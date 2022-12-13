import { useState } from 'react'
import AccordionItem from './FaqItem'

const faqs = [
  {
    question: 'Which eCommerce marketplace is the best place to start?',
    answer:
      "It really depends on what you are selling and who your target market is. Some popular eCommerce marketplaces include Amazon, eBay, and Etsy. These platforms have a large customer base and can be a good place to start. It's a good idea to research each platform to determine which one will be the best fit for your business. For example, Amazon is a good choice for selling a wide variety of products, while Etsy is better suited for handmade or unique items. When we compare different marketplaces, we can easily see that Amazon has 157.4 million Prime Members and a yearly revenue of $502.1 billion.",
  },

  {
    question: 'How much budget we need for Starting Amazon Business?',
    answer:
      "It's difficult to provide an exact answer to this question, as the cost of starting an Amazon business can vary greatly depending on a number of factors, such as the types of products you plan to sell and the scale of your operation. In general, however, you will need to have some money set aside to cover the cost of creating and stocking your inventory, as well as any fees associated with selling on Amazon. In addition to the cost of creating and stocking your inventory, there are several other expenses you will need to consider when starting an Amazon business. For example, you will need to pay a monthly subscription fee to sell on Amazon, as well as fees for each item you sell. You may also need to invest in marketing and advertising to help promote your products and drive sales.",
  },
  {
    question: 'How long does it take to get a return on investment in Amazon Business?',
    answer:
      "It's difficult to say exactly how long it will take for a business to achieve a return on investment (ROI) on Amazon, as there are many factors that can affect a business's profitability on the platform. Some of these factors include the type of products the business sells, the price of those products, the level of competition in the market, and the business's marketing and advertising efforts.",
  },
  {
    question: 'How much profit we can expect in Amazon private label?',
    answer:
      "The amount of profit a business can expect to make with a private label on Amazon will vary depending on a number of factors, including the demand for the product, the competition in the market, the pricing of the product, and the cost of production. In general, private labeling can be a profitable venture for businesses, but it's important to do thorough market research and carefully consider all costs before launching a private label product. It's also important to continually monitor and adjust your pricing and marketing strategies to ensure the success of your private label. However, you can expect profit margins between 20% to 35% in Amazon Private Label.",
  },
  {
    question: 'What is the potential of Walmart in comparison with Amazon?',
    answer:
      "The potential of Walmart and Amazon as vendors can also be difficult to compare, as both companies have different approaches to working with vendors. Walmart is known for its strong relationship with suppliers and its focus on working closely with vendors to provide the products that customers want at the lowest possible prices. Amazon, on the other hand, has a more open platform that allows a wide range of vendors to sell their products on its platform. Both companies have the potential to be successful vendors, but the specific approach they take and the market they are operating in will ultimately determine their success.",
  },
  {
    question: 'Is eBay doing well in the United States or the United Kingdom?',
    answer: "Based on the market and results, we recommend eBay business in the United Kingdom.",
  },

  {
    question: 'Is selling on Amazon worth it?',
    answer:
      "If you are thinking about starting a business on Amazon, this is probably the most important consideration. Selling on Amazon isn't a pyramid scheme or a passing fad—a it's legitimate, profitable way to break into the ecommerce market. There is a lot to learn, as with any new platform, but Amazon is worth it. When you launch your own website or ecommerce store, you are responsible for attracting visitors, building an audience, and establishing trust. When you sell on Amazon, Amazon has already done all of the legwork; all you have to do is compete with the other products.",
  },

  {
    question: 'What is an Amazon Private Label?',
    answer:
      'Amazon Accelerator allows manufacturers to launch brands and innovative products exclusively in Amazon store, paving the way them to become Amazon Private Brand or Private Label suppliers. Suppliers can create and trademark their own Amazon-exclusive brand, which will only be available on Amazon. The advantages include the ability to test products and receive immediate feedback, potential entry into Amazon Private Brands, brand protection, marketing services, onboarding support, trend insights, and analytics tools,',
  },
  {
    question: 'Is reselling on Amazon legal?',
    answer:
      "Completely. You have the right to shop at local thrift stores and then sell your finds on Amazon. There's nothing wrong with purchasing products from Amazon and reselling them at a higher price.",
  },

  {
    question:
      'In which state should you form your LLC for Amazon Wholesale FBA?',
    answer:
      'Texas, Florida, and New York are the best states for it. Even Texas does not charge an annual renewal fee.',
  },

  {
    question: 'What do you require to work with Svetro?',
    answer:
      'We accept a minimum investment of $5000 to begin with us, whether it is Amazon Private Label, Amazon Wholesale FBA, or another business model.',
  },

  {
    question: 'As a foreigner, can I form an LLC in the United States?',
    answer:
      "Yes, as a foreigner, you can form an LLC in the United States. An LLC, or limited liability company, is a type of business entity that provides its owners with personal liability protection, meaning that their personal assets are generally not at risk in the event that the LLC is sued or incurs debt. To form an LLC in the United States, you will need to choose a state in which to incorporate and file the appropriate paperwork with the state government. You will also need to appoint a registered agent in the state where your LLC is formed, who will be responsible for receiving important legal documents on behalf of your LLC. In some cases, you may also need to obtain a tax identification number for your LLC. Please contact us so that we can assist you further.",
  },
  
]

const Accordion = () => {
  const [clicked, setClicked] = useState('0')

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }

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
  )
}

export default Accordion
