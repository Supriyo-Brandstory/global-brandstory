import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/CrossPlatformAppDevelopment/Banner'
import {WhyCrossPlatform} from '@/component/pages/CrossPlatformAppDevelopment/WhyCrossPlatform'
import {OurServices} from '@/component/pages/CrossPlatformAppDevelopment/OurServices'
import {HowWeDeliver} from '@/component/pages/CrossPlatformAppDevelopment/HowWeDeliver'
import {HowOurTeam} from '@/component/pages/CrossPlatformAppDevelopment/HowOurTeam'
import {HowOurStrategies} from '@/component/pages/CrossPlatformAppDevelopment/HowOurStrategies'
import {ThePeopleBehind} from '@/component/pages/CrossPlatformAppDevelopment/ThePeopleBehind'
import {ToolsAndPlatforms} from '@/component/pages/CrossPlatformAppDevelopment/ToolsAndPlatforms'
import {ServingBusiness} from '@/component/pages/CrossPlatformAppDevelopment/ServingBusiness'
import {ClientStories} from '@/component/pages/CrossPlatformAppDevelopment/ClientStories'
import {Faqs} from '@/component/pages/CrossPlatformAppDevelopment/Faqs'
import {Adv} from '@/component/pages/CrossPlatformAppDevelopment/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyCrossPlatform />
            <CommonDivider /><OurServices />
            <CommonDivider /><HowWeDeliver />
            <CommonDivider /><HowOurTeam />
            <CommonDivider /><HowOurStrategies />
            <CommonDivider /><ThePeopleBehind />
            <CommonDivider /><ToolsAndPlatforms />
            <CommonDivider /><ServingBusiness />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;