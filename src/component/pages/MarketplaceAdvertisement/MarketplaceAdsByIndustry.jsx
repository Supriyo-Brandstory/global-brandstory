import React from 'react'
import CommonCard from '../common/CommonCard'

export const MarketplaceAdsByIndustry = ()=>{
  const boxHeight = "280px";
    const seoData = [
      {
        title: "Fashion & Apparel",
        desc: "We optimize for size variations, style-based targeting, and seasonal keyword strategy to increase visibility. High quality visuals and lookbook style creatives help your products stand out.",
        icon: "/images/rounded-icons/r86.png", // Placeholder, you might want to use icons relevant to the image
        background:"url('/images/ppc/p-bg-1.png')", // Placeholder for background style
        height: boxHeight
      },
      {
        title:"Electronics",
        desc:"We highlight product features with clear messaging, reviews, and spec comparisons. Warranty and guarantee displays build customer trust and confidence.",
        icon:"/images/rounded-icons/r41.png", // Placeholder
        background:"url('/images/ppc/p-bg-2.png')", // Placeholder
        height: boxHeight
      },
      {
        title:"Health & Beauty",
        desc:"Ingredient callouts, Before and After content, and compliance focus educate customers effectively. Category-specific visuals and tone enhance engagement and brand recall.",
        icon:"/images/rounded-icons/r12.png", // Placeholder
        background:"url('/images/ppc/p-bg-3.png')", // Placeholder
        height: boxHeight
      },
      {
        title:"Home & Furniture",
        desc:"Contextual image optimization, lifestyle imagery, and long-tail keywords will improve search relevance. Bundle promotions and cross-selling techniques increase average order values.",
        icon:"/images/rounded-icons/r42.png", // Placeholder
        background:"url('/images/ppc/p-bg-1.png')", // Placeholder
        height: boxHeight
      },
      {
        title:"Food & Groceries",
        desc:"Subscription promotions, freshness cues, and fast shipping badges attract buyers. High volume and low ticket ROAS planning ensures cost-effective campaigns.",
        icon:"/images/rounded-icons/r14.png", // Placeholder
        background:"url('/images/ppc/p-bg-2.png')", // Placeholder
        height: boxHeight
      },
      {
        title:"Books & Stationery",
        desc:"Author name SEO, Bundle offers, and editorial reviews improve discoverability. Smart niche targeting for genres and educational/use cases boosts conversions.",
        icon:"/images/rounded-icons/r43.png", // Placeholder
        background:"url('/images/ppc/p-bg-2.png')", // Placeholder
        height: boxHeight
      }
    ];

    return <CommonCard
            seoData={seoData}
            heding="Marketplace Ads by Industry"
            description="We don’t believe in one-size-fits-all advertising. Our campaigns are shaped by your product category and customer behavior.<br/><br/>Here is how we approach Marketplace Ads by Industry:"
            footer="Each Category Has Unique Buyer Behavior And We Build Your Ad Plan Around It."
        />
}