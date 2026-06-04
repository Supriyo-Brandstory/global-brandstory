import { CaseStudyListingBanner } from '@/component/pages/CaseStudy/CaseStudyListingBanner';
import { CaseStudyGridSelector } from '@/component/pages/CaseStudy/CaseStudyGridSelector';
import { CASE_STUDY_LISTING_TABS } from '@/data/caseStudyListingData';

export const metadata = {
  title: 'Case Studies | BrandStory Global',
  description:
    'Browse BrandStory case studies across social media, PPC, and SEO. See how we drive engagement, leads, and organic growth for brands worldwide.',
};

const page = () => {
  return (
    <>
      <CaseStudyListingBanner />
      <CaseStudyGridSelector title="Case Studies" tabs={CASE_STUDY_LISTING_TABS} />
    </>
  );
};

export default page;
