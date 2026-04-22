import { notFound } from "next/navigation";
import { getIndustryReportBySlug } from "@/lib/services/api";
import IndBanner from "@/component/pages/industry-reports/indBanner";
import IndOverview from "@/component/pages/industry-reports/indOverview";
import IndSecExSum from "@/component/pages/industry-reports/indSecExSum";
import IndPerfBenchmarks from "@/component/pages/industry-reports/indPerfBenchmarks";
import IndCompAndMarkLeaders from "@/component/pages/industry-reports/indCompAndMarkLeaders";
import IndSearchVolAnalysis from "@/component/pages/industry-reports/indSearchVolAnalysis";
import IndOnPageSeo from "@/component/pages/industry-reports/indOnPageSeo";
import IndLocalSeoOpt from "@/component/pages/industry-reports/indLocalSeoOpt";
import IndTechSeoBenchmark from "@/component/pages/industry-reports/indTechSeoBenchmark";
import IndFuture from "@/component/pages/industry-reports/indFuture";
import IndStrategy from "@/component/pages/industry-reports/indStrategy";
import IndActionRecommendations from "@/component/pages/industry-reports/indActionableRecommendations";
import IndDataSources from "@/component/pages/industry-reports/indDataSources";

const componentMap = {
    "industry-reports.rep-banner": IndBanner, //done
    "industry-reports.rep-exc-summary": IndSecExSum, //done
    "industry-reports.rep-ind-overview": IndOverview, //done
    "industry-reports.rep-perf-bench-mark": IndPerfBenchmarks, //done
    "industry-reports.rep-comp-and-market-leaders": IndCompAndMarkLeaders, //done
    "industry-reports.rep-search-volume-analysis": IndSearchVolAnalysis, //done
    "industry-reports.rep-content-and-insights": IndOnPageSeo, //done
    "industry-reports.rep-optimization": IndLocalSeoOpt, //done
    "industry-reports.rep-tech-bench-mark": IndTechSeoBenchmark, //done
    "industry-reports.rep-future": IndFuture, //done
    "industry-reports.rep-strategy": IndStrategy, //done
    "element.rep-recommendations": IndActionRecommendations, //done
    "industry-reports.rep-appendix": IndDataSources,
};

export default async function IndustryReportsPage({ params }) {
    const { slug = [] } = await params;
    const slugArray = Array.isArray(slug) ? slug : [slug];
    if (slugArray.length === 0 || slugArray.length > 2) {
        return notFound();
    }
    const data = await getIndustryReportBySlug(slugArray);
    const page = data?.page;
    console.log("data from the page", page);
    if (!page) return notFound();
    const sections = Array.isArray(page.sections) ? page.sections : [];
    const renderableSections = sections.filter((section) => componentMap[section?.__component]);
    if (renderableSections.length === 0) return notFound();
    return (
        <main>
            {renderableSections.map((section, index) => {
                const Component = componentMap[section.__component];
                const sectionKey = `${section.__component || "section"}-${section.id || "noid"}-${index}`;
                return <Component key={sectionKey} data={section} page={page} />;
            })}
        </main>
    );
}
