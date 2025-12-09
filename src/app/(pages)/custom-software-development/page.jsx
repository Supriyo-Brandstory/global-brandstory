import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/CustomSoftwareDevelopment/Banner'
import {TheBsMethod} from '@/component/pages/CustomSoftwareDevelopment/TheBsMethod'
import {CustomSoftwareDevelopment} from '@/component/pages/CustomSoftwareDevelopment/CustomSoftwareDevelopment'
import {SystematicApproach} from '@/component/pages/CustomSoftwareDevelopment/SystematicApproach'
import {TheDiffrenceBs} from '@/component/pages/CustomSoftwareDevelopment/TheDiffrenceBs'
import {Actionable} from '@/component/pages/CustomSoftwareDevelopment/Actionable'
import {ThePeople} from '@/component/pages/CustomSoftwareDevelopment/ThePeople'
import {OurExpertise} from '@/component/pages/CustomSoftwareDevelopment/OurExpertise'
import {ClientStories} from '@/component/pages/CustomSoftwareDevelopment/ClientStories'
import {Faq} from '@/component/pages/CustomSoftwareDevelopment/Faq'
import {Adv} from '@/component/pages/CustomSoftwareDevelopment/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><TheBsMethod />
            <CommonDivider /><CustomSoftwareDevelopment />
            <CommonDivider /><SystematicApproach />
            <CommonDivider /><TheDiffrenceBs />
            <CommonDivider /><Actionable />
            <CommonDivider /><ThePeople />
            <CommonDivider /><OurExpertise />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;