import { CommonOptionSelector } from "../common/CommonOptionSelector"

export const StrapiOurCommitment = ({ data }) => {
    // console.log("Consoling the StrapiOurCommitment data : ", data);


    const title = data?.title;
    const desc = data?.para;

    const newOptions = data?.tabs?.map((item)=>({
        heading:item?.title,
        description:item?.para
    }))

    const options = [
        {
            heading: "On Time Delivery",
            description:
                "We pride ourselves on completing every shoot and post production phase efficiently, providing our clients with high resolution images. Our structured workflow ensures projects stay on schedule while maintaining exceptional quality. With our modern processes, we help brands meet marketing deadlines without stress. Every deadline is treated with urgency, reflecting our commitment to client success. We consistently deliver fast results with zero compromises on visual excellence.<br/><br/><ul><li>98% of projects completed before the scheduled deadline.</li><li>Automated editing pipeline for faster turnaround without losing quality.</li><li>AI assisted image curation ensures consistent lighting and tone across every frame.</li><li>24 hour review cycle for client feedback and revisions.</li><li>Cloud based delivery system for instant, secure access to high resolution files.</li></ul>"
        },
        {
            heading: "Editing",
            description:
                "Our team performs professional retouching, color correction, and detailed refinement to create flawless visuals. We ensure every image aligns perfectly with your brand identity and marketing goals. By carefully enhancing lighting, composition, and texture, we enhance the visual appeal of every project. Our editing process guarantees consistency across all visual assets, from product photos to corporate portraits. We transform raw shots into polished, compelling images that captivate audiences.<br/><br/><ul><li>99% color accuracy achieved through calibrated editing suites.</li><li>Non destructive retouching to maintain natural textures and tones.</li><li>AI powered color grading for uniform brand aesthetics across campaigns.</li><li>Multi-layer compositing for high detail image refinement.</li><li>Automated quality checks ensure zero visual inconsistencies before delivery.</li></ul>"
        },
        {
            heading: "Reliability",
            description:
                "We are a trusted photography partner for global brands, offering dependable workflows and proven processes. Our clients can rely on us for smooth execution and consistent quality across every project. We anticipate challenges and proactively solve them, ensuring no disruption to your campaign schedules. By combining experience with structured project management, we deliver professional results every time. Our reliability builds confidence and long term partnerships with brands worldwide.<br/><br/><ul><li>100% project delivery record across international campaigns.</li><li>Zero downtime ensured through cloud based project management tools.</li><li>Multi-location backup systems to prevent data loss during production.</li><li>Standardized QA protocols for visual and operational consistency.</li><li>Client satisfaction rate of 97%, backed by repeat global collaborations.</li></ul>"
        },
        {
            heading: "Consistent Support",
            description:
                "We provide guidance on image usage rights, proper application across platforms, and additional edits whenever needed. Our team stays engaged post delivery to ensure your brand storytelling remains consistent across campaigns. We answer questions, advise on creative adaptations, and offer technical support for all digital or print needs. With proactive follow ups, we help you maximize the value of every shoot. Our consistent support ensures long term client success.<br/><br/><ul><li>24/7 client assistance for urgent queries and creative guidance.</li><li>Platform specific optimization for social, web, and print usage.</li><li>Unlimited minor edits within agreed timelines to maintain campaign integrity.</li><li>Proactive follow ups to track ongoing brand alignment and updates.</li><li>Detailed usage reports to help clients maximize ROI from every image.</li></ul>"
        },
        {
            heading: "Client Satisfaction",
            description:
                "We focus on exceeding your expectations and fostering lasting partnerships by delivering high impact visual solutions. Every project is personalized to meet your business objectives, strengthen brand identity, and drive measurable results. We listen, collaborate, and adapt to ensure our work resonates with target audiences. By prioritizing feedback and regular improvement, we achieve outstanding client satisfaction. Our ultimate goal is to create imagery which empowers brands, engages customers, and drives business growth.<br/><br/><ul><li>97%+ repeat client rate across industries and campaigns.</li><li>Structured feedback loops ensuring all client inputs are implemented.</li><li>Performance tracking of visuals through engagement and conversion metrics.</li><li>Dedicated account managers for consistent communication and support.</li><li>Post project analysis to identify improvements and enhance future outcomes.</li></ul>"
        }
    ]

    return (
        <CommonOptionSelector title={title} description={desc} options={newOptions} />
    )
}