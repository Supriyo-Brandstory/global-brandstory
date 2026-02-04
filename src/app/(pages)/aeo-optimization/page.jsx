import CommonDivider from '@/component/pages/common/CommonDivider'
import { Banner } from '@/component/pages/Aeo/Banner'
import { WhatAnswer } from '@/component/pages/Aeo/WhatAnswer'
import { WhatAeoMatters } from '@/component/pages/Aeo/WhatAeoMatters'
import { OurAeoServices } from '@/component/pages/Aeo/OurAeoServices'
import { HowWeFutureProof } from '@/component/pages/Aeo/HowWeFutureProof'
import { Our5Step } from '@/component/pages/Aeo/Our5Step'
import { AeoTools } from '@/component/pages/Aeo/AeoTools'
import { SuccessStories } from '@/component/pages/Aeo/SuccessStories'
import { WhyBrandsChoose } from '@/component/pages/Aeo/WhyBrandsChoose'
import { Faq } from '@/component/pages/Aeo/Faq'
import { Adv } from '@/component/pages/Aeo/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("aeo-optimization");

const page = () => {
  return (
    <>
        <Banner />
        <CommonDivider /><WhatAnswer />
        <CommonDivider /><WhatAeoMatters />
        <CommonDivider /><OurAeoServices />
        <CommonDivider /><HowWeFutureProof />
        <CommonDivider /><Our5Step />
        <CommonDivider /><AeoTools />
        <CommonDivider /><SuccessStories />
        <CommonDivider /><WhyBrandsChoose />
        <CommonDivider /><Faq />
        <CommonDivider /><Adv />
    </>
  )
}

export default page