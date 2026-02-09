import CommonDivider from '@/component/pages/common/CommonDivider'
import { Banner } from '@/component/pages/PintrestMarketing/Banner'
import { WhatIsPintrest } from '@/component/pages/PintrestMarketing/WhatIsPintrest'
import { PintrestMarketingPricing } from '@/component/pages/PintrestMarketing/PintrestMarketingPricing'
import { SmarterPintrest } from '@/component/pages/PintrestMarketing/SmarterPintrest'
import { IntegratedOrganic } from '@/component/pages/PintrestMarketing/IntegratedOrganic'
import { Optimize } from '@/component/pages/PintrestMarketing/Optimize'
import { PintrestForEveryIndustry } from '@/component/pages/PintrestMarketing/PintrestForEveryIndustry'
import { PintrestAnalytics } from '@/component/pages/PintrestMarketing/PintrestAnalytics'
import { WhyChooseBs } from '@/component/pages/PintrestMarketing/WhyChooseBs'
import { Faq } from '@/component/pages/PintrestMarketing/Faq'
import { Adv } from '@/component/pages/PintrestMarketing/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("pintrest-marketing");

const page = () => {
  return (
    <>
      <Banner />
      <CommonDivider /><WhatIsPintrest />
      <CommonDivider /><PintrestMarketingPricing />
      <CommonDivider /><SmarterPintrest />
      <CommonDivider /><IntegratedOrganic />
      <CommonDivider /><Optimize/>
      <CommonDivider /><PintrestForEveryIndustry />
      <CommonDivider /><PintrestAnalytics />
      <CommonDivider /><WhyChooseBs />
      <CommonDivider /><Adv/>
      <CommonDivider /><Faq />
    </>
  )
}

export default page