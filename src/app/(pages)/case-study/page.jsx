import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/CaseStudy/Banner';
import { BusinessChallange } from '@/component/pages/CaseStudy/BusinessChallange';
import { Images } from '@/component/pages/CaseStudy/Images';
import { Objectives } from '@/component/pages/CaseStudy/Objectives';
import { StrategicApproach } from '@/component/pages/CaseStudy/StrategicApproach';
import { Implementaion } from '@/component/pages/CaseStudy/Implementaion';
import { Challanges } from '@/component/pages/CaseStudy/Challanges';
import { Results } from '@/component/pages/CaseStudy/Results';
import { WhyThisWorked } from '@/component/pages/CaseStudy/WhyThisWorked';

const page= ()=>{
    return(
        <>
            <Banner /><CommonDivider />
            <BusinessChallange /><CommonDivider />
            <Images /><CommonDivider />
            <Objectives /><CommonDivider />
            <StrategicApproach /><CommonDivider />
            <Implementaion /><CommonDivider />
            <Challanges /><CommonDivider />
            <Results /><CommonDivider />
            <WhyThisWorked />
        </>
    )
}

export default page;