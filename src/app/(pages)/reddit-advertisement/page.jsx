import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/RedditAdvertisement/Banner'
import {WhyReddit} from '@/component/pages/RedditAdvertisement/WhyReddit'
import {UnderstandingReddit} from '@/component/pages/RedditAdvertisement/UnderstandingReddit'
import {HowWeBuild} from '@/component/pages/RedditAdvertisement/HowWeBuild'
import {AdTypes} from '@/component/pages/RedditAdvertisement/AdTypes'
import {Discover} from '@/component/pages/RedditAdvertisement/Discover'
import {WhyBs} from '@/component/pages/RedditAdvertisement/WhyBs'
import {OurFull} from '@/component/pages/RedditAdvertisement/OurFull'
import {TheIndustries} from '@/component/pages/RedditAdvertisement/TheIndustries'
import {FlexibleReddit} from '@/component/pages/RedditAdvertisement/FlexibleReddit'
import {RealResults} from '@/component/pages/RedditAdvertisement/RealResults'
import {Faq} from '@/component/pages/RedditAdvertisement/Faq'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("reddit-advertisement");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider/><WhyReddit />
            <CommonDivider/><UnderstandingReddit />
            <CommonDivider/><HowWeBuild />
            <CommonDivider/><AdTypes />
            <CommonDivider/><Discover />
            <CommonDivider/><WhyBs />
            <CommonDivider/><OurFull />
            <CommonDivider/><TheIndustries />
            <CommonDivider/><FlexibleReddit />
            <CommonDivider/><RealResults />
            <CommonDivider/><Faq />
        </>
    )
}
 
export default page;