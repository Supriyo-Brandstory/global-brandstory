import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories =()=>{
  const heading = "Client Stories"
  const description =
    "We don’t just plan campaigns, we drive outcomes. Our content promotion case studies show measurable growth:"

  const cases = [
    {
      title: "E-Commerce Transformation",
      description:
        "<b>Problem:</b><br/>Outdated Website Causing High Bounce Rates And Lost Sales.<br/><br/><b>Solution:</b><br/>Complete UX/UI Overhaul With A Mobile-First Design And CRO Enhancements.<br/><br/><b>Result:</b><br/>45% Increase In Conversion Rate Within 3 Months."
    },
    {
      title: "Financial Services Website Refresh",
      description:
        "<b>Problem:</b><br/>Complex Service Offerings And Poor Search Rankings.<br/><br/><b>Solution:</b><br/>Strategic Sitemap Redesign, CMS Migration, And SEO Optimization.<br/><br/><b>Result:</b><br/>60% Increase In Organic Traffic And Improved Brand Credibility."
    },
    {
      title: "Healthcare Website Modernization",
      description:
        "<b>Problem:</b><br/>Legacy Platform With Slow Performance And Mobile Issues.<br/><br/><b>Solution:</b><br/>Modern CMS Migration, Responsive Redesign, And Brand Storytelling.<br/><br/><b>Result:</b><br/>Lower Bounce Rates And Higher Patient Inquiries."
    },
  ]
  const footer = "CRO Reduces Costs Per Lead And Maximizes Ad Effectiveness." // Retaining the original footer variable if needed by the component
    return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        // footer={footer} // Keeping the footer commented out as in the original component structure
    />
}