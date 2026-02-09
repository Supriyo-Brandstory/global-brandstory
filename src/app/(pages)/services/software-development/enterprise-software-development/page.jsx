import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/EnterpriseSoftwareDevelopment/Banner'
import {OurRole} from '@/component/pages/EnterpriseSoftwareDevelopment/OurRole'
import {EnterpriseSoftware} from '@/component/pages/EnterpriseSoftwareDevelopment/EnterpriseSoftware'
import {OurStructure} from '@/component/pages/EnterpriseSoftwareDevelopment/OurStructure'
import {Expertise} from '@/component/pages/EnterpriseSoftwareDevelopment/Expertise'
import {Actionable} from '@/component/pages/EnterpriseSoftwareDevelopment/Actionable'
import {IndustriesBenefeting} from '@/component/pages/EnterpriseSoftwareDevelopment/IndustriesBenefeting'
import {ClientStories} from '@/component/pages/EnterpriseSoftwareDevelopment/ClientStories'
import {Faqs} from '@/component/pages/EnterpriseSoftwareDevelopment/Faqs'
import {Adv} from '@/component/pages/EnterpriseSoftwareDevelopment/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("enterprise-software-development");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><OurRole />
            <CommonDivider /><EnterpriseSoftware />
            <CommonDivider /><OurStructure />
            <CommonDivider /><Expertise />
            <CommonDivider /><Actionable />
            <CommonDivider /><IndustriesBenefeting />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;