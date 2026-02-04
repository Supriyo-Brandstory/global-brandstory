import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ContentDevelopment/Banner'
import {OurApproach} from '@/component/pages/ContentDevelopment/OurApproach'
import {WhyContentDevelopment} from '@/component/pages/ContentDevelopment/WhyContentDevelopment'
import {TheRoadmap} from '@/component/pages/ContentDevelopment/TheRoadmap'
import {TheAdvantage} from '@/component/pages/ContentDevelopment/TheAdvantage'
import {CaseStudies} from '@/component/pages/ContentDevelopment/CaseStudies'
import {CustomContent} from '@/component/pages/ContentDevelopment/CustomContent'
import {MeetOur} from '@/component/pages/ContentDevelopment/MeetOur'
import {Faq} from '@/component/pages/ContentDevelopment/Faq'
import {Adv} from '@/component/pages/ContentDevelopment/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("content-development");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><OurApproach />
            <CommonDivider /><WhyContentDevelopment />
            <CommonDivider /><TheRoadmap />
            <CommonDivider /><TheAdvantage />
            <CommonDivider /><CaseStudies />
            <CommonDivider /><CustomContent />
            <CommonDivider /><MeetOur />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;