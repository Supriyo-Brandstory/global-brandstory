import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/WordpressWebDevelopment/Banner'
import {TheImportance} from '@/component/pages/WordpressWebDevelopment/TheImportance'
import {ExploreOur} from '@/component/pages/WordpressWebDevelopment/ExploreOur'
import {OurStep} from '@/component/pages/WordpressWebDevelopment/OurStep'
import {WhyBusiness} from '@/component/pages/WordpressWebDevelopment/WhyBusiness'
import {TechnologyBacked} from '@/component/pages/WordpressWebDevelopment/TechnologyBacked'
import {DedicatedTeam} from '@/component/pages/WordpressWebDevelopment/DedicatedTeam'
import {TechStack} from '@/component/pages/WordpressWebDevelopment/TechStack'
import {CustomWordpress} from '@/component/pages/WordpressWebDevelopment/CustomWordpress'
import {Client} from '@/component/pages/WordpressWebDevelopment/Client'
import {Faqs} from '@/component/pages/WordpressWebDevelopment/Faqs'
import {Adv} from '@/component/pages/WordpressWebDevelopment/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("wordpress-web-development");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><TheImportance />
            <CommonDivider /><ExploreOur />
            <CommonDivider /><OurStep />
            <CommonDivider /><WhyBusiness />
            <CommonDivider /><TechnologyBacked />
            <CommonDivider /><DedicatedTeam />
            <CommonDivider /><TechStack />
            <CommonDivider /><CustomWordpress />
            <CommonDivider /><Client />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;