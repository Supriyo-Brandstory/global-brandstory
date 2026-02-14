import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/InventoryAndMediaByuing/Banner'
import {WhatIsInventory} from '@/component/pages/InventoryAndMediaByuing/WhatIsInventory'
import {WhyMedia} from '@/component/pages/InventoryAndMediaByuing/WhyMedia'
import {OurMedia} from '@/component/pages/InventoryAndMediaByuing/OurMedia'
import {MediaBuying} from '@/component/pages/InventoryAndMediaByuing/MediaBuying'
import {OurInventory} from '@/component/pages/InventoryAndMediaByuing/OurInventory'
import {MediaByuing} from '@/component/pages/InventoryAndMediaByuing/MediaByuing'
import {IndustriesWeServe} from '@/component/pages/InventoryAndMediaByuing/IndustriesWeServe'
import {Pricing} from '@/component/pages/InventoryAndMediaByuing/Pricing'
import {WhyBs} from '@/component/pages/InventoryAndMediaByuing/WhyBs'
import {ClientCaseStudies} from '@/component/pages/InventoryAndMediaByuing/ClientCaseStudies'
import {Faq} from '@/component/pages/InventoryAndMediaByuing/Faq'
import {Adv} from '@/component/pages/InventoryAndMediaByuing/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("inventory-and-media-buying");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhatIsInventory />
            <CommonDivider /><WhyMedia />
            <CommonDivider /><OurMedia />
            <CommonDivider /><MediaBuying />
            <CommonDivider /><OurInventory />
            <CommonDivider /><MediaByuing />
            <CommonDivider /><IndustriesWeServe />
            <CommonDivider /><Pricing />
            <CommonDivider /><WhyBs />
            <CommonDivider /><ClientCaseStudies />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;