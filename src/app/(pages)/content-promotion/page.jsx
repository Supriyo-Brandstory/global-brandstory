import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ContentPromotion/Banner'
import {UnlockNew} from '@/component/pages/ContentPromotion/UnlockNew'
import {MakeYourContent} from '@/component/pages/ContentPromotion/MakeYourContent'
import {Astrategy} from '@/component/pages/ContentPromotion/Astrategy'
import {ReachTheRight} from '@/component/pages/ContentPromotion/ReachTheRight'
import {RealStories} from '@/component/pages/ContentPromotion/RealStories'
import {ToolsThatMake} from '@/component/pages/ContentPromotion/ToolsThatMake'
import {TailoredStrategies} from '@/component/pages/ContentPromotion/TailoredStrategies'
import {WhyChoose} from '@/component/pages/ContentPromotion/WhyChoose'
import {Faq} from '@/component/pages/ContentPromotion/Faq'
import {Adv} from '@/component/pages/ContentPromotion/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><UnlockNew />
            <CommonDivider /><MakeYourContent />
            <CommonDivider /><Astrategy />
            <CommonDivider /><ReachTheRight />
            <CommonDivider /><RealStories />
            <CommonDivider /><ToolsThatMake />
            <CommonDivider /><TailoredStrategies />
            <CommonDivider /><WhyChoose />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;