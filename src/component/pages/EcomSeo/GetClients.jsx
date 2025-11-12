import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const GetClients = () => {
  const accordionData = [
    {
      title: "Improving product discoverability",
      content: `We help your product pages rank better by using the same words your customers are typing into search. That way, when they’re looking for something you sell, your store shows up.`,
    },
    {
      title: "Fixing slow-loading pages",
      content: `People don’t wait for slow websites. We make sure your pages load quickly on phones and desktops, so you don’t lose a customer before they even see your product.`,
    },
    {
      title: "Removing duplicate content",
      content: `If your site has the same content in more than one place, search engines get confused. We clean that up and write clear, unique descriptions for every product and category.`,
    },
    {
      title: "Using relevant search terms and title tags",
      content: `We research what people actually search for and include those words naturally in your page titles, headers, and product info. It helps your store get found without sounding forced.`,
    },
    {
      title: "Building a strong site structure",
      content: `A well-structured site helps both users and Google understand what’s where. We fix broken links, create helpful navigation, and make sure everything is easy to browse.`,
    },
  ];

  return (
    <CommonAccordion
      title="Get More Clients With eCommerce SEO"
      subheding2={`
        When people search online, they’re usually ready to buy. With targeted keywords and well-structured pages, your online store can show up right when it matters most. That means more clicks, more visits, and more sales.<br/><br/>
        <b class="highlited-text">eCommerce SEO services focus on:</b>
      `}
      items={accordionData}
      footer="When your store is easy to find and easy to navigate, your visitors stay longer. And more visits turn into actual purchases."
    />
  );
};