import CommonDivider from '@/component/pages/common/CommonDivider'
import { Banner } from '@/component/pages/LinkedinMarketing/Banner'
import { WhyLinkedin } from '@/component/pages/LinkedinMarketing/WhyLinkedin'
import { OptimizedLinkedin } from '@/component/pages/LinkedinMarketing/OptimizedLinkedin'
import { IndustrySpecefic } from '@/component/pages/LinkedinMarketing/IndustrySpecefic'
import { WhyChooseBS } from '@/component/pages/LinkedinMarketing/WhyChooseBS'
import { CaseStudies } from '@/component/pages/LinkedinMarketing/CaseStudies'
import { Faq } from '@/component/pages/LinkedinMarketing/Faq'
import { Adv } from '@/component/pages/LinkedinMarketing/Adv'
import { getPageMetadata } from "@/app/(pages)/metadata";

export const metadata = getPageMetadata("linkedin-marketing");

const page = () => {
  return (
    <>
        <Banner />
        <CommonDivider /><WhyLinkedin />
        <CommonDivider /><OptimizedLinkedin />
        <CommonDivider /><IndustrySpecefic />
        <CommonDivider /><WhyChooseBS />
        <CommonDivider /><CaseStudies />
        <CommonDivider /><Faq />
        <CommonDivider /><Adv />
    </>
  )
}

export default page