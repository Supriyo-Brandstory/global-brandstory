import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/LinkedinAdvertisement/Banner'
import {WhyLinkedin} from '@/component/pages/LinkedinAdvertisement/WhyLinkedin'
import {LinkedinCampaigns} from '@/component/pages/LinkedinAdvertisement/LinkedinCampaigns'
import {Strategy} from '@/component/pages/LinkedinAdvertisement/Strategy'
import {FromIdealCustomer} from '@/component/pages/LinkedinAdvertisement/FromIdealCustomer'
import {B2bSectors} from '@/component/pages/LinkedinAdvertisement/B2bSectors'
import {FlexibleLinkedin} from '@/component/pages/LinkedinAdvertisement/FlexibleLinkedin'
import {LinkedinAd} from '@/component/pages/LinkedinAdvertisement/LinkedinAd'
import {YourStrategies} from '@/component/pages/LinkedinAdvertisement/YourStrategies'
import {Adv} from '@/component/pages/LinkedinAdvertisement/Adv'
import {Faq} from '@/component/pages/LinkedinAdvertisement/Faq'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyLinkedin />
            <CommonDivider /><LinkedinCampaigns />
            <CommonDivider /><Strategy />
            <CommonDivider /><FromIdealCustomer />
            <CommonDivider /><B2bSectors />
            <CommonDivider /><FlexibleLinkedin />
            <CommonDivider /><LinkedinAd />
            <CommonDivider /><YourStrategies />
            <CommonDivider /><Adv />
            <CommonDivider /><Faq />
        </>
    )
}
 
export default page;