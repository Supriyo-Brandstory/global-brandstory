import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/FrontEndDevelopment/Banner'
import {RoleOf} from '@/component/pages/FrontEndDevelopment/RoleOf'
import {OurEnd} from '@/component/pages/FrontEndDevelopment/OurEnd'
import {Reasons} from '@/component/pages/FrontEndDevelopment/Reasons'
import {HowWeApproach} from '@/component/pages/FrontEndDevelopment/HowWeApproach'
import {HowWeOptimize} from '@/component/pages/FrontEndDevelopment/HowWeOptimize'
import {SkilledProfessional} from '@/component/pages/FrontEndDevelopment/SkilledProfessional'
import {Tools} from '@/component/pages/FrontEndDevelopment/Tools'
import {Industries} from '@/component/pages/FrontEndDevelopment/Industries'
import {ClientSuccess} from '@/component/pages/FrontEndDevelopment/ClientSuccess'
import {Faqs} from '@/component/pages/FrontEndDevelopment/Faqs'
import {Adv} from '@/component/pages/FrontEndDevelopment/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><RoleOf />
            <CommonDivider /><OurEnd />
            <CommonDivider /><Reasons />
            <CommonDivider /><HowWeApproach />
            <CommonDivider /><HowWeOptimize />
            <CommonDivider /><SkilledProfessional />
            <CommonDivider /><Tools />
            <CommonDivider /><Industries />
            <CommonDivider /><ClientSuccess />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;