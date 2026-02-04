import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/SocialMediaManagement/Banner'
import {HowModern} from '@/component/pages/SocialMediaManagement/HowModern'
import {WhyItMatters} from '@/component/pages/SocialMediaManagement/WhyItMatters'
import {HowBrandstory} from '@/component/pages/SocialMediaManagement/HowBrandstory'
import {FindThePlan} from '@/component/pages/SocialMediaManagement/FindThePlan'
import {ContentThatCaptures} from '@/component/pages/SocialMediaManagement/ContentThatCaptures'
import {AmplifyReach} from '@/component/pages/SocialMediaManagement/AmplifyReach'
import {B2bSocialMedia} from '@/component/pages/SocialMediaManagement/B2bSocialMedia'
import {IndustriesWeHave} from '@/component/pages/SocialMediaManagement/IndustriesWeHave'
import {Adv} from '@/component/pages/SocialMediaManagement/Adv'
import {Faq} from '@/component/pages/SocialMediaManagement/Faq'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("social-media-management");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><HowModern />
            <CommonDivider /><WhyItMatters />
            <CommonDivider /><HowBrandstory />
            <CommonDivider /><FindThePlan />
            <CommonDivider /><ContentThatCaptures />
            <CommonDivider /><AmplifyReach />
            <CommonDivider /><B2bSocialMedia />
            <CommonDivider /><IndustriesWeHave />
            <CommonDivider /><Adv />
            <CommonDivider /><Faq />
        </>
    )
}
 
export default page;