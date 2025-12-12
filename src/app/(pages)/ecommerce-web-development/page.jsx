import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/EcomWebDev/Banner'
import {WhyEveryOnline} from '@/component/pages/EcomWebDev/WhyEveryOnline'
import {CompleteEcom} from '@/component/pages/EcomWebDev/CompleteEcom'
import {OurProvenWorkflow} from '@/component/pages/EcomWebDev/OurProvenWorkflow'
import {TheDifference} from '@/component/pages/EcomWebDev/TheDifference'
import {FocusedApproach} from '@/component/pages/EcomWebDev/FocusedApproach'
import {OurSpecialists} from '@/component/pages/EcomWebDev/OurSpecialists'
import {HelpingBrands} from '@/component/pages/EcomWebDev/HelpingBrands'
import {ClientStories} from '@/component/pages/EcomWebDev/ClientStories'
import {Faqs} from '@/component/pages/EcomWebDev/Faqs'
import {Adv} from '@/component/pages/EcomWebDev/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyEveryOnline />
            <CommonDivider /><CompleteEcom />
            <CommonDivider /><OurProvenWorkflow />
            <CommonDivider /><TheDifference />
            <CommonDivider /><FocusedApproach />
            <CommonDivider /><OurSpecialists />
            <CommonDivider /><HelpingBrands />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;