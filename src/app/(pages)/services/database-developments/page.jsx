import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/DatabaseDevelopmentServices/Banner'
import {HowGood} from '@/component/pages/DatabaseDevelopmentServices/HowGood'
import {OurComplete} from '@/component/pages/DatabaseDevelopmentServices/OurComplete'
import {OurStepByStep} from '@/component/pages/DatabaseDevelopmentServices/OurStepByStep'
import {TheDiffrence} from '@/component/pages/DatabaseDevelopmentServices/TheDiffrence'
import {ExpertStrategies} from '@/component/pages/DatabaseDevelopmentServices/ExpertStrategies'
import {MeetTheExperts} from '@/component/pages/DatabaseDevelopmentServices/MeetTheExperts'
import {BusinessBenefiting} from '@/component/pages/DatabaseDevelopmentServices/BusinessBenefiting'
import {ClientStories} from '@/component/pages/DatabaseDevelopmentServices/ClientStories'
import {Faqs} from '@/component/pages/DatabaseDevelopmentServices/Faqs'
import {Adv} from '@/component/pages/DatabaseDevelopmentServices/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("database-development-services");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><HowGood />
            <CommonDivider /><OurComplete />
            <CommonDivider /><OurStepByStep />
            <CommonDivider /><TheDiffrence />
            <CommonDivider /><ExpertStrategies />
            <CommonDivider /><MeetTheExperts />
            <CommonDivider /><BusinessBenefiting />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;