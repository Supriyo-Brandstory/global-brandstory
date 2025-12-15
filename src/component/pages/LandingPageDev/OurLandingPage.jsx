import React from 'react'
import CommonCard from '../common/CommonCard'

export const OurLandingPage = ()=>{
  const boxHeight = "280px"; 
    const seoData = [   
      {
        title: "Digital Marketing Agencies",
        desc: "We provide white-label landing page services that help agencies scale effortlessly. By outsourcing design, development, and optimization to us, agencies can expand their offerings without overextending internal resources.",
        icon: "/images/rounded-icons/r52.png", 
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"SaaS Companies",
        desc:"Our scalable landing pages are designed to highlight software demos, drive signups, and capture leads effectively. Every page is optimized to communicate value quickly and encourage user action in competitive SaaS markets.",
        icon:"/images/rounded-icons/r87.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      },
      {
        title:"E-commerce Brands",
        desc:"We create product-focused landing pages built to maximize conversions, boost sales, and lower cost per acquisition (CPA). From seasonal campaigns to evergreen product launches, our designs keep customers engaged and ready to buy.",
        icon:"/images/rounded-icons/r84.png",
        background:"url('/images/ppc/p-bg-3.png')",
        height: boxHeight
      },
      {
        title:"B2B Firms",
        desc:"For B2B campaigns, we craft conversion-focused pages tailored to lead generation objectives. With persuasive messaging, trust elements, and seamless forms, we help businesses build strong pipelines of qualified leads.",
        icon:"/images/rounded-icons/r23.png",
        background:"url('/images/ppc/p-bg-1.png')",
        height: boxHeight
      },
      {
        title:"Event & Campaign Promotions",
        desc:"Our landing pages for events and campaigns are designed to deliver high ROI. Whether for a product launch, webinar, or limited-time promotion, we ensure the right message resonates with the right audience at the right time.",
        icon:"/images/rounded-icons/r113.png",
        background:"url('/images/ppc/p-bg-2.png')",
        height: boxHeight
      }
    ];

    return <CommonCard 
            seoData={seoData} 
            heding="Our Landing Page Services for<br/>Diverse Sectors"
            description="We’ve developed landing pages for a wide range of businesses:"
            footer="No matter your industry, our process adapts to your audience and goals."
        />
}