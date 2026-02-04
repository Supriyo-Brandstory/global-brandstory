import CommonDivider from '@/component/pages/common/CommonDivider'
import { Banner } from '@/component/pages/SeoForLlm/Banner'
import { WhyLlm } from '@/component/pages/SeoForLlm/WhyLlm'
import { BrandstorysLlm } from '@/component/pages/SeoForLlm/BrandstorysLlm'
import { WhatLlmWant } from '@/component/pages/SeoForLlm/WhatLlmWant'
import { OurStrategies } from '@/component/pages/SeoForLlm/OurStrategies'
import { HowWeBuild } from '@/component/pages/SeoForLlm/HowWeBuild'
import { LlmSeo } from '@/component/pages/SeoForLlm/LlmSeo'
import { BrandstorysAi } from '@/component/pages/SeoForLlm/BrandstorysAi'
import { Faq } from '@/component/pages/SeoForLlm/Faq'
import { Adv } from '@/component/pages/SeoForLlm/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("seo-for-llm");

const page = () => {
  return (
    <>
        <Banner />
        <CommonDivider /><WhyLlm />
        <CommonDivider /><BrandstorysLlm />
        <CommonDivider /><WhatLlmWant />
        <CommonDivider /><OurStrategies />
        <CommonDivider /><HowWeBuild />
        <CommonDivider /><LlmSeo />
        <CommonDivider /><BrandstorysAi />
        <CommonDivider /><Faq />
        <CommonDivider /><Adv />
    </>
  )
}

export default page