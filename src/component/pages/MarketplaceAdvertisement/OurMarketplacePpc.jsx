import React from 'react';
import CommonTwoCard from '../common/CommonTwoCard';

export const OurMarketplacePpc = () => {
    const data = {
        heading: "Our Marketplace PPC Services",
        subheading:
            "Our Marketplace PPC Services are Designed For Performance. We Build Full-Funnel Advertising Systems Designed To Capture Attention, Increase Conversions, And Scale Your Product Visibility Across Every Stage Of The Buyer Journey. Every Service Below Supports A Stage In Your Buyer Journey From Awareness To Conversion And Beyond.",
        cards: [
            {
                title: "Sponsored Product Ads",
                description:
                    "Get Your Products Featured Right Where People Are Searching, At The Top Of Results. These Keyword Targeted Ads Boost Instant Visibility For High Intent Shoppers. Great For Fast Moving Items, Seasonal Sales, And New Launches.",
            },
            {
                title: "Display Ads Within Marketplaces",
                description:
                    "Reach Shoppers As They Browse Category Pages, Product Listings, And Homepage Carousels. Display Placements Increase Awareness And Brand Recall At Every Touchpoint. Ideal For Cross Selling, Promotions, Or Visual Heavy Products.",
            },
            {
                title: "Headline Search Ads",
                description:
                    "Own Premium Banner Space At The Top Of Search Results With Branded Ad Creatives, Showcase Multiple Products Together To Drive Exploration And Bundled Interest. Perfect For Brand-Led Campaigns Or Launching New Collections.",
            },
            {
                title: "Marketplace Brand Stores",
                description:
                    "Create Immersive, Multi-Page Storefronts Directly Within Marketplaces Like Amazon. Brand Stores Turn One-Time Buyers Into Repeat Customers Through Experience And Design. We Handle Layout, Content, And Traffic Routing For Smooth Shopping Journeys.",
            },
            {
                title: "Re-Targeting & Dynamic Ads",
                description:
                    "Bring Back Shoppers Who Viewed, Clicked, Or Added To Cart But Didn't Convert. We Set Up Retargeting Flows Using Dynamic Product Ads Tailored To User Behavior. It's Your Second Chance To Win The Sale, Automated, Efficient, And ROI Positive.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col" />
            <p className='max-w-[1200px] text-center mx-auto mb-30'>Every Campaign Is Tailored To Your Brand’s Goals Using A Full-Funnel Ecommerce Paid Advertising Approach.</p>
        </>
    );
};