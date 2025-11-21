import CommonAccordion2 from '../common/CommonAccordion2';

export const TheValue = () => {
    const accordionData = [
        {
            title: "1. Tailored Strategies",
            content: "We don’t believe in one-size-fits-all solutions. Every business has unique challenges and opportunities, so we take time to understand your brand, your audience, and your industry before creating strategies designed specifically for you.",
        },
        {
            title: "2. Proven Results",
            content: "Our experience spans over 500 clients across 30+ industries. From startups looking for visibility to established enterprises aiming for more conversions, our work consistently delivers measurable outcomes like increased traffic, higher engagement, and stronger leads.",
        },
        {
            title: "3. Full Transparency",
            content: "With us, you’ll never feel left in the dark. We share clear action plans, regular updates, and performance reports so you always know what’s happening and how it’s impacting your business. No jargon, just straightforward insights.",
        },
        {
            title: "4. Long-Term Partnership",
            content: "Content optimization is an ongoing journey. We continue refining and refreshing your content to keep it relevant, effective, and aligned with changing audience needs and search trends. Our focus is on building lasting success, not short-term wins.",
        }
    ];

    return (
        <CommonAccordion2
            title="The Value We Bring to Your Business"
            // highlited="We run campaigns across:"
            description="Choosing the right partner for content optimization goes beyond ticking boxes — it’s about finding a team that understands your goals and knows how to turn content into growth. Here’s what makes us the right fit:"
            items={accordionData}
        />
    );
};