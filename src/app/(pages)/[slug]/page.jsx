import { getLandingPageBySlug } from "../../../lib/services/api";
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
import { StrapiBanner } from "@/component/pages/strapi/strapiBanner";
// Import other components you want to use for new pages...

const componentMap = {
    "section.banner": StrapiBanner,
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
};

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const response = await getLandingPageBySlug(slug);
    const pageData = response?.data?.[0];

    // Fallback for non-existing pages
    if (!pageData) {
        return {
            title: "Page Not Found",
            description: "The requested page does not exist.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    // SEO fields from Strapi
    const {
        seotitle,
        seodescription,
        canonical,
        noindex,
        nofollow,
        ogimage,
    } = pageData;

    const title = seotitle || "Default Title";
    const description = seodescription || "Default description";

    return {
        title,
        description,

        // Canonical URL
        alternates: {
            canonical: canonical || `https://www.yourdomain.com/${slug}`,
        },

        // Robots meta
        robots: {
            index: noindex ? false : true,
            follow: nofollow ? false : true,
            googleBot: {
                index: noindex ? false : true,
                follow: nofollow ? false : true,
            },
        },

        // Open Graph (social previews)
        openGraph: {
            title,
            description,
            url: canonical || `https://www.yourdomain.com/${slug}`,
            siteName: "Your Brand Name",
            locale: "en_US",
            type: "website",
            images: ogimage
                ? [
                    {
                        url: ogimage.url,
                        width: ogimage.width || 1200,
                        height: ogimage.height || 630,
                        alt: title,
                    },
                ]
                : [],
        },

        // Twitter Cards
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ogimage ? [ogimage.url] : [],
        },
    };
}


export default async function DynamicPage({ params }) {
    const { slug } = await params;

    const response = await getLandingPageBySlug(slug);
    const pageData = response?.data[0];
    console.log("consoling the page data", pageData)

    if (!pageData) {
        return <div>404 - Page Not Found</div>;
    }

    const sections = pageData.sections;
    // console.log("Consoling the pageData : ", pageData)
    // console.log("Consoling the sections : ", sections)

    return (
        <main>
            {sections.map((section, index) => {
                const Component = componentMap[section.__component];

                if (!Component) return null; // unknown component safety

                return <Component key={index} data={section} />;
            })}
        </main>
    );
}


// export default async function DynamicPage({ params }) {
//     const { slug } = await params;
//     // 1. Check Strapi for a page with this slug
//     const response = await getLandingPageBySlug(slug)
//     const pageData = response?.data[0];
//     console.log("Consoling the pageData : ", pageData)
//     if (!pageData) {
//         return <div>404 - Page Not Found</div>;
//     }
//     const sections = pageData?.sections;
//     return (
//         <main>
//             {sections.map((section, index) => {
//                 switch (section.__component) {
//                     case "section.banner":
//                         return <StrapiBanner key={index} data={section} />;

//                     case "section.accordion1":
//                         return <StrapiTest key={index} data={section} />;

//                     case "section.accordion2":
//                         return <RedifiningProfessionalStrapi key={index} data={section} />;

//                     case "section.outcome":
//                         return <CommonTwoCardWrapper key={index} data={section} />;

//                     case "section.casestudy":
//                         return <StrapiRealResults key={index} data={section} />;

//                     case "section.services-sec":
//                         return <StrapiServicesWrapper key={index} data={section} />;

//                     case "section.yourbrandyourstrategy":
//                         return <StrapiYourBrand key={index} data={section} />;

//                     case "section.testimonials":
//                         return <StrapiVoiceOfBrands key={index} data={section} />;

//                     case "section.horizontaltab":
//                         return <StrapiMasteringVisuals key={index} data={section} />;

//                     case "section.whyyourpartner":
//                         return <StrapiWhyPartner key={index} data={section} />;

//                     case "section.vertical-tab":
//                         return <StrapiOurCommitment key={index} data={section} />;

//                     case "section.adv":
//                         return <StrapiAdv key={index} data={section} />

//                     case "section.faq":
//                         return <StrapiFaq key={index} data={section} />

//                     default:
//                         return null;
//                 }
//             })}
//         </main>
//     );
// }