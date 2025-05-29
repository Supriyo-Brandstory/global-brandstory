import Banner from '@/component/pages/homeComponent/Banner'
import HeroSection from '@/component/pages/homeComponent/HeroSection'
import HowWeWork from '@/component/pages/homeComponent/HowWeWork'
import ImpactStats from '@/component/pages/homeComponent/ImpactStats'
import IndustriesServed from '@/component/pages/homeComponent/IndustriesServed'
import MarketingServices from '@/component/pages/homeComponent/MarketingServices'
import ServicesSlider from '@/component/pages/homeComponent/ServicesSlider'
import SoftwareSolutions from '@/component/pages/homeComponent/SoftwareSolutions'
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
   <HowWeWork/>
   <ImpactStats/>
   <MarketingServices/>
   <SoftwareSolutions/>
    </>

  )
}

export default page