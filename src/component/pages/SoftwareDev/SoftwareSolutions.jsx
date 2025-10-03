import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const SoftwareSolutions = () => {
     const accordionData = [
    {
      title: "1. Software Consulting",
      content:
        "We Work Closely With Your Internal Teams To Understand Your Business Goals And Challenges. Through In-Depth Analysis And Technology Consulting, We Help You Define The Right Strategy, Choose The Most Effective Tech Stack, And Create A Roadmap That Supports Sustainable Digital Transformation.",
    },
    {
      title: "2. Custom Software Development",
      content:
        "Develop tailor-made applications designed specifically to meet your unique business requirements and operational workflows.",
    },
    {
      title: "3. Architecture & Wireframing",
      content:
        "Define the structural blueprint and user interface (UI) layout to ensure a robust, scalable, and user-friendly software solution.",
    },
    {
      title: "4. Ongoing Maintenance & Support",
      content:
        "Ensure your software runs smoothly, securely, and efficiently with continuous updates, bug fixes, and technical assistance.",
    },
    {
      title: "5. Database Development",
      content:
        "Design, implement, and manage secure and high-performance databases crucial for storing and retrieving your business-critical data.",
    },
    {
      title: "6. Enterprise Software Solutions",
      content:
        "Implement large-scale, integrated software systems (like ERP, CRM, etc.) to manage core business processes across the organization.",
    },
  ];
  return (
    <>
    <CommonAccordion
    title="Tailored Software Solutions That Drive Real Results"
    // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
    subheding2="From Initial Planning To Long-Term Scalability, We Deliver Full-Cycle Software Services That Help Businesses Innovate, Grow, And Stay Competitive In A Fast-Changing Digital World."
     items={accordionData} 
     footer="Whether You’re Building From The Ground Up Or Optimizing Existing Systems, Our End-To-End Software Expertise Ensures Your Business Stays Ahead, With Solutions That Are Scalable, Secure, And Strategically Aligned."
     />
    </>
  )
}