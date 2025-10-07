import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const RightWebSolution = () => {
     const accordionData = [
    {
      title: "1. Corporate & Creative Website Development",
      content:
        "Get a high-performance, brand-aligned website that blends speed, aesthetics, and usability. We develop responsive websites for startups, SMBs, and enterprises — built to drive engagement and leave a lasting digital impression.",
    },
    {
      title: "2. Enterprise Web Portals",
      content:
        "Develop tailor-made applications designed specifically to meet your unique business requirements and operational workflows.",
    },
    {
      title: "3. eCommerce Website Development",
      content:
        "Define the structural blueprint and user interface (UI) layout to ensure a robust, scalable, and user-friendly software solution.",
    },
    {
      title: "4. Progressive Web Apps (PWAs) & Web Applications",
      content:
        "Ensure your software runs smoothly, securely, and efficiently with continuous updates, bug fixes, and technical assistance.",
    },
    {
      title: "5. Custom Web Development Solutions",
      content:
        "Design, implement, and manage secure and high-performance databases crucial for storing and retrieving your business-critical data.",
    },
    {
      title: "6. Content Management System (CMS) Development",
      content:
        "Implement large-scale, integrated software systems (like ERP, CRM, etc.) to manage core business processes across the organization.",
    },
    {
      title: "7. Low-Code Web Development Services",
      content:
        "Implement large-scale, integrated software systems (like ERP, CRM, etc.) to manage core business processes across the organization.",
    },
  ];
  return (
    <>
    <CommonAccordion
        title="What’s the Right Web Solution for Your Business Goals?"
        // subheding1="We plan your social media to guide people from first seeing your brand to becoming loyal fans. Our social media strategy has four steps:"
        subheding2="Not every business needs the same website — and that’s where strategy matters. Discover a digital solution that fits your business model, audience behavior, and growth goals. <br/><b class='highlited-text'>Choose from Our Full-Spectrum Web Development Solutions:</b>"
        items={accordionData} 
        footer="Across industries, we deliver web development solutions that align with your goals and fuel business growth. At BrandStory, we’re more than a service provider — we’re your long-term digital partner. <br/><br/><b>Explore our complete web development services list to find the solution that fits.</b>"
    />
    </>
  )
}