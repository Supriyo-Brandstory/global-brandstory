import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/BackEndDevelopment/Banner'
import {WhyBackend} from '@/component/pages/BackEndDevelopment/WhyBackend'
import {OurProfessional} from '@/component/pages/BackEndDevelopment/OurProfessional'
import {Gliding} from '@/component/pages/BackEndDevelopment/Gliding'
import {Reasons} from '@/component/pages/BackEndDevelopment/Reasons'
import {HowWeOptimize} from '@/component/pages/BackEndDevelopment/HowWeOptimize'
import {ProfessionalGuiding} from '@/component/pages/BackEndDevelopment/ProfessionalGuiding'
import {Platforms} from '@/component/pages/BackEndDevelopment/Platforms'
import {Delivering} from '@/component/pages/BackEndDevelopment/Delivering'
import {ClientStories} from '@/component/pages/BackEndDevelopment/ClientStories'
import {Faqs} from '@/component/pages/BackEndDevelopment/Faqs'
import {Adv} from '@/component/pages/BackEndDevelopment/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyBackend />
            <CommonDivider /><OurProfessional />
            <CommonDivider /><Gliding />
            <CommonDivider /><Reasons />
            <CommonDivider /><HowWeOptimize />
            <CommonDivider /><ProfessionalGuiding />
            <CommonDivider /><Platforms />
            <CommonDivider /><Delivering />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;