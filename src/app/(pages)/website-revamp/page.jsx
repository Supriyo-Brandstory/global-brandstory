import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/WebsiteRevamp/Banner'
import {WhyInvesting} from '@/component/pages/WebsiteRevamp/WhyInvesting'
import {HowOur} from '@/component/pages/WebsiteRevamp/HowOur'
import {HowOur2} from '@/component/pages/WebsiteRevamp/HowOur2'
import {Advantages} from '@/component/pages/WebsiteRevamp/Advantages'
import {Strategic} from '@/component/pages/WebsiteRevamp/Strategic'
import {MeetTheExperts} from '@/component/pages/WebsiteRevamp/MeetTheExperts'
import {ToolsAndTech} from '@/component/pages/WebsiteRevamp/ToolsAndTech'
import {Industries} from '@/component/pages/WebsiteRevamp/Industries'
import {ClientStories} from '@/component/pages/WebsiteRevamp/ClientStories'
import {Faqs} from '@/component/pages/WebsiteRevamp/Faqs'
import {Adv} from '@/component/pages/WebsiteRevamp/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyInvesting />
            <CommonDivider /><HowOur />
            <CommonDivider /><HowOur2 />
            <CommonDivider /><Advantages />
            <CommonDivider /><Strategic />
            <CommonDivider /><MeetTheExperts />
            <CommonDivider /><ToolsAndTech />
            <CommonDivider /><Industries />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;