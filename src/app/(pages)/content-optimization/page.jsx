import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ContentOptimization/Banner'
import {OurApproach} from '@/component/pages/ContentOptimization/OurApproach'
import {WhyOptimized} from '@/component/pages/ContentOptimization/WhyOptimized'
import {HowWeMake} from '@/component/pages/ContentOptimization/HowWeMake'
import {ToolsThatMake} from '@/component/pages/ContentOptimization/ToolsThatMake'
import {RealSuccess} from '@/component/pages/ContentOptimization/RealSuccess'
import {TheValue} from '@/component/pages/ContentOptimization/TheValue'
import {OptimizedContent} from '@/component/pages/ContentOptimization/OptimizedContent'
import {Faq} from '@/component/pages/ContentOptimization/Faq'
import {Adv} from '@/component/pages/ContentOptimization/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><OurApproach />
            <CommonDivider /><WhyOptimized />
            <CommonDivider /><HowWeMake />
            <CommonDivider /><ToolsThatMake />
            <CommonDivider /><RealSuccess />
            <CommonDivider /><TheValue />
            <CommonDivider /><OptimizedContent />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;