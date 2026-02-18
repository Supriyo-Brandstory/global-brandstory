import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/CaseStudy/Banner';
import { BusinessChallange } from '@/component/pages/CaseStudy/BusinessChallange';
import { Images } from '@/component/pages/CaseStudy/Images';

const page= ()=>{
    return(
        <>
            <Banner /><CommonDivider />
            <BusinessChallange /><CommonDivider />
            <Images />
        </>
    )
}

export default page;