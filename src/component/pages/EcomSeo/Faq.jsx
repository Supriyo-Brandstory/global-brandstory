import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
  const data = [
    {
      title: "How long does eCommerce SEO take to show results?",
      description: "You’ll usually start seeing signs of improvement in 3 to 6 months. Bigger stores or tougher markets may take a little longer, but early wins often show up sooner."
    },
    {
      title: "What platforms do you support?",
      description: "We work across all major ecommerce platforms including Shopify, WooCommerce, Magento, Wix, BigCommerce, and even fully custom-built stores."
    },
    {
      title: "Do you offer product content writing services?",
      description: "Yes. We create clear, search-optimized product descriptions, blog posts, and buying guides that help drive both traffic and sales."
    },
    {
      title: "Will you help improve my store’s loading speed?",
      description: "Absolutely. Page speed is a major ranking factor, and we include speed fixes as part of our technical SEO service."
    },
    {
      title: "Can SEO help reduce dependency on paid ads?",
      description: "Yes. While ads stop when the budget runs out, SEO brings in steady, long-term traffic that costs less over time and builds real value."
    }
  ];

  return <FAQs data={data} />;
};