import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/ProgrammaticAdvertisement/Banner'
import {WhatIsProgrametic} from '@/component/pages/ProgrammaticAdvertisement/WhatIsProgrametic'
import {OurFullFunnel} from '@/component/pages/ProgrammaticAdvertisement/OurFullFunnel'
import {AdvancedAudience} from '@/component/pages/ProgrammaticAdvertisement/AdvancedAudience'
import {Omnichannel} from '@/component/pages/ProgrammaticAdvertisement/Omnichannel'
import {RealTimeOptimization} from '@/component/pages/ProgrammaticAdvertisement/RealTimeOptimization'
import {Programetic} from '@/component/pages/ProgrammaticAdvertisement/Programetic'
import {IndustriesWeServe} from '@/component/pages/ProgrammaticAdvertisement/IndustriesWeServe'
import {OurProgrametic} from '@/component/pages/ProgrammaticAdvertisement/OurProgrametic'
import {WhyChooseBs} from '@/component/pages/ProgrammaticAdvertisement/WhyChooseBs'
import {Faq} from '@/component/pages/ProgrammaticAdvertisement/Faq'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhatIsProgrametic />
            <CommonDivider /><OurFullFunnel />
            <CommonDivider /><AdvancedAudience />
            <CommonDivider /><Omnichannel />
            <CommonDivider /><RealTimeOptimization />
            <CommonDivider /><Programetic />
            <CommonDivider /><IndustriesWeServe />
            <CommonDivider /><OurProgrametic />
            <CommonDivider /><WhyChooseBs />
            <CommonDivider /><Faq />
        </>
    )
}
 
export default page;