import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const OurTested = () => {
    const data = {
        heading: "Our Tested Strategies for Driving Growth Through Shopify Development",
        subheading: "Every Shopify project is backed by strategies designed for long-term success:",
        cards: [
            {
                title: "Conversion Rate Optimization (CRO)",
                description: "We design every touchpoint of your Shopify store to maximize sales and boost average order value. From product pages to checkout flows, our CRO-driven approach ensures your visitors turn into loyal buyers.",
            },
            {
                title: "Performance & SEO",
                description: "A fast-loading, technically optimized store doesn’t just deliver a better user experience—it also earns higher search engine rankings. We combine clean coding, structured data, and SEO best practices to grow your organic traffic.",
            },
            {
                title: "Customer Retention & Loyalty",
                description: "Beyond the first purchase, we help you build seamless, memorable shopping experiences that keep customers engaged. From personalized features to loyalty integrations, we create stores that encourage repeat sales.",
            },
            {
                title: "Scalability Planning",
                description: "Your store should grow as your business grows. Our solutions are built with scalability in mind, ensuring you can handle traffic spikes, product expansions, or new markets without costly redesigns or downtime.",
            },
        ],
    };

    return (
        <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
    )
}