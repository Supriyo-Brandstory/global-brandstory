import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const WeDoBest = () => {
     const accordionData = [
    {
      title: "1. Vision first IT strategy planning ",
      content:
        "We help you define exactly where your business is headed — and engineer the technology architecture to take you there. Our approach puts your long-term goals at the core, so every IT investment fuels strategic progress. Whether you're modernizing legacy systems or entering new markets, we ensure your tech is a growth enabler, not a cost center or constraint.",
    },
    {
      title: "2. Cross-functional digital roadmap development",
      content:
        "Develop tailor-made applications designed specifically to meet your unique business requirements and operational workflows.",
    },
    {
      title: "3. Outcome-led, business-aligned IT initiatives",
      content:
        "Define the structural blueprint and user interface (UI) layout to ensure a robust, scalable, and user-friendly software solution.",
    }
  ];
  return (
    <>
    <CommonAccordion
    title="What We Do Best: Outcome-Driven IT Consulting"
    // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
    subheding2="Every breakthrough starts with a better question. Our IT consultation services are built to align your tech with where your business is headed — not where it’s been. We specialize in:"
     items={accordionData} 
     footer=""
     />
    </>
  )
}
