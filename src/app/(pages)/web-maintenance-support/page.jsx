import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/WebMaintenenceSupport/Banner'
import {TheCritical} from '@/component/pages/WebMaintenenceSupport/TheCritical'
import {WebMaintenence} from '@/component/pages/WebMaintenenceSupport/WebMaintenence'
import {Step} from '@/component/pages/WebMaintenenceSupport/Step'
import {TheUnique} from '@/component/pages/WebMaintenenceSupport/TheUnique'
import {OurMethodical} from '@/component/pages/WebMaintenenceSupport/OurMethodical'
import {CollaborativeExperts} from '@/component/pages/WebMaintenenceSupport/CollaborativeExperts'
import {WhyChoose} from '@/component/pages/WebMaintenenceSupport/WhyChoose'
import {ServingDiverse} from '@/component/pages/WebMaintenenceSupport/ServingDiverse'
import {ClientStories} from '@/component/pages/WebMaintenenceSupport/ClientStories'
import {Faqs} from '@/component/pages/WebMaintenenceSupport/Faqs'
import {Adv} from '@/component/pages/WebMaintenenceSupport/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><TheCritical />
            <CommonDivider /><WebMaintenence />
            <CommonDivider /><Step />
            <CommonDivider /><TheUnique />
            <CommonDivider /><OurMethodical />
            <CommonDivider /><CollaborativeExperts />
            <CommonDivider /><WhyChoose />
            <CommonDivider /><ServingDiverse />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;