import CommonDivider from '@/component/pages/common/CommonDivider'
import {Banner} from '@/component/pages/GoogleAdsManagement/Banner'
import {WhyBrands} from '@/component/pages/GoogleAdsManagement/WhyBrands'
import {GoogleAdsService} from '@/component/pages/GoogleAdsManagement/GoogleAdsService'
import {GoogleAdsExpertise} from '@/component/pages/GoogleAdsManagement/GoogleAdsExpertise'
import {InsideOurGoogle} from '@/component/pages/GoogleAdsManagement/InsideOurGoogle'
import {AdCopy} from '@/component/pages/GoogleAdsManagement/AdCopy'
import {OptimizingAd} from '@/component/pages/GoogleAdsManagement/OptimizingAd'
import {WhyChooseBs} from '@/component/pages/GoogleAdsManagement/WhyChooseBs'
import {ClientSuccessStories} from '@/component/pages/GoogleAdsManagement/ClientSuccessStories'
import {Adv} from '@/component/pages/GoogleAdsManagement/Adv'
import {Faq} from '@/component/pages/GoogleAdsManagement/Faq'

const page = () =>{
    return(
        <>
            <Banner />
            <CommonDivider /><WhyBrands />
            <CommonDivider /><GoogleAdsService />
            <CommonDivider /><GoogleAdsExpertise />
            <CommonDivider /><InsideOurGoogle />
            <CommonDivider /><AdCopy />
            <CommonDivider /><OptimizingAd />
            <CommonDivider /><WhyChooseBs />
            <CommonDivider /><ClientSuccessStories />
            <CommonDivider /><Adv />
            <CommonDivider /><Faq />
        </>
    )
}
 
export default page;