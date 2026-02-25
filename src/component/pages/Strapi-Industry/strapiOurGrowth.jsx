// components/HowWeWork.jsx
import styles from '@/style/homepage.module.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

const steps = [
  {
    number: "01",
    title: "Strategy",
    description: "Clear Project Positioning Defines Campaign Direction. We Refine Target Segments, Pricing Narratives, Micro-Location Advantages, And Buyer Intent Mapping To Reduce Acquisition Waste.<br/><b>Outcome</b><br/>Stronger Positioning And Higher-Quality Enquiries."
  },
  {
    number: "02",
    title: "Design",
    description: "Creative Influences Perception. We Build Project Identity Systems, Brochure Designs, Ad Creatives, Landing Layouts, And Visual Storytelling Aligned With Premium Or Value Segments.<br/><b>Outcome</b><br/>Improved Click-Through Rates And Stronger Buyer Engagement."
  },
  {
    number: "03",
    title: "Marketing",
    description: "Campaigns Are Structured By Project Phase And Buyer Intent. Search Campaigns Capture High-Intent Keywords. Meta Campaigns Drive Awareness And Retargeting. Lead Funnels Are Segmented By Micro-Location And Configuration.<br/><b>Outcome</b><br/>Lower Cost Per Qualified Lead And Higher Site Visit Rates."
  },
  {
    number: "04",
    title: "Video",
    description: "Video Production Strengthens Project Storytelling. We Create Walkthrough Films, Drone Visuals, Lifestyle Videos, Motion Graphics, And Ad Creatives That Improve Campaign Performance.<br/><b>Outcome</b><br/>Increased Engagement And Improved Ad Conversion Rates."
  },
  {
    number: "05",
    title: "Development",
    description: "Landing Pages And Websites Are Built For Performance. We Create Conversion-Focused Project Pages, Integrate CRM Systems, Enable Lead Routing, And Structure Automation Workflows.<br/><b>Outcome</b><br/>Better Lead Tracking And Faster Follow-Up Cycles."
  },
  {
    number: "06",
    title: "Analytics",
    description: "Every Campaign Must Translate Into Measurable Revenue Outcomes. We Implement GA4 Tracking, Event Tagging, Dashboard Reporting, And Site Visit Attribution Frameworks.<br/><b>Outcome</b><br/>Clear ROI Visibility And Smarter Budget Allocation."
  }
];

export const StrapiOurGrowth = ({ data }) => {
  if (!data) return null;

  const { title, step } = data;

  return (
    <section className={styles.howwework_container}>
      <h2 className={styles.howwework_heading}>{title}</h2>
      <div className={styles.steps_wrapper}>
        {step?.map((step) => (
          <div key={step.number} className={styles.howwework_step}>
            <div className={styles.howwework_number}>{step.number}</div>
            <div className={styles.howwework_content}>
              <h3 className={styles.howwework_title}>{step.title}</h3>
              {step.description && (typeof step.description === "string") ? (
                <div
                  className={styles.howwework_description}
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              ) : (
                <div
                  className={styles.howwework_description}>
                  <BlocksRenderer content={step.description} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};