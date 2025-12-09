import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/SoftwareMaintenanceAndSupport/Banner'
import {EnsuringYour} from '@/component/pages/SoftwareMaintenanceAndSupport/EnsuringYour'
import {SecureAndSclable} from '@/component/pages/SoftwareMaintenanceAndSupport/SecureAndSclable'
import {FrameworkDesigned} from '@/component/pages/SoftwareMaintenanceAndSupport/FrameworkDesigned'
import {Bs} from '@/component/pages/SoftwareMaintenanceAndSupport/Bs'
import {StrategiesFor} from '@/component/pages/SoftwareMaintenanceAndSupport/StrategiesFor'
import {ExpertsBehind} from '@/component/pages/SoftwareMaintenanceAndSupport/ExpertsBehind'
import {WhoWeEmpower} from '@/component/pages/SoftwareMaintenanceAndSupport/WhoWeEmpower'
import {ClientStories} from '@/component/pages/SoftwareMaintenanceAndSupport/ClientStories'
import {Faq} from '@/component/pages/SoftwareMaintenanceAndSupport/Faq'
import {Adv} from '@/component/pages/SoftwareMaintenanceAndSupport/Adv'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><EnsuringYour />
            <CommonDivider /><SecureAndSclable />
            <CommonDivider /><FrameworkDesigned />
            <CommonDivider /><Bs />
            <CommonDivider /><StrategiesFor />
            <CommonDivider /><ExpertsBehind />
            <CommonDivider /><WhoWeEmpower />
            <CommonDivider /><ClientStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;