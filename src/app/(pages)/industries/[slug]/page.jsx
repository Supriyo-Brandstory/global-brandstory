import { notFound } from "next/navigation";
import { getIndustriesBySlug } from "@/lib/services/api";
import CommonDivider from '@/component/pages/common/CommonDivider';
import { StrapiBanner } from '@/component/pages/Strapi-Industry/strapiBanner';
import { StrapiObjectives } from '@/component/pages/Strapi-Industry/strapiObjectives';
import { StrapiKeyChallenges } from '@/component/pages/Strapi-Industry/strapiKeyChallenges';
import { StrapiOurGrowth } from '@/component/pages/Strapi-Industry/strapiOurGrowth';
import { StrapiDigitalMarketing } from '@/component/pages/Strapi-Industry/strapiDigiMarketing';
import { StrapiGrowth } from '@/component/pages/Strapi-Industry/strapiGrowth';
import { StrapiResults } from '@/component/pages/Strapi-Industry/strapiResults';
import { StrapiAdv } from '@/component/pages/Strapi-Industry/strapiAdv';
import { StrapiFaq } from '@/component/pages/Strapi-Industry/strapiFaq';

const componentMap = {
    "section.ind-banner": StrapiBanner, //done
    "section.ind-objectives": StrapiObjectives, //done
    "section.accordion2": StrapiKeyChallenges, //done
    "section.ind-growth": StrapiOurGrowth, //done
    "section.ind-digital-marketing": StrapiDigitalMarketing, //done
    "section.horizontaltab": StrapiGrowth, //done
    "section.ind-results": StrapiResults, //done
    "section.faq": StrapiFaq, //done
    "section.adv": StrapiAdv, //done
};

/* ---------------- METADATA ---------------- */

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const response = await getIndustriesBySlug(slug);
    const pageData = response?.data?.[0]?.attributes || response?.data?.[0];

    if (!pageData) {
        return {
            title: "Page Not Found",
            robots: { index: false, follow: false },
        };
    }

    const {
        metatitle,
        metadescription,
        canonical,
        noindex,
        nofollow,
        ogimage,
    } = pageData;

    const title = metatitle || `Industry - ${slug}`;
    const description = metadescription || "";

    const canonicalUrl = canonical || `https://brandstoryglobal.com/industries/${slug}`;

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
    const response = await getIndustriesBySlug(slug);
    const pageData = response?.data?.[0]?.attributes || response?.data?.[0];

    if (!pageData) {
        notFound();
    }

    const sections = pageData.sections || [];

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