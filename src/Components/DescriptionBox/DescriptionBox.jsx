import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce is the process of buying and selling goods or services online using digital platforms,
          involving activities like product listing, secure payments through gateways, customer interaction,
          inventory management, order tracking, and delivery, with benefits such as 24/7 accessibility, global
          reach, personalized experiences, and convenience for both businesses and consumers. E-commerce is the
          buying and selling of goods and services over the internet. It involves digital platforms where
          businesses list products for customers to browse. Transactions are completed using secure payment
          gateways like PayPal or Stripe. The process includes product selection, adding to cart, and completing
          checkout. Customers can shop 24/7, making e-commerce highly convenient and accessible. It eliminates
          geographical barriers, allowing businesses to reach a global audience.
        </p>
        <p>
          It can operate as B2C (Business-to-Consumer) or B2B (Business-to-Business). Other models include C2C
          (Consumer-to-Consumer) and D2C (Direct-to-Consumer). Features like reviews, recommendations, and
          discounts enhance user experience. Mobile apps play a crucial role in driving e-commerce growth
          worldwide. Social media integration helps in marketing and increasing sales. Technologies like AI and
          chatbots provide personalized shopping experiences.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
