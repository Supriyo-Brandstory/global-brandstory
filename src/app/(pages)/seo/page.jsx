import Seoabout from '@/component/pages/seoComponent/SeoAbout'
import SEOApart from '@/component/pages/seoComponent/SeoApart'
import { SeoBanner } from '@/component/pages/seoComponent/SeoBanner'
import SeoMethodology from '@/component/pages/seoComponent/SeoMethodology'
import SeoRoiSection from '@/component/pages/seoComponent/SeoRoiSection'
import SeoStats from '@/component/pages/seoComponent/SeoStats'
import SeoStrategies from '@/component/pages/seoComponent/SeoStrategies'
import SeoExpertise from '@/component/pages/seoComponent/SeoExpertise'
import SeoResults from '@/component/pages/seoComponent/SeoResults'
import FAQs from '@/component/pages/common/CommonFAQ'
import CommonAdvertise from '@/component/pages/common/CommonAdvertise'
import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

import React from 'react'

const page = () => {

  // Example usage with different box types
  const boxesData = [
    {
        title: "Enterprise SEO",
        description: "Scalable Strategies For Large, Complex Websites With Multiple Markets Or Locations.",
        theme: "light",
        size: "sm"
    },
    {
        title: "E-Commerce SEO",
        description: "Product-Focused Optimisation To Increase Visibility, Improve User Experience, And Drive More Online Sales.",
        theme: "dark",
        size: "md"
    },
    {
        title: "Link Building",
        description: "Quality Backlink Strategies That Build Authority And Strengthen Search Rankings.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Local SEO",
        description: "Targeted Optimisation To Improve Your Presence In Map Listings And Local Search Results.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "AEO Optimisation",
        description: "Fine-Tuning Your Site For Answer Engines And Voice Search To Capture Emerging Search Opportunities.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "SEO For LLM",
        description: "Optimising For Large Language Models To Ensure Your Content Is Surfaced By AI-Driven Search Tools.",
        theme: "dark",
        size: "lg"
    }
  ];

<CommonArrowGrid boxes={boxesData} />

  return (
    <>
    <SeoBanner/>
    <Seoabout/>
    <SeoStats/>
    <SeoMethodology/>
    <SEOApart/>
    <SeoRoiSection/>
    <SeoStrategies/>
    <SeoExpertise />
    <SeoResults />
    <FAQs />
    <CommonArrowGrid 
      boxes={boxesData}
    />
    <CommonAdvertise />
    </>
  )
}

export default page