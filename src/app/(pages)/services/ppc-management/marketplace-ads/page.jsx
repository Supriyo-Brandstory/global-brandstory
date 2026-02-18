import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/MarketplaceAdvertisement/Banner'
import {WhyMarketplace} from '@/component/pages/MarketplaceAdvertisement/WhyMarketplace'
import {PlatformsWeSpecilize} from '@/component/pages/MarketplaceAdvertisement/PlatformsWeSpecilize'
import {OurMarketplaceAd} from '@/component/pages/MarketplaceAdvertisement/OurMarketplaceAd'
import {OurMarketplacePpc} from '@/component/pages/MarketplaceAdvertisement/OurMarketplacePpc'
import {CreativeOptimization} from '@/component/pages/MarketplaceAdvertisement/CreativeOptimization'
import {MarketplaceListing} from '@/component/pages/MarketplaceAdvertisement/MarketplaceListing'
import {MarketplaceAdsByIndustry} from '@/component/pages/MarketplaceAdvertisement/MarketplaceAdsByIndustry'
import {MarketplaceAdReporting} from '@/component/pages/MarketplaceAdvertisement/MarketplaceAdReporting'
import {WhyBrandsChoose} from '@/component/pages/MarketplaceAdvertisement/WhyBrandsChoose'
import {FlexibleReddit} from '@/component/pages/MarketplaceAdvertisement/FlexibleReddit'
import {Faqs} from '@/component/pages/MarketplaceAdvertisement/Faqs'
import {Adv} from '@/component/pages/MarketplaceAdvertisement/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("marketplace-advertisement");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyMarketplace />
            <CommonDivider /><PlatformsWeSpecilize />
            <CommonDivider /><OurMarketplaceAd />
            <CommonDivider /><OurMarketplacePpc />
            <CommonDivider /><CreativeOptimization />
            <CommonDivider /><MarketplaceListing />
            <CommonDivider /><MarketplaceAdsByIndustry />
            <CommonDivider /><MarketplaceAdReporting />
            <CommonDivider /><WhyBrandsChoose />
            <CommonDivider /><FlexibleReddit />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;