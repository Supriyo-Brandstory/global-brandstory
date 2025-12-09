import React from 'react';
import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TheDiffrenceBs = ()=>{
    const title = "The Difference BrandStory’s Expertise Makes in Software Solutions";
    const description = "Partnering with BrandStory Global gives you more than software. You gain:";
    const data = [
          {
            "title": "Strategic Expertise",
            "description": "We don’t just build software, we understand your business objectives and ensure that every technology decision supports your overarching goals. Our approach connects strategy with execution, so your software becomes a true enabler of growth and efficiency.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png"
          },
          {
            "title": "Technical Mastery",
            "description": "Our team brings deep technical knowledge across AI, Cloud, Automation, Mobile, SaaS, and custom software development. We design solutions that are secure, scalable, and future-ready, ensuring your technology evolves as your business grows.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s13.png"
          },
          {
            "title": "Transparency",
            "description": "Clear communication is at the core of our process. From project planning to delivery, we provide full visibility into timelines, milestones, and progress, so you’re always informed and confident in the project’s direction.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s22.png"
          },
          {
            "title": "Dedicated Teams",
            "description": "Every project receives focused attention from a specialized team of developers, designers, and QA experts. This dedicated approach ensures that your solution is built efficiently with high-quality output at every stage.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
          },
          {
            "title": "Long-Term Partnership",
            "description": "Our commitment doesn’t end at launch. We provide ongoing support, maintenance, and feature improvements, ensuring your software continues to deliver value and adapt to changing business needs over time.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s25.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable boxHeight='380px' title={title} description={description} data={data} />
    );
}