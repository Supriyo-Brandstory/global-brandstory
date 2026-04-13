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

export default function IndustryReportsPage() {
    return (
        <div>
            <IndBanner />
            <IndSecExSum />
            <IndOverview />
            <IndPerfBenchmarks />
            <IndCompAndMarkLeaders />
            <IndSearchVolAnalysis />
            <IndOnPageSeo />
            <IndLocalSeoOpt />
            <IndTechSeoBenchmark />
            <IndFuture />
            <IndStrategy />
            <IndActionRecommendations />
            <IndDataSources />
        </div>
    );
}