import FAQs from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How much do your video editing services cost?",
            description: "Costs are customized based on project complexity, footage length, and deliverables. We provide a transparent, fixed-fee quote after the initial consultation."
        },
        {
            title: "How do I send you my raw footage?",
            description: "We use secure, cloud-based platforms like Google Drive, Dropbox, or a dedicated project portal for easy file transfer."
        },
        {
            title: "How long does the editing process take?",
            description: "Timelines vary by project. Typically, a 2–4 minute video is completed within 1–2 weeks from the time we receive footage and project details."
        },
        {
            title: "Can you work with existing branding guidelines and assets?",
            description: "Yes. We require brand guidelines, logos, and any other assets upfront to ensure every video aligns with your brand identity."
        }
    ];

    return <FAQs data={data} />;
};