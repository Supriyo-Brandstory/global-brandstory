import Banner from '@/component/pages/homeComponent/Banner'
import HeroSection from '@/component/pages/homeComponent/HeroSection'
import IndustriesServed from '@/component/pages/homeComponent/IndustriesServed'
import ServicesSlider from '@/component/pages/homeComponent/ServicesSlider'
import StatsCard from '@/component/pages/homeComponent/StatsCard'
import TechTabs from '@/component/pages/homeComponent/TechTabs'
import WhyBrandStory from '@/component/pages/homeComponent/WhyBrandStory'
import Header from '@/component/partial/Header'
import React from 'react'

const page = () => {
  return (
    <>
   <Header/>
   <Banner/> 
   <StatsCard/>
   <HeroSection/>
   <WhyBrandStory/>
   <ServicesSlider/>
   <TechTabs/>
   <IndustriesServed/>
    </>

  )
}

export default page