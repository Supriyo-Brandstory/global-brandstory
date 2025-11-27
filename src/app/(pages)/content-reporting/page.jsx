import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ContentReporting/Banner'
import {WhyContentReporting} from '@/component/pages/ContentReporting/WhyContentReporting'
import {TheRole} from '@/component/pages/ContentReporting/TheRole'
import {HowWeApproach} from '@/component/pages/ContentReporting/HowWeApproach'
import {SelectingTheRight} from '@/component/pages/ContentReporting/SelectingTheRight'
import {WhyChooseOur} from '@/component/pages/ContentReporting/WhyChooseOur'
import {ExampleOf} from '@/component/pages/ContentReporting/ExampleOf'
import {Faq} from '@/component/pages/ContentReporting/Faq'
import {Adv} from '@/component/pages/ContentReporting/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyContentReporting />
            <CommonDivider /><TheRole />
            <CommonDivider /><HowWeApproach />
            <CommonDivider /><SelectingTheRight />
            <CommonDivider /><WhyChooseOur />
            <CommonDivider /><ExampleOf />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;