import Banner from '@/component/pages/homeComponent/Banner'
import Bloglist from '@/component/pages/homeComponent/Bloglist'
import ClientLogosSection from '@/component/pages/homeComponent/ClientLogosSection'
import ClientStories from '@/component/pages/homeComponent/ClientStories'
import HeroSection from '@/component/pages/homeComponent/HeroSection'
import HowWeWork from '@/component/pages/homeComponent/HowWeWork'
import ImpactStats from '@/component/pages/homeComponent/ImpactStats'
import IndustriesServed from '@/component/pages/homeComponent/IndustriesServed'
import MarketingServices from '@/component/pages/homeComponent/MarketingServices'
import ServicesSlider from '@/component/pages/homeComponent/ServicesSlider'
import SoftwareSolutions from '@/component/pages/homeComponent/SoftwareSolutions'
import StatsCard from '@/component/pages/homeComponent/StatsCard'
import StoriesSection from '@/component/pages/homeComponent/StoriesSection'
import TechTabs from '@/component/pages/homeComponent/TechTabs'
import WhyBrandStory from '@/component/pages/homeComponent/WhyBrandStory'
import Footer from '@/component/partial/Footer'
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
   <StoriesSection/>
   <ClientLogosSection/>
   <Bloglist/>
   <ClientStories/>
    <Footer/>
    </>

  )
}

export default page