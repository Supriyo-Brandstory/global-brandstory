import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/AndroidAppDevelopment/Banner'
import {WhyInvesting} from '@/component/pages/AndroidAppDevelopment/WhyInvesting'
import {HowOur} from '@/component/pages/AndroidAppDevelopment/HowOur'
import {HowWePlan} from '@/component/pages/AndroidAppDevelopment/HowWePlan'
import {Reasons} from '@/component/pages/AndroidAppDevelopment/Reasons'
import {AndroidApp} from '@/component/pages/AndroidAppDevelopment/AndroidApp'
import {MeetTheExperts} from '@/component/pages/AndroidAppDevelopment/MeetTheExperts'
import {Tools} from '@/component/pages/AndroidAppDevelopment/Tools'
import {HowOurAndroid} from '@/component/pages/AndroidAppDevelopment/HowOurAndroid'
import {ClientStories} from '@/component/pages/AndroidAppDevelopment/ClientStories'
import {Faq} from '@/component/pages/AndroidAppDevelopment/Faq'
import {Adv} from '@/component/pages/AndroidAppDevelopment/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("android-app-development");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyInvesting />
            <CommonDivider /><HowOur />
            <CommonDivider /><HowWePlan />
            <CommonDivider /><Reasons />
            <CommonDivider /><AndroidApp />
            <CommonDivider /><MeetTheExperts />
            <CommonDivider /><Tools />
            <CommonDivider /><HowOurAndroid />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;