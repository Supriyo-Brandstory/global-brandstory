import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/TiktokMarketing/Banner'
import {TheTiktokAdvantage} from '@/component/pages/TiktokMarketing/TheTiktokAdvantage'
import {PurposeDriven} from '@/component/pages/TiktokMarketing/PurposeDriven'
import {IndustryExpertise} from '@/component/pages/TiktokMarketing/IndustryExpertise'
import {BrandstorysTiktok} from '@/component/pages/TiktokMarketing/BrandstorysTiktok'
import {WhyChooseUs} from '@/component/pages/TiktokMarketing/WhyChooseUs'
import {IndustriesWeServe} from '@/component/pages/TiktokMarketing/IndustriesWeServe'
import {HowMuch} from '@/component/pages/TiktokMarketing/HowMuch'
import {Faq} from '@/component/pages/TiktokMarketing/Faq'
import {Adv} from '@/component/pages/TiktokMarketing/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("tiktok-marketing");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><TheTiktokAdvantage />
            <CommonDivider /><PurposeDriven />
            <CommonDivider /><IndustryExpertise />
            <CommonDivider /><BrandstorysTiktok />
            <CommonDivider /><WhyChooseUs />
            <CommonDivider /><IndustriesWeServe />
            <CommonDivider /><HowMuch />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;