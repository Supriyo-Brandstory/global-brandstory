import CsPerformance from "@/component/pages/common/CsPerformance";
import StaticPaidCampaignPerformance from "@/component/pages/common/StaticPaidCampaignPerformance";
import CsProcess from "@/component/pages/common/CsProcess";
import { CommonBanner4 } from "@/component/pages/common/CommonBanner4";
import { CommonStats2 } from "@/component/pages/common/CommonStats2";
import { CommonImageGrid } from "@/component/pages/common/CommonImageGrid";
import { CommonBusinessContext } from "@/component/pages/common/CommonBusinessContext";
import { CommonChallengesObjectives } from "@/component/pages/common/CommonChallengesObjectives";
import { CommonStrategyPlanning } from "@/component/pages/common/CommonStrategyPlanning";
import { CommonCampaignExecution } from "@/component/pages/common/CommonCampaignExecution";

const BhivePage = () => {
    return (
        <>
            <CommonBanner4
                heading="Driving 46% Cost Efficiency in <span>B2B Lab Infrastructure Marketing</span>"
                tags={[
                    { icon: "Globe", text: "Laboratory Infrastructure / Scientific Equipment" },
                    { icon: "Target", text: "Lead Generation" },
                    { icon: "Briefcase", text: "B2B" },
                    { icon: "Share2", text: "Google Ads" },
                    { icon: "Calendar", text: "₹1L – ₹1.8L / month" },
                ]}
                googleLogo="/images/commonBanner4/google-logo.png"
            />

            <CommonStats2
                summaryLabel="EXECUTIVE SUMMARY"
                summaryQuote="Generated consistent high-intent B2B leads through structured Google Ads campaigns while improving cost efficiency and maintaining stable conversion performance within a niche laboratory infrastructure market."
                stats={[
                    {
                        value: "1",
                        title: "PLATFORM",
                        subText: "Google Ads",
                    },
                    {
                        value: "PPC",
                        title: "CAMPAIGN TYPE",
                        subText: "Lead Generation Focus",
                    },
                    {
                        value: "B2B",
                        title: "BUSINESS MODEL",
                        subText: "Scientific Infrastructure Solutions",
                    },
                ]}
            />

            <CommonImageGrid
                images={[
                    "/images/case-study/ppc/b2b-laboratory-infrastructure/image1.png",
                    "/images/case-study/ppc/b2b-laboratory-infrastructure/image2.png",
                    "/images/case-study/ppc/b2b-laboratory-infrastructure/image3.png",
                ]}
            />

            <CommonBusinessContext
                title="Business <span>Context</span>"
                cards={[
                    {
                        icon: "Building2",
                        number: "01",
                        title: "About the Business",
                        description: "Provides laboratory infrastructure solutions including lab furniture, fume hoods, modular laboratory systems, and turnkey lab setups for research, healthcare, pharmaceutical, and industrial applications.",
                    },
                    {
                        icon: "Users",
                        number: "02",
                        title: "Target Audience",
                        description: "Pharmaceutical companies, research institutions, healthcare facilities, educational laboratories, and industrial R&D teams requiring laboratory infrastructure and safety solutions.",
                    },
                    {
                        icon: "TrendingUp",
                        number: "03",
                        title: "Previous Marketing Performance",
                        description: "Earlier campaigns generated moderate lead flow with higher acquisition costs due to niche targeting, limited keyword optimization, and inconsistent campaign structuring.",
                    },
                    {
                        icon: "Target",
                        number: "04",
                        title: "Business Goal Behind Campaign",
                        description: "To generate high-quality B2B leads, improve acquisition efficiency, and capture high-intent demand across specialized laboratory infrastructure searches.",
                    },
                ]}
            />

            <CommonChallengesObjectives
                title="Challenges <span>&</span> <span class='accent'>Objectives</span>"
                desc=""
                challenges={{
                    title: "Key Challenges",
                    items: [
                        "High CPC due to niche technical keywords",
                        "Limited search demand volume",
                        "Long B2B buying and approval cycles",
                        "Complex product positioning and messaging",
                        "Balancing lead quality with cost efficiency",
                    ],
                }}
                objectives={{
                    title: "Campaign Objectives",
                    items: [
                        "Generate qualified B2B leads",
                        "Reduce cost per acquisition",
                        "Improve conversion consistency",
                        "Strengthen high-intent targeting",
                        "Maintain scalable campaign performance",
                    ],
                }}
            />

            <CommonStrategyPlanning
                title="Strategy <span>&</span> <span class='accent'>Planning</span>"
                items={[
                    {
                        icon: "users",
                        title: "Audience Targeting Strategy",
                        description: "Focused on high-intent users searching for laboratory infrastructure and scientific equipment solutions, with geo-targeting aligned to industrial and research-focused locations."
                    },
                    {
                        icon: "search",
                        title: "Keyword / Interest Strategy",
                        description: "Targeted niche, high-intent keywords including laboratory furniture, fume hoods, modular labs, and turnkey laboratory setup solutions aligned with core business offerings."
                    },
                    {
                        icon: "layers",
                        title: "Funnel Strategy",
                        description: "TOFU: Limited due to niche market demand · MOFU: Engagement through high-intent search queries · BOFU: Conversion-focused Google search campaigns."
                    },
                    {
                        icon: "pin",
                        title: "Creative Strategy",
                        description: "Used technical and product-focused messaging highlighting safety standards, customization capabilities, quality assurance, and infrastructure reliability."
                    },
                    {
                        icon: "dollar",
                        title: "Budget Allocation Strategy",
                        description: "Primary budget allocation focused on Google Ads to efficiently capture high-intent search demand within a specialized B2B market."
                    }
                ]}
            />

            <CommonCampaignExecution
                title="Campaign <span class='accent'>Execution</span>"
                cards={[
                    {
                        icon: "chart",
                        title: "Ad Structure",
                        description: "Segmented campaigns based on product categories, infrastructure solutions, and keyword intent clusters to improve targeting precision and conversion quality."
                    },
                    {
                        icon: "pin",
                        title: "Creatives Used",
                        description: "Text-based search ads focused on technical specifications, compliance standards, customization options, and product reliability."
                    },
                    {
                        icon: "megaphone",
                        title: "Landing Page Approach",
                        description: "Directed users to product-specific and solution-focused landing pages with strong CTAs, optimized lead forms, and detailed technical information."
                    },
                    {
                        icon: "flask",
                        title: "A/B Testing Strategy",
                        description: "Tested keyword variations, ad copies, messaging structures, and landing page elements to improve CTR, engagement, and lead quality."
                    },
                    {
                        icon: "settings",
                        title: "Optimization Approach",
                        description: "Continuously optimized campaigns through bid adjustments, keyword refinement, negative keyword filtering, and ongoing performance monitoring to improve efficiency."
                    }
                ]}
            />

            <CsProcess
                title="Our Process"
                steps={[
                    {
                        number: "01",
                        title: "Process Overview",
                        description:
                            "A structured Google Ads framework was implemented to improve lead quality, optimize acquisition costs, and maintain stable conversion performance.",
                        points: [
                            "Focused on high-intent B2B search targeting",
                            "Aligned keyword intent with conversion-focused campaigns",
                            "Structured campaigns for precision and scalability",
                            "Designed for consistent lead flow across demand cycles",
                        ],
                    },
                    {
                        number: "02",
                        title: "Content Planning",
                        description:
                            "Messaging and campaign structure were aligned around technical relevance, buyer intent, and solution-focused communication.",
                        points: [
                            "Focused on laboratory infrastructure and safety solutions",
                            "Highlighted product reliability and customization capabilities",
                            "Mapped messaging across awareness and conversion stages",
                            "Ensured clarity and relevance across campaigns",
                        ],
                    },
                    {
                        number: "03",
                        title: "Distribution & Attribution (What Worked)",
                        description:
                            "Google Ads served as the primary acquisition channel for capturing qualified demand and improving lead consistency.",
                        points: [
                            "High-intent keywords improved conversion quality",
                            "Product-specific targeting strengthened lead relevance",
                            "Structured campaigns improved CTR and visibility",
                            "Continuous optimization supported stable funnel performance",
                        ],
                    },
                    {
                        number: "04",
                        title: "Best Practices Implemented",
                        description:
                            "Structured execution and continuous optimization improved campaign performance and efficiency.",
                        points: [
                            "Keyword segmentation based on intent clusters",
                            "Continuous testing of ad messaging and structure",
                            "Optimization focused on reducing CPA",
                            "Conversion-focused landing page alignment",
                            "Search-intent-driven campaign structuring",
                        ],
                    },
                    {
                        number: "05",
                        title: "Governance & Growth",
                        description:
                            "Performance was maintained through ongoing monitoring, audits, and optimization improvements.",
                        points: [
                            "Bid strategies refined for cost efficiency",
                            "Keyword performance reviewed consistently",
                            "Campaign structures optimized for scalability",
                            "Continuous improvements implemented using conversion insights",
                        ],
                    },
                ]}
            />

            <CsPerformance
                title="Results &"
                titleHighlight="Performance"
                stats={[
                    {
                        label: "TOTAL CONVERSIONS",
                        oldValue: "19",
                        newValue: "32",
                        badges: ["1.68× growth", "Sustained gains"],
                    },
                    {
                        label: "COST PER ACQUISITION",
                        oldValue: "₹6210",
                        newValue: "₹3320",
                        badges: ["46% reduction", "Improved efficiency"],
                    },
                ]}
                highlights={[
                    "Moderate click volumes supported steady funnel growth",
                    "Consistent MQL flow maintained across campaign duration",
                ]}
                details={[
                    {
                        title: "Performance Improvement",
                        content:
                            "Significant improvement in conversion consistency and cost efficiency was achieved during the optimization phase, with stabilized campaign performance maintained during later stages.",
                    },
                    {
                        title: "Cost Efficiency Gains",
                        content:
                            "Cost per acquisition reduced substantially through improved targeting, bidding strategies, keyword optimization, and funnel refinement, achieving stronger efficiency across high-performing periods.",
                    },
                    {
                        title: "Conversion / Revenue Impact",
                        content:
                            "Sustained growth in qualified leads and improved funnel quality contributed to stronger SQL generation, better pipeline consistency, and long-term business growth potential.",
                    },
                ]}
                glow={true}
            />

            <StaticPaidCampaignPerformance ctaText="Ready to scale your paid campaigns?" />
        </>
    );
};

export default BhivePage;

export const metadata = {
    title: "Improving B2B Laboratory Lead Generation | Global Brandstory",
    description:
        "High-intent Google Ads campaigns improved B2B lead quality, strengthened conversion consistency, and reduced acquisition costs in a niche laboratory market.",
};