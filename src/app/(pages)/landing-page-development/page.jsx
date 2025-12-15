import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/LandingPageDev/Banner'
import {HowLanding} from '@/component/pages/LandingPageDev/HowLanding'
import {OurServices} from '@/component/pages/LandingPageDev/OurServices'
import {OurRoadmap} from '@/component/pages/LandingPageDev/OurRoadmap'
import {WhyChooseUs} from '@/component/pages/LandingPageDev/WhyChooseUs'
import {OurSpecialists} from '@/component/pages/LandingPageDev/OurSpecialists'
import {ProvenTactics} from '@/component/pages/LandingPageDev/ProvenTactics'
import {TheDevelopment} from '@/component/pages/LandingPageDev/TheDevelopment'
import {OurLandingPage} from '@/component/pages/LandingPageDev/OurLandingPage'
import {ClientStories} from '@/component/pages/LandingPageDev/ClientStories'
import {Faqs} from '@/component/pages/LandingPageDev/Faqs'
import {Adv} from '@/component/pages/LandingPageDev/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><HowLanding />
            <CommonDivider /><OurServices />
            <CommonDivider /><OurRoadmap />
            <CommonDivider /><WhyChooseUs />
            <CommonDivider /><ProvenTactics />
            <CommonDivider /><OurSpecialists />
            <CommonDivider /><TheDevelopment />
            <CommonDivider /><OurLandingPage />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;