import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ShopifyWebDevelopment/Banner'
import {TheImportance} from '@/component/pages/ShopifyWebDevelopment/TheImportance'
import {OurShopify} from '@/component/pages/ShopifyWebDevelopment/OurShopify'
import {OurDevelopment} from '@/component/pages/ShopifyWebDevelopment/OurDevelopment'
import {WhatMakes} from '@/component/pages/ShopifyWebDevelopment/WhatMakes'
import {OurTested} from '@/component/pages/ShopifyWebDevelopment/OurTested'
import {MeetTheExperts} from '@/component/pages/ShopifyWebDevelopment/MeetTheExperts'
import {HowStartups} from '@/component/pages/ShopifyWebDevelopment/HowStartups'
import {ClientStories} from '@/component/pages/ShopifyWebDevelopment/ClientStories'
import {Faq} from '@/component/pages/ShopifyWebDevelopment/Faq'
import {Adv} from '@/component/pages/ShopifyWebDevelopment/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><TheImportance />
            <CommonDivider /><OurShopify />
            <CommonDivider /><OurDevelopment />
            <CommonDivider /><WhatMakes />
            <CommonDivider /><OurTested />
            <CommonDivider /><MeetTheExperts />
            <CommonDivider /><HowStartups />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;