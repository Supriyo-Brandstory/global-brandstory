import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/OurWork/Banner';
import { CaseStudies } from '@/component/pages/OurWork/CaseStudies';
import { getAllCaseStudies } from '@/lib/services/api';

export const metadata = {
    title: "Our Work Portfolio | BrandStory Global",
    description: "Explore our portfolio featuring successful branding, web design, digital marketing, ecommerce, creative campaigns, and business transformation projects.",
    alternates: {
        canonical: '/our-works',
    },
}

const page = async ({ searchParams }) => {
    const params = await searchParams;
    const currentPage = parseInt(params.page) || 1;
    const pageSize = 12;

    const query = params.query || "";
    const caseStudiesData = await getAllCaseStudies(currentPage, pageSize, query);
    return (
        <>
            <Banner />
            <CaseStudies
                initialData={caseStudiesData?.data || []}
                pagination={caseStudiesData?.meta?.pagination || {}}
            />
        </>
    )
}

export default page;