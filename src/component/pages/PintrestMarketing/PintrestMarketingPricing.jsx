import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const PintrestMarketingPricing = () => {
    const title = "Pinterest Marketing Pricing & Packages";
    const description = "Our Pinterest Marketing Pricing Is Designed To Fit Every Stage Of Your Growth Journey, Whether You’re Just Starting Out Or Scaling Big, We’ve Got Flexible Monthly Plans That Deliver Results.";
    const footer = "Need something custom? We’ll build it.";
    
    const data = [
        {
            "title": "Starter – Perfect for New Brands",
            "description": `
                <ul>
                    <li>Profile setup + 10 branded pins</li>
                    <li>Basic keyword strategy for discoverability</li>
                    <li>Ideal for businesses testing Pinterest waters</li>
                </ul>
            `
        },
        {
            "title": "Growth – Strategy for Scale",
            "description": `
                <ul>
                    <li>Custom Pinterest strategy + 25 pins</li>
                    <li>1 targeted campaign for traffic or sales</li>
                    <li>Reporting on key metrics to track growth</li>
                </ul>
            `
        },
        {
            "title": "Enterprise – Full-Funnel Domination",
            "description": `
                <ul>
                    <li>End to end creative + branded ads</li>
                    <li>Advanced campaign optimization & A/B testing</li>
                    <li>Detailed reporting with growth insights</li>
                </ul>
            `
        }
    ];

    return (
        <>
            {/* The CommonBwThreeCard is used here to render the three pricing tiers */}
            <CommonBwThreeCard 
                rightPadding="50px" 
                title={title} 
                description={description} 
                footer={footer} 
                cardData={data} 
                paddingBottom="0px" 
            />


            {/* Custom Button Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6 px-4 pb-20 max-w-4xl mx-auto">
                {/* Button: Get a Custom Pinterest Plan (Solid Red/Orange) */}
                <button
                    className="
                        w-full md:w-auto  
                        bg-red-600  
                        text-white text-[20px]
                        py-4 px-10  
                        rounded-[20px]
                        whitespace-nowrap
                        transition duration-300 ease-in-out hover:opacity-90 
                    "
                    // Matching the style from the image/original code's color
                    style={{ backgroundColor: '#E73D26', border: 'none' }}
                    aria-label="Get a Custom Pinterest Plan"
                >
                    Get a Custom Pinterest Plan
                </button>
            </div>
        </>
    );
}