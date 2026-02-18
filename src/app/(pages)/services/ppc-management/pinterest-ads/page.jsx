import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/PinterestAdvertising/Banner'
import {WhyPinterest} from '@/component/pages/PinterestAdvertising/WhyPinterest'
import {OurPinterest} from '@/component/pages/PinterestAdvertising/OurPinterest'
import {FullPinterest} from '@/component/pages/PinterestAdvertising/FullPinterest'
import {PinterestTargeting} from '@/component/pages/PinterestAdvertising/PinterestTargeting'
import {CreativeStudio} from '@/component/pages/PinterestAdvertising/CreativeStudio'
import {RealTime} from '@/component/pages/PinterestAdvertising/RealTime'
import {PinterestMarketing} from '@/component/pages/PinterestAdvertising/PinterestMarketing'
import {PinterestSeo} from '@/component/pages/PinterestAdvertising/PinterestSeo'
import {BsPinterest} from '@/component/pages/PinterestAdvertising/BsPinterest'
import {Adv} from '@/component/pages/PinterestAdvertising/Adv'
import {Faq} from '@/component/pages/PinterestAdvertising/Faq'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("pinterest-advertising");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyPinterest />
            <CommonDivider /><OurPinterest />
            <CommonDivider /><FullPinterest />
            <CommonDivider /><PinterestTargeting />
            <CommonDivider /><CreativeStudio />
            <CommonDivider /><RealTime />
            <CommonDivider /><PinterestMarketing />
            <CommonDivider /><PinterestSeo />
            <CommonDivider /><BsPinterest />
            <CommonDivider /><Adv />
            <CommonDivider /><Faq />
        </>
    )
}
 
export default page;