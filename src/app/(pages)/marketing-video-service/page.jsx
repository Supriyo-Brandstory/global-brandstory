import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/MarketingVideoService/Banner'
import {HowMarketing} from '@/component/pages/MarketingVideoService/HowMarketing'
import {MarketingVideo} from '@/component/pages/MarketingVideoService/MarketingVideo'
import {OurStructured} from '@/component/pages/MarketingVideoService/OurStructured'
import {HowOur} from '@/component/pages/MarketingVideoService/HowOur'
import {Strategies} from '@/component/pages/MarketingVideoService/Strategies'
import {Experts} from '@/component/pages/MarketingVideoService/Experts'
import {HowOurProduction} from '@/component/pages/MarketingVideoService/HowOurProduction'
import {Industries} from '@/component/pages/MarketingVideoService/Industries'
import {ClientStories} from '@/component/pages/MarketingVideoService/ClientStories'
import {Faqs} from '@/component/pages/MarketingVideoService/Faqs'
import {Adv} from '@/component/pages/MarketingVideoService/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("marketing-video-service");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><HowMarketing />
            <CommonDivider /><MarketingVideo />
            <CommonDivider /><OurStructured />
            <CommonDivider /><HowOur />
            <CommonDivider /><Strategies />
            <CommonDivider /><Experts />
            <CommonDivider /><HowOurProduction />
            <CommonDivider /><Industries />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;