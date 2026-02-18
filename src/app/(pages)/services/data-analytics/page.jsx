import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/DataAnalyticsServices/Banner'
import {WhyBusinessToday} from '@/component/pages/DataAnalyticsServices/WhyBusinessToday'
import {WhySoManyCompanies} from '@/component/pages/DataAnalyticsServices/WhySoManyCompanies'
import {HowOurData} from '@/component/pages/DataAnalyticsServices/HowOurData'
import {OurFullList} from '@/component/pages/DataAnalyticsServices/OurFullList'
import {OnDemandInsights} from '@/component/pages/DataAnalyticsServices/OnDemandInsights'
import {GoFromRaw} from '@/component/pages/DataAnalyticsServices/GoFromRaw'
import {AnalyticsThatFit} from '@/component/pages/DataAnalyticsServices/AnalyticsThatFit'
import {CloudReady} from '@/component/pages/DataAnalyticsServices/CloudReady'
import {WeHelpYou} from '@/component/pages/DataAnalyticsServices/WeHelpYou'
import {SafePrivate} from '@/component/pages/DataAnalyticsServices/SafePrivate'
import {MakeEveryTeam} from '@/component/pages/DataAnalyticsServices/MakeEveryTeam'
import {WhyBrandStoryStands} from '@/component/pages/DataAnalyticsServices/WhyBrandStoryStands'
import {RealInsights} from '@/component/pages/DataAnalyticsServices/RealInsights'
import {SuccessStories} from '@/component/pages/DataAnalyticsServices/SuccessStories'
import {Faq} from '@/component/pages/DataAnalyticsServices/Faq'
import {Adv} from '@/component/pages/DataAnalyticsServices/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("data-analytics-services");

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyBusinessToday />
            <CommonDivider /><WhySoManyCompanies />
            <CommonDivider /><HowOurData />
            <CommonDivider /><OurFullList />
            <CommonDivider /><OnDemandInsights />
            <CommonDivider /><GoFromRaw />
            <CommonDivider /><AnalyticsThatFit />
            <CommonDivider /><CloudReady />
            <CommonDivider /><WeHelpYou />
            <CommonDivider /><SafePrivate />
            <CommonDivider /><MakeEveryTeam />
            <CommonDivider /><WhyBrandStoryStands />
            <CommonDivider /><RealInsights />
            <CommonDivider /><SuccessStories />
            <CommonDivider /><Faq />
            <CommonDivider /><Adv />
        </>
    )
}
 
export default page;