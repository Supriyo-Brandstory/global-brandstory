import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const WhatMakes = () => {
  const title = "What Makes Our Shopify Development<br/>Approach Stand Out From Others";
  const description = "When you partner with us, you’re choosing more than developers—you’re choosing a team committed to your growth.";
  const data = [
    {
      "title": "Proven Experience",
      "description": "With years of Shopify projects delivered across industries and business sizes, we bring a wealth of insights and best practices to every engagement.",
      "bgcolor": "#6d3119",
      "logo": "/images/square-images/s26.png"
    },
    {
      "title": "Certified Shopify Experts",
      "description": "Our team includes certified Shopify professionals with deep technical knowledge and real-world problem-solving experience, ensuring your store is built to the highest standards.",
      "bgcolor": "#474574",
      "logo": "/images/square-images/s55.png"
    },
    {
      "title": "Collaborative Approach",
      "description": "We believe in complete transparency—clear timelines, open communication, and ongoing collaboration at every stage of your project.",
      "bgcolor": "#3e484b",
      "logo": "/images/square-images/s10.png"
    },
    {
      "title": "Future-Proof Solutions",
      "description": "From seasonal traffic spikes to long-term scalability, our development approach ensures your store’s architecture is robust, adaptable, and ready to support growth.",
      "bgcolor": "#6d3119",
      "logo": "/images/square-images/s34.png"
    },
    {
      "title": "Trusted Partner",
      "description": "More than developers, we act as your strategic partner. Our proven track record in delivering measurable ecommerce results makes us a reliable extension of your business team.",
      "bgcolor": "#474574",
      "logo": "/images/square-images/s12.png"
    }
  ];

  return (
    <CommonGridBox3Scrollable title={title} description={description} data={data} />
  );
}