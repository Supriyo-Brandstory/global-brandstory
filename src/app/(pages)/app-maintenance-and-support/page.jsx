import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/AppMaintenanceAndSupport/Banner'
import {Application} from '@/component/pages/AppMaintenanceAndSupport/Application'
import {OurMaintenence} from '@/component/pages/AppMaintenanceAndSupport/OurMaintenence'
import {Transform} from '@/component/pages/AppMaintenanceAndSupport/Transform'
import {OurTechnology} from '@/component/pages/AppMaintenanceAndSupport/OurTechnology'
import {MaximizeBusiness} from '@/component/pages/AppMaintenanceAndSupport/MaximizeBusiness'
import {WhyBs} from '@/component/pages/AppMaintenanceAndSupport/WhyBs'
import {TheProcess} from '@/component/pages/AppMaintenanceAndSupport/TheProcess'
import {Faqs} from '@/component/pages/AppMaintenanceAndSupport/Faqs'
import {Adv} from '@/component/pages/AppMaintenanceAndSupport/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("app-maintenance-and-support");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><Application />
            <CommonDivider /><OurMaintenence />
            <CommonDivider /><Transform />
            <CommonDivider /><OurTechnology />
            <CommonDivider /><MaximizeBusiness />
            <CommonDivider /><WhyBs />
            <CommonDivider /><TheProcess />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;