import React from 'react'
import CommonCard from '../common/CommonCard'

export const IndustrySpecefic = () => {
  const boxHeight = "270px";
    const data = [
      {
        
        title: "Tech & SaaS",
        desc: "Targeted account-based ads and product explainer content that highlight innovation and value for potential clients.",
        icon: "/images/round-index/1.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Finance",
        desc: "Thought leadership campaigns with messaging that is both compelling and fully compliance-safe.",
        icon: "/images/round-index/2.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "Healthcare",
        desc: "Physician and B2B outreach campaigns with medically accurate copy to build trust and authority.",
        icon: "/images/round-index/3.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      },
      {
        
        title: "Education",
        desc: "Enrollment-focused campaigns and reputation-building content that attract students, faculty, and stakeholders.",
        icon: "/images/round-index/4.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Real Estate",
        desc: "Precision targeting for brokers, investors, and high-net-worth buyers, showcasing properties and opportunities effectively.",
        icon: "/images/round-index/5.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Consulting",
        desc: "Executive visibility campaigns and high-value lead generation that position your leadership as industry experts.",
        icon: "/images/round-index/6.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
    ];

    return <CommonCard
        seoData={data}
        heding="Industry Expertise: LinkedIn for Every Sector"
        description="We understand the nuances of different industries. Our sector LinkedIn marketing experience includes:"
        footer="Across B2B verticals, we tailor solutions that fit your segment."
    />
}