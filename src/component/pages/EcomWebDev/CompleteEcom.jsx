import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const CompleteEcom =()=>{
    const data = {
    heading: "Complete Ecommerce Development<br/>Services for Your Brand",
    subheading:
      "We provide end-to-end solutions that cover every aspect of your ecommerce journey.",
    cards: [
            {
              title: "Custom E-Commerce Solutions",
              description:
                "We build fully tailored e-commerce platforms on Shopify, Magento, WooCommerce, and headless architectures. Every solution is designed to align with your unique business goals and operational needs, ensuring that your online store is scalable, flexible, and ready to grow with your business.",
            },
            {
              title: "UI/UX Design",
              description:
                "Our designs focus on intuitive, mobile-first interfaces that make it easy for customers to explore your products and complete purchases. We map user journeys, optimize flows, and create visually appealing layouts that guide visitors naturally through the shopping experience, enhancing engagement and driving conversions.",
            },
            {
              title: "Payment Gateway Integration",
              description:
                "We integrate secure and widely trusted payment solutions, including Stripe, PayPal, and other gateways, to provide a seamless and safe checkout experience. Our integrations minimize friction during purchase, reduce cart abandonment, and give your customers confidence while transacting online.",
            },
            {
              title: "Advanced Product Management Systems",
              description:
                "Managing inventory, pricing, and promotions is simple with our robust backend systems. We develop scalable, user-friendly management tools that automate routine tasks, streamline operations, and give your team the ability to make quick, data-informed decisions.",
            },
            {
              title: "SEO & Analytics Integration",
              description:
                "We ensure your e-commerce platform is optimized for search engines from day one. Additionally, we integrate analytics tools that track customer behavior, conversion trends, and sales metrics, providing actionable insights to improve marketing strategies, increase revenue, and refine the shopping experience.",
            },
            {
              title: "Post-Launch Support",
              description:
                "Our commitment doesn't end at launch. We provide ongoing monitoring, performance optimization, maintenance, and A/B testing to continually enhance your store. This ensures your platform remains secure, fast, and aligned with your evolving business goals, maximizing ROI over time.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Each service is designed to address ecommerce challenges and deliver measurable results.</p>
        </>
    )
}