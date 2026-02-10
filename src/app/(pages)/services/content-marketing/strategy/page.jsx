import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ContentStrategy/Banner'
import {OurApproach} from '@/component/pages/ContentStrategy/OurApproach'
import {WhyYourBrand} from '@/component/pages/ContentStrategy/WhyYourBrand'
import {HowWeBuild} from '@/component/pages/ContentStrategy/HowWeBuild'
import {HowWeStructure} from '@/component/pages/ContentStrategy/HowWeStructure'
import {ProvenImpact} from '@/component/pages/ContentStrategy/ProvenImpact'
import {ExpertiseAcross} from '@/component/pages/ContentStrategy/ExpertiseAcross'
import {MeetOurExperts} from '@/component/pages/ContentStrategy/MeetOurExperts'
import {HowBs} from '@/component/pages/ContentStrategy/HowBs'
import {Faq} from '@/component/pages/ContentStrategy/Faq'
import {Adv} from '@/component/pages/ContentStrategy/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("content-strategy");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><OurApproach />
            <CommonDivider /><WhyYourBrand />
            <CommonDivider /><HowWeBuild />
            <CommonDivider /><HowWeStructure />
            <CommonDivider /><ProvenImpact />
            <CommonDivider /><ExpertiseAcross />
            <CommonDivider /><MeetOurExperts />
            <CommonDivider /><HowBs />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;