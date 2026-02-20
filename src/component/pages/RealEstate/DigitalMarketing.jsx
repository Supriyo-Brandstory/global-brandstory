import { CommonBigIndexScrollable2 } from "../common/CommonBigIndexScrollable2";

export const DigitalMarketing = () => {
  const heading = "Digital Marketing Services for Real Estate";

  const cases = [
    {
      title: "Real Estate Performance Marketing Services",
      description:
        "As A Real Estate Digital Marketing Agency, Campaigns Are Structured Around Generating Qualified Site Visits And Reducing Cost Per Booking.<br/><br/><b>Services Include</b><ul><li>Google Search Campaigns</li><li>Meta Lead Generation</li><li>Micro-Location Targeting</li><li>Retargeting Frameworks</li><li>Funnel Optimisation</li></ul><br/><b>Business Impact:</b> Higher-Quality Enquiries And Improved Visit Conversion."
    },
    {
      title: "Real Estate SEO Services",
      description:
        "Our Real Estate Digital Marketing Services Include Structured SEO Strategies Designed To Capture Project-Based And Location-Specific Search Demand.<br/><br/><b>Services Include</b><ul><li>Project Keyword Optimisation</li><li>Local SEO Strategy</li><li>Technical SEO Audits</li><li>Content Development</li><li>Authority Building</li></ul><br/><b>Business Impact:</b> Sustainable Inbound Traffic And Reduced Paid Dependency."
    },
    {
      title: "Real Estate Website Development Services",
      description:
        "As A Real Estate Marketing Company, High-Conversion Landing Pages Are Critical To Performance.<br/><br/><b>Services Include</b><ul><li>Project Landing Pages</li><li>CRM Integration</li><li>Lead Capture Optimisation</li><li>Mobile-First UX</li><li>Automated Follow-Up Setup</li></ul><br/><b>Business Impact:</b> Improved Lead Capture And Faster Sales Engagement."
    },
    {
      title: "Real Estate Branding Services",
      description:
        "Positioning Defines Perception. Our Branding Services Help Projects Stand Out In Crowded Markets.<br/><br/><b>Services Include</b><ul><li>Project Identity Creation</li><li>Brochure Design</li><li>Campaign Creative Systems</li><li>Visual Storytelling</li><li>Messaging Refinement</li></ul><br/><b>Business Impact:</b> Stronger Differentiation And Premium Positioning."
    },
    {
      title: "Real Estate Video Production Services",
      description:
        "Video Production Strengthens Buyer Trust And Emotional Connection.<br/><br/><b>Services Include</b><ul><li>Project Walkthrough Films</li><li>Drone Videography</li><li>Lifestyle Brand Films</li><li>Ad Video Creatives</li><li>Motion Graphics</li></ul><br/><b>Business Impact:</b> Increased Campaign Engagement And Better Site Visit Intent."
    },
    {
      title: "Real Estate Analytics & CRO Services",
      description:
        "As A Real Estate Digital Marketing Agency, Data Clarity Drives Growth Decisions.<br/><br/><b>Services Include</b><ul><li>Lead Quality Analysis</li><li>Funnel Performance Tracking</li><li>A/B Testing</li><li>Attribution Reporting</li><li>Dashboard Development</li></ul><br/><b>Business Impact:</b> Reduced Wasted Spend And Improved Marketing ROI."
    }
  ];

  return (
    <CommonBigIndexScrollable2
      data={cases}
      heading={heading}
      description="This section captures ranking intent while maintaining positioning."
      leftPanelWidth="50%"
    />
  );
};