import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/OurWork/Banner';
import { CaseStudies } from '@/component/pages/OurWork/CaseStudies';
import { getAllCaseStudies } from '@/lib/services/api';

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