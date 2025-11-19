import React from 'react'
import CommonCard from '../common/CommonCard'

export const PintrestForEveryIndustry = ()=>{
  const boxHeight = "270px";
    const data = [
      {
        
        title: "Ecommerce",
        desc: "We create product pins and shop integration boards that guide users from inspiration to purchase. Every pin is optimized to increase traffic and sales.",
        icon: "/images/rounded-icons/r20.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
      {
        
        title: "Fashion & Beauty",
        desc: "Style boards, tutorials, and lookbooks showcase trends and elevate brand presence. These Pinterest marketing services help fashion and beauty brands stay top of mind.",
        icon: "/images/rounded-icons/r11.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "Home Decor",
        desc: "DIY pins, moodboards, and room ideas inspire users while encouraging repins. Our strategies maximize visibility for home decor brands.",
        icon: "/images/rounded-icons/r21.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      },
      {
        
        title: "Food & Wellness",
        desc: "Recipes, lifestyle content, and wellness tips engage audiences and drive traffic. We make your brand discoverable through shareable and high quality pins.",
        icon: "/images/rounded-icons/r22.png", 
        background: "url('/images/ppc/bg-2.png')", 
        height: boxHeight
      },
      {
        
        title: "Education",
        desc: "Infographics, lead magnets, and resource pins position brands as thought leaders. Our Pinterest marketing strategy helps generate qualified leads and build authority.",
        icon: "/images/rounded-icons/r18.png", 
        background: "url('/images/ppc/bg-3.png')", 
        height: boxHeight
      },
      {
        
        title: "Tech & SaaS",
        desc: "Thought leadership pins, guides, and tutorials educate audiences and drive conversions. We ensure tech brands are seen by decision makers at the right time.",
        icon: "/images/rounded-icons/r6.png", 
        background: "url('/images/ppc/bg-1.png')", 
        height: boxHeight
      },
    ];

    return <CommonCard
        seoData={data}
        heding="H2- Pinterest for Every Industry"
        description="BrandStory helps brands across sectors utilize Pinterest for industries to drive discovery, engagement, and conversions. Every strategy is personalized to resonate with the target audience on the visual discovery platform."
        footer="With BrandStory, your brand is always discoverable, saved, and acted upon, no matter the industry."
    />
}