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
import React from 'react'
import SeoMarketingService from '@/component/pages/seoComponent/SeoMarketingService'
import CommonDivider from '@/component/pages/common/CommonDivider'

const page = () => {

  return (
    <>
    <SeoBanner/>
    <CommonDivider /><Seoabout/>

    <CommonDivider /><SeoStats/>
    
    <CommonDivider /><SeoMethodology/>
    
    <CommonDivider /><SEOApart/>
    
    <CommonDivider /><SeoRoiSection/>
    
    <CommonDivider /><SeoStrategies/>
    
    <CommonDivider /><SeoExpertise />
    
    <CommonDivider /><SeoResults />
    
    <CommonDivider /><FAQs />
    
    <CommonDivider /><SeoMarketingService />
    
    <CommonAdvertise />
    </>
  )
}

export default page