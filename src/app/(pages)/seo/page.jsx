import Seoabout from '@/component/pages/seoComponent/SeoAbout'
import SEOApart from '@/component/pages/seoComponent/SeoApart'
import { SeoBanner } from '@/component/pages/seoComponent/SeoBanner'
import SeoMethodology from '@/component/pages/seoComponent/SeoMethodology'
import SeoRoiSection from '@/component/pages/seoComponent/SeoRoiSection'
import SeoStats from '@/component/pages/seoComponent/SeoStats'
import SeoStrategies from '@/component/pages/seoComponent/SeoStrategies'
import React from 'react'

const page = () => {
  return (
    <>
    <SeoBanner/>
    <Seoabout/>
    <SeoStats/>
    <SeoMethodology/>
    <SEOApart/>
    <SeoRoiSection/>
    <SeoStrategies/>
    </>
  )
}

export default page