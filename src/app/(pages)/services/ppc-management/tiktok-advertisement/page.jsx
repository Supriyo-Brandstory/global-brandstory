import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/TiktokAdvertisement/Banner'
import {BreakingTheRules} from '@/component/pages/TiktokAdvertisement/BreakingTheRules'
import {YourTiktok} from '@/component/pages/TiktokAdvertisement/YourTiktok'
import {VisualStorytelling} from '@/component/pages/TiktokAdvertisement/VisualStorytelling'
import {InnovativeStrategies} from '@/component/pages/TiktokAdvertisement/InnovativeStrategies'
import {SuccessStories} from '@/component/pages/TiktokAdvertisement/SuccessStories'
import {WhyTiktok} from '@/component/pages/TiktokAdvertisement/WhyTiktok'
import {HowDiffrent} from '@/component/pages/TiktokAdvertisement/HowDiffrent'
import {ProvenTiktokAds} from '@/component/pages/TiktokAdvertisement/ProvenTiktokAds'
import {WhyBs} from '@/component/pages/TiktokAdvertisement/WhyBs'
import {Seamless} from '@/component/pages/TiktokAdvertisement/Seamless'
import {TiktokAdvertising} from '@/component/pages/TiktokAdvertisement/TiktokAdvertising'
import {ClientTestimonials} from '@/component/pages/TiktokAdvertisement/ClientTestimonials'
import {Adv} from '@/component/pages/TiktokAdvertisement/Adv'
import {Faq} from '@/component/pages/TiktokAdvertisement/Faq'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("tiktok-advertisement");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><BreakingTheRules />
            <CommonDivider /><YourTiktok />
            <CommonDivider /><VisualStorytelling />
            <CommonDivider /><InnovativeStrategies />
            <CommonDivider /><SuccessStories />
            <CommonDivider /><WhyTiktok />
            <CommonDivider /><HowDiffrent />
            <CommonDivider /><ProvenTiktokAds />
            <CommonDivider /><WhyBs />
            <CommonDivider /><Seamless />
            <CommonDivider /><TiktokAdvertising />
            <CommonDivider /><ClientTestimonials />
            <CommonDivider /><Adv />
            <CommonDivider /><Faq />
        </>
    )
}
 
export default page;