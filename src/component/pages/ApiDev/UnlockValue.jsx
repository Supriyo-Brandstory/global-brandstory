import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const UnlockValue = () => {
     const accordionData = [
    {
      title: "1. Third-Party API Integrations",
      content:
        "Seamlessly Connect Your Ecosystem With Powerful Third-Party Tools. Whether You’re Integrating CRMs Like Salesforce Or Zoho, ERPs Such As SAP Or Oracle, Or Secure Payment Gateways Like Stripe And Razorpay – We Ensure Smooth, Stable, And Secure Connectivity Across Platforms. Our Integrations Are Designed To Enhance Functionality While Keeping Your Workflows Intact And User Experience Uninterrupted.",
    },
    {
      title: "2. API Maintenance & Support",
      content:
        "Our API-as-a-Service (APIaaS) includes comprehensive API maintenance and support, ensuring your integrations are always up-to-date, secure, and performing optimally. We handle monitoring, issue resolution, and versioning.",
    },
    {
      title: "3. Cloud-Based API Solutions",
      content:
        "We deliver robust, scalable, and secure cloud-based API solutions, leveraging leading cloud providers to ensure high availability and performance for your mission-critical applications.",
    },
    {
      title: "4. Microservices Consulting",
      content:
        "Get expert guidance on transitioning to a microservices architecture. Our consulting services cover design, development, deployment, and management to enhance agility and scalability.",
    },
    // The image only shows 4 items, so the 5th one is removed to match the visible content.
  ];
  return (
        <CommonAccordion
        title="Unlock Value Faster with Brandstory APIaaS"
            subheding2="Our Brandstory API-As-A-Service (APIaaS) Solutions Deliver The Infrastructure, Maintenance, And Innovation You Need – On-Demand."
            items={accordionData}
        />
    )
}