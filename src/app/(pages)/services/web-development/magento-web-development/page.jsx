import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/MagentoWebDevelopment/Banner'
import {WhyMagento} from '@/component/pages/MagentoWebDevelopment/WhyMagento'
import {MagentoServices} from '@/component/pages/MagentoWebDevelopment/MagentoServices'
import {KeyStages} from '@/component/pages/MagentoWebDevelopment/KeyStages'
import {KeyAdvantages} from '@/component/pages/MagentoWebDevelopment/KeyAdvantages'
import {ProvenStrategies} from '@/component/pages/MagentoWebDevelopment/ProvenStrategies'
import {TechnicalExperts} from '@/component/pages/MagentoWebDevelopment/TechnicalExperts'
import {Platforms} from '@/component/pages/MagentoWebDevelopment/Platforms'
import {MagentoWeb} from '@/component/pages/MagentoWebDevelopment/MagentoWeb'
import {ClientStories} from '@/component/pages/MagentoWebDevelopment/ClientStories'
import {Faq} from '@/component/pages/MagentoWebDevelopment/Faq'
import {Adv} from '@/component/pages/MagentoWebDevelopment/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("magento-web-development");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyMagento />
            <CommonDivider /><MagentoServices />
            <CommonDivider /><KeyStages />
            <CommonDivider /><KeyAdvantages />
            <CommonDivider /><ProvenStrategies />
            <CommonDivider /><TechnicalExperts />
            <CommonDivider /><Platforms />
            <CommonDivider /><MagentoWeb />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;