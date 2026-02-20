import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How Does A Real Estate Digital Marketing Agency Reduce Cost Per Lead?",
            description: "We achieve this through high-intent keyword targeting and landing page optimization, which has historically helped reduce Cost Per Lead by up to 45% for our residential clients."
        },
        {
            title: "Do Your Real Estate Marketing Services Improve Site Visit Ratios?",
            description: "Yes. By refining lead quality through better targeting and automated nurturing, we ensure that the enquiries reaching your sales team are 38% more likely to convert into physical site visits."
        },
        {
            title: "Can You Manage Multiple Projects At Once?",
            description: "Absolutely. Our team is structured to handle diverse portfolios simultaneously, from niche luxury villa developments to high-volume pre-launch residential projects."
        },
        {
            title: "How Do You Track ROI For Real Estate Campaigns?",
            description: "We use integrated CRM tracking and end-to-end attribution models to monitor everything from the initial digital touchpoint to the final booking, ensuring a transparent view of your marketing spend."
        },
        {
            title: "Do You Provide Video Production For Real Estate?",
            description: "Yes, we create high-impact visual content including 3D walkthroughs, drone cinematography, and testimonial videos designed to build trust and showcase property USPs effectively."
        },
        {
            title: "Can You Support Luxury And Mid-Segment Projects?",
            description: "Our strategies are segment-specific; we use boutique, high-touch marketing for luxury estates and data-driven, high-velocity lead generation for mid-segment residential developments."
        }
    ];

    return <FAQs data={data} />;
};