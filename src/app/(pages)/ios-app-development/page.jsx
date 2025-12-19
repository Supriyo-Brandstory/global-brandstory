import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/IosAppDevelopment/Banner'
import {WhyIos} from '@/component/pages/IosAppDevelopment/WhyIos'
import {IosAppDev} from '@/component/pages/IosAppDevelopment/IosAppDev'
import {KeyAdvantages} from '@/component/pages/IosAppDevelopment/KeyAdvantages'
import {ProvenStrategies} from '@/component/pages/IosAppDevelopment/ProvenStrategies'
import {TexhnicalSpecialist} from '@/component/pages/IosAppDevelopment/TexhnicalSpecialist'
import {Tools} from '@/component/pages/IosAppDevelopment/Tools'
import {IndustriesBenifiting} from '@/component/pages/IosAppDevelopment/IndustriesBenifiting'
import {ClientStories} from '@/component/pages/IosAppDevelopment/ClientStories'
import {Faqs} from '@/component/pages/IosAppDevelopment/Faqs'
import {Adv} from '@/component/pages/IosAppDevelopment/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyIos />
            <CommonDivider /><IosAppDev />
            <CommonDivider /><KeyAdvantages />
            <CommonDivider /><ProvenStrategies />
            <CommonDivider /><TexhnicalSpecialist />
            <CommonDivider /><Tools />
            <CommonDivider /><IndustriesBenifiting />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faqs />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;