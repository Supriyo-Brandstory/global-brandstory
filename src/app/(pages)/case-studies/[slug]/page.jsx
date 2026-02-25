import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/services/api";
import CommonDivider from '@/component/pages/common/CommonDivider';
import { Banner } from '@/component/pages/CaseStudy/Banner';
import { BusinessChallange } from '@/component/pages/CaseStudy/BusinessChallange';
import { Images } from '@/component/pages/CaseStudy/Images';
import { Objectives } from '@/component/pages/CaseStudy/Objectives';
import { StrategicApproach } from '@/component/pages/CaseStudy/StrategicApproach';
import { Implementaion } from '@/component/pages/CaseStudy/Implementaion';
import { Challanges } from '@/component/pages/CaseStudy/Challanges';
import { Results } from '@/component/pages/CaseStudy/Results';
import { WhyThisWorked } from '@/component/pages/CaseStudy/WhyThisWorked';

const componentMap = {
    "section.case-banner": Banner,  //done
    "section.case-challenge": BusinessChallange, //done
    "section.case-image-slider": Images, //done
    "section.case-metrics": Objectives, //done
    "section.case-approach": StrategicApproach, //done
    "section.case-implementation": Implementaion,
    "section.case-resolution": Challanges, //done
    "section.case-results": Results, //done
    "section.section-whythis-worked": WhyThisWorked, //done
};

/* ---------------- METADATA ---------------- */

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const response = await getCaseStudyBySlug(slug);
    const pageData = response?.data?.[0]?.attributes || response?.data?.[0];

    if (!pageData) {
        return {
            title: "Case Study Not Found",
            robots: { index: false, follow: false },
        };
    }

    const {
        seoTitle,
        seoDescription,
        canonical,
        noindex,
        nofollow,
        ogimage,
    } = pageData;

    const title = seoTitle || `Case Study - ${slug}`;
    const description = seoDescription || "";

    const canonicalUrl = canonical || `https://brandstoryglobal.com/case-studies/${slug}`;

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
        robots: {
            index: !noindex,
            follow: !nofollow,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            images: ogimage ? [{ url: ogimage.url }] : [],
        },
    };
}

/* ---------------- PAGE ---------------- */

const page = async ({ params }) => {
    const { slug } = await params;
    const response = await getCaseStudyBySlug(slug);
    const pageData = response?.data?.[0]?.attributes || response?.data?.[0];

    if (!pageData) {
        notFound();
    }

    const sections = pageData.caseSections || [];

    return (
        <main>
            {sections.map((section, index) => {
                const Component = componentMap[section.__component];
                if (!Component) return null;
                return (
                    <div key={index}>
                        <Component data={section} />
                        {index < sections.length - 1 && <CommonDivider />}
                    </div>
                );
            })}
        </main>
    )
}

export default page;