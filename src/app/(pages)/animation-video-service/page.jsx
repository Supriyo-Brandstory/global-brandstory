import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/AnimationVideoService/Banner'
import {WhyAnimation} from '@/component/pages/AnimationVideoService/WhyAnimation'
import {HowOurAnimation} from '@/component/pages/AnimationVideoService/HowOurAnimation'
import {OurTeam} from '@/component/pages/AnimationVideoService/OurTeam'
import {Reasons} from '@/component/pages/AnimationVideoService/Reasons'
import {Methods} from '@/component/pages/AnimationVideoService/Methods'
import {ThePeople} from '@/component/pages/AnimationVideoService/ThePeople'
import {Tools} from '@/component/pages/AnimationVideoService/Tools'
import {Industries} from '@/component/pages/AnimationVideoService/Industries'
import {ClientStories} from '@/component/pages/AnimationVideoService/ClientStories'
import {Faqs} from '@/component/pages/AnimationVideoService/Faqs'
import {Adv} from '@/component/pages/AnimationVideoService/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyAnimation />
            <CommonDivider /><HowOurAnimation />
            <CommonDivider /><OurTeam />
            <CommonDivider /><Reasons />
            <CommonDivider /><Methods />
            <CommonDivider /><ThePeople />
            <CommonDivider /><Tools />
            <CommonDivider /><Industries />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;