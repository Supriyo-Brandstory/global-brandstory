import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/PerformanceMarketing/Banner'
import {WhyPerformanceMarketing} from '@/component/pages/PerformanceMarketing/WhyPerformanceMarketing'
import {HowBsDelivers} from '@/component/pages/PerformanceMarketing/HowBsDelivers'
import {OurFullSite} from '@/component/pages/PerformanceMarketing/OurFullSite'
import {TheDifference} from '@/component/pages/PerformanceMarketing/TheDifference'
import {Platforms} from '@/component/pages/PerformanceMarketing/Platforms'
import {IndustrySpecefic} from '@/component/pages/PerformanceMarketing/IndustrySpecefic'
import {WhyChooseBs} from '@/component/pages/PerformanceMarketing/WhyChooseBs'
import {SuccessStories} from '@/component/pages/PerformanceMarketing/SuccessStories'
import {Adv} from '@/component/pages/PerformanceMarketing/Adv'
import {Faqs} from '@/component/pages/PerformanceMarketing/Faqs'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyPerformanceMarketing />
            <CommonDivider /><HowBsDelivers />
            <CommonDivider /><OurFullSite />
            <CommonDivider /><TheDifference />
            <CommonDivider /><Platforms />
            <CommonDivider /><IndustrySpecefic />
            <CommonDivider /><WhyChooseBs />
            <CommonDivider /><SuccessStories />
            <CommonDivider /><Adv />
            <CommonDivider /><Faqs />
        </>
    )
}
 
export default page;