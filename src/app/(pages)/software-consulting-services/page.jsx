import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/SoftwareConsultingServices/Banner'
import {WhyStrategic} from '@/component/pages/SoftwareConsultingServices/WhyStrategic'
import {ExpertSoftware} from '@/component/pages/SoftwareConsultingServices/ExpertSoftware'
import {HowWeDeliver} from '@/component/pages/SoftwareConsultingServices/HowWeDeliver'
import {TheAdvantage} from '@/component/pages/SoftwareConsultingServices/TheAdvantage'
import {StrategiesThatAcclerate} from '@/component/pages/SoftwareConsultingServices/StrategiesThatAcclerate'
import {ThePeople} from '@/component/pages/SoftwareConsultingServices/ThePeople'
import {IndustriesBenifiting} from '@/component/pages/SoftwareConsultingServices/IndustriesBenifiting'
import {ClientStories} from '@/component/pages/SoftwareConsultingServices/ClientStories'
import {Faq} from '@/component/pages/SoftwareConsultingServices/Faq'
import {Adv} from '@/component/pages/SoftwareConsultingServices/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyStrategic />
            <CommonDivider /><ExpertSoftware />
            <CommonDivider /><HowWeDeliver />
            <CommonDivider /><TheAdvantage />
            <CommonDivider /><StrategiesThatAcclerate />
            <CommonDivider /><ThePeople />
            <CommonDivider /><IndustriesBenifiting />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;