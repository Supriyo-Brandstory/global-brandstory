import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/WebDesignServices/Banner'
import {TheBusiness} from '@/component/pages/WebDesignServices/TheBusiness'
import {WebServices} from '@/component/pages/WebDesignServices/WebServices'
import {HowWePlan} from '@/component/pages/WebDesignServices/HowWePlan'
import {WhyOur} from '@/component/pages/WebDesignServices/WhyOur'
import {SmartStrategies} from '@/component/pages/WebDesignServices/SmartStrategies'
import {MeetTheMinds} from '@/component/pages/WebDesignServices/MeetTheMinds'
import {SupportingBusiness} from '@/component/pages/WebDesignServices/SupportingBusiness'
import {ClientStories} from '@/component/pages/WebDesignServices/ClientStories'
import {Faqs} from '@/component/pages/WebDesignServices/Faqs'
import {Adv} from '@/component/pages/WebDesignServices/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><TheBusiness />
            <CommonDivider /><WebServices />
            <CommonDivider /><HowWePlan />
            <CommonDivider /><WhyOur />
            <CommonDivider /><SmartStrategies />
            <CommonDivider /><MeetTheMinds />
            <CommonDivider /><SupportingBusiness />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;