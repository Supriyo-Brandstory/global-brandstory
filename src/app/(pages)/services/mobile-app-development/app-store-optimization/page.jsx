import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/AppStoreOptimization/Banner'
import {WhyAppStore} from '@/component/pages/AppStoreOptimization/WhyAppStore'
import {OurAso} from '@/component/pages/AppStoreOptimization/OurAso'
import {WhyChoose} from '@/component/pages/AppStoreOptimization/WhyChoose'
import {OurMethodology} from '@/component/pages/AppStoreOptimization/OurMethodology'
import {Strategies} from '@/component/pages/AppStoreOptimization/Strategies'
import {ToolsTech} from '@/component/pages/AppStoreOptimization/ToolsTech'
import {IndustriesWeServe} from '@/component/pages/AppStoreOptimization/IndustriesWeServe'
import {ClientStories} from '@/component/pages/AppStoreOptimization/ClientStories'
import {Faq} from '@/component/pages/AppStoreOptimization/Faq'
import {Adv} from '@/component/pages/AppStoreOptimization/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("app-store-optimization");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyAppStore />
            <CommonDivider /><OurAso />
            <CommonDivider /><WhyChoose />
            <CommonDivider /><OurMethodology />
            <CommonDivider /><Strategies />
            <CommonDivider /><ToolsTech />
            <CommonDivider /><IndustriesWeServe />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;