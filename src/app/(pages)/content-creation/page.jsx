import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ContentCreation/Banner'
import {HowWeBring} from '@/component/pages/ContentCreation/HowWeBring'
import {WhyContentCreation} from '@/component/pages/ContentCreation/WhyContentCreation'
import {OurContentCreation} from '@/component/pages/ContentCreation/OurContentCreation'
import {OurContent} from '@/component/pages/ContentCreation/OurContent'
import {TypesofContent} from '@/component/pages/ContentCreation/TypesofContent'
import {InduatryExperience} from '@/component/pages/ContentCreation/InduatryExperience'
import {HowWeEnsure} from '@/component/pages/ContentCreation/HowWeEnsure'
import {Portfolio} from '@/component/pages/ContentCreation/Portfolio'
import {ContentCreation} from '@/component/pages/ContentCreation/ContentCreation'
import {Faqs} from '@/component/pages/ContentCreation/Faqs'
import {Adv} from '@/component/pages/ContentCreation/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("content-creation");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><HowWeBring />
            <CommonDivider /><WhyContentCreation />
            <CommonDivider /><OurContentCreation />
            <CommonDivider /><OurContent />
            <CommonDivider /><TypesofContent />
            <CommonDivider /><InduatryExperience />
            <CommonDivider /><HowWeEnsure />
            <CommonDivider /><Portfolio />
            <CommonDivider /><ContentCreation />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;