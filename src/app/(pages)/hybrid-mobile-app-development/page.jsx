import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/HybridMobileAppDevelopment/Banner'
import {RoleOfHybrid} from '@/component/pages/HybridMobileAppDevelopment/RoleOfHybrid'
import {Services} from '@/component/pages/HybridMobileAppDevelopment/Services'
import {StepByStep} from '@/component/pages/HybridMobileAppDevelopment/StepByStep'
import {HowOurTeam} from '@/component/pages/HybridMobileAppDevelopment/HowOurTeam'
import {HowOurStrategies} from '@/component/pages/HybridMobileAppDevelopment/HowOurStrategies'
import {Experts} from '@/component/pages/HybridMobileAppDevelopment/Experts'
import {Technology} from '@/component/pages/HybridMobileAppDevelopment/Technology'
import {HybridMobile} from '@/component/pages/HybridMobileAppDevelopment/HybridMobile'
import {ClientStories} from '@/component/pages/HybridMobileAppDevelopment/ClientStories'
import {Faqs} from '@/component/pages/HybridMobileAppDevelopment/Faqs'
import {Adv} from '@/component/pages/HybridMobileAppDevelopment/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><RoleOfHybrid />
            <CommonDivider /><Services />
            <CommonDivider /><StepByStep />
            <CommonDivider /><HowOurTeam />
            <CommonDivider /><HowOurStrategies />
            <CommonDivider /><Experts />
            <CommonDivider /><Technology />
            <CommonDivider /><HybridMobile />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;