import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/VideoEditingServices/Banner'
import {WhyEvery} from '@/component/pages/VideoEditingServices/WhyEvery'
import {OurExpert} from '@/component/pages/VideoEditingServices/OurExpert'
import {TheProcess} from '@/component/pages/VideoEditingServices/TheProcess'
import {TrustedVideo} from '@/component/pages/VideoEditingServices/TrustedVideo'
import {Tactics} from '@/component/pages/VideoEditingServices/Tactics'
import {Experts} from '@/component/pages/VideoEditingServices/Experts'
import {TechSolutions} from '@/component/pages/VideoEditingServices/TechSolutions'
import {DeliveringVideo} from '@/component/pages/VideoEditingServices/DeliveringVideo'
import {Client} from '@/component/pages/VideoEditingServices/Client'
import {Faq} from '@/component/pages/VideoEditingServices/Faq'
import {Adv} from '@/component/pages/VideoEditingServices/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("video-editing-service");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyEvery />
            <CommonDivider /><OurExpert />
            <CommonDivider /><TheProcess />
            <CommonDivider /><TrustedVideo />
            <CommonDivider /><Tactics />
            <CommonDivider /><Experts />
            <CommonDivider /><TechSolutions />
            <CommonDivider /><DeliveringVideo />
            <CommonDivider /><Client />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;