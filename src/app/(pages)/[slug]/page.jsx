import { Fragment } from "react";
import { notFound } from "next/navigation";
import { getLatestBlogs, getLocationPageByPath } from "../../../lib/services/api";
import LocationLatestBlogs from "@/component/pages/common/LocationLatestBlogs";

// components (unchanged)
import StrapiTest from "@/component/pages/strapi/test";
import RedifiningProfessionalStrapi from "@/component/pages/strapi/redefiningProfessionalStrapi";
import { CommonTwoCardWrapper } from "@/component/pages/strapi/commonTwoCardWrapper";
import { StrapiRealResults } from "@/component/pages/strapi/strapiRealResults";
import StrapiServicesWrapper from "@/component/pages/strapi/strapiServicesWrapper";
import { StrapiYourBrand } from "@/component/pages/strapi/strapiYourBrand";
import { StrapiVoiceOfBrands } from "@/component/pages/strapi/strapiVoicesOfBrand";
import { StrapiWhyPartner } from "@/component/pages/strapi/strapiWhyPartner";
import { StrapiMasteringVisuals } from "@/component/pages/strapi/strapiMasteringVisuals";
import { StrapiOurCommitment } from "@/component/pages/strapi/strapiOurCommitment";
import { StrapiAdv } from "@/component/pages/strapi/strapiAdv";
import StrapiFaq from "@/component/pages/strapi/strapiFaq";
import { StrapiBannerLocation } from "@/component/pages/strapi/strapiBannerLocation";
import { StrapiWhyStrategic } from "@/component/pages/strapi/strapiWhyStrategic";
import { StrapiThePeople } from "@/component/pages/strapi/strapiThePeople";
import { StrapiWhatAeoMatters } from "@/component/pages/strapi/strapiWhatAeoMatters";
import { StrapiClientLogos } from "@/component/pages/strapi/strapiClientLogos";
import { StrapiOurProcess } from "@/component/pages/strapi/strapiOurProcess";
import { StrapiCardSlider } from "@/component/pages/strapi/strapiCardSlider";
import { StrapiFirst30Days } from "@/component/pages/strapi/strapiFirst30Days";
import { StrapiIndustryResults } from "@/component/pages/strapi/strapiIndustryResults";
import { StrapiTeamPerformance } from "@/component/pages/strapi/strapiTeamPerformance";
import { StrapiReviewsCta } from "@/component/pages/strapi/strapiReviewsCta";
import CommonDivider from "@/component/pages/common/CommonDivider";
import LocationContactPopup from "@/component/pages/common/LocationContactPopup";

const componentMap = {
    "section.banner": StrapiBannerLocation,
    "section.accordion1": StrapiTest,
    "section.accordion2": RedifiningProfessionalStrapi,
    "section.outcome": CommonTwoCardWrapper,
    "section.casestudy": StrapiRealResults,
    "section.services-sec": StrapiServicesWrapper,
    "section.yourbrandyourstrategy": StrapiYourBrand,
    "section.testimonials": StrapiVoiceOfBrands,
    "section.horizontaltab": StrapiMasteringVisuals,
    "section.whyyourpartner": StrapiWhyPartner,
    "section.vertical-tab": StrapiOurCommitment,
    "section.adv": StrapiAdv,
    "section.faq": StrapiFaq,
    "section.whystrategic": StrapiWhyStrategic,
    "section.thepeople": StrapiThePeople,
    "section.whyaeomatters": StrapiWhatAeoMatters,
    "section.client-logos": StrapiClientLogos,
    "section.our-process": StrapiOurProcess,
    "section.card-slider": StrapiCardSlider,
    "section.first-30-days": StrapiFirst30Days,
    "section.industry-results": StrapiIndustryResults,
    "section.team-performance": StrapiTeamPerformance,
    "section.reviews-cta": StrapiReviewsCta,
};

/* ---------------- METADATA ---------------- */

export async function generateMetadata({ params }) {
    // ✅ NEXT 15 FIX
    const { slug = [] } = await params;

    const slugPath = Array.isArray(slug) ? slug.join("/") : slug;
    const fullPath = `${slugPath}`;

    const response = await getLocationPageByPath(fullPath);
    const pageData = response?.data?.[0];

    if (!pageData) {
        return {
            title: "Page Not Found",
            robots: { index: false, follow: false },
        };
    }

    const {
        seotitle,
        seodescription,
        canonical,
        noindex,
        nofollow,
        ogimage,
        fullPath: strapiPath,
    } = pageData;

    const title = seotitle || "BrandStory Services";
    const description = seodescription || "";

    const canonicalUrl =
        canonical || `https://brandstoryglobal.com/${strapiPath}`;

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

export default async function ServicePage({ params }) {
    // ✅ NEXT 15 FIX
    const { slug = [] } = await params;

    const slugPath = Array.isArray(slug) ? slug.join("/") : slug;
    const fullPath = `${slugPath}`;

    const response = await getLocationPageByPath(fullPath);
    const pageData = response?.data?.[0];

    if (!pageData) {
        notFound();
    }

    const sections = (pageData.sections || [])
        .map((section, index) => ({
            section,
            index,
            Component: componentMap[section.__component],
        }))
        .filter(({ Component }) => Component);

    const latestBlogsResponse = await getLatestBlogs(10);
    const latestBlogs = latestBlogsResponse?.data || [];

    return (
        <main>
            {sections.map(({ section, index, Component }, i) => (
                <Fragment key={`${section.__component}-${section.id || index}`}>
                    {i > 0 && <CommonDivider />}
                    <div className="py-10 md:py-14">
                        <Component data={section} />
                    </div>
                </Fragment>
            ))}
            {latestBlogs.length > 0 && (
                <>
                    {sections.length > 0 && <CommonDivider />}
                    <div className="py-10 md:py-14">
                        <LocationLatestBlogs blogs={latestBlogs} />
                    </div>
                </>
            )}
            <LocationContactPopup />
        </main>
    );
}