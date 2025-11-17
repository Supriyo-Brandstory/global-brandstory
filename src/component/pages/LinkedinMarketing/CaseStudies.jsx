import React from 'react';
import CommonAccordion from '../common/CommonAccordion';

export const CaseStudies = () => {
  const accordionData = [
    {
      title: "1. SaaS Company",
      content: `<b>Goal:</b> <br/>Generate high-quality demos from enterprise leads<br /><br />
      <b>Approach:</b> <br/>We implemented a targeted LinkedIn InMail campaign combined with Lead Gen Forms to capture interest quickly, supported by video remarketing to re-engage potential buyers.<br /><br />
      <b>Result:</b> <br/>Within just 60 days, the campaign achieved a 210% increase in qualified MQLs, providing the sales team with a strong pipeline of enterprise-ready prospects.`,
    },
    {
      title: "2. Consulting Firm",
      content: `<b>Goal:</b><br/>Boost brand visibility and position the leadership team as industry experts<br /><br />
      <b>Approach:</b><br/> Our strategy focused on executive branding, carousel posts, and Pulse articles that highlighted thought leadership and industry insights, helping decision-makers engage with the team.<br /><br />
      <b>Result:</b><br/> The firm experienced a 4x increase in profile visits and a 55% rise in speaking invitations, significantly strengthening their market authority and credibility.`,
    },
    {
      title: "3. EdTech Brand",
      content: `<b>Goal:</b> <br/>Drive webinar registrations for lead nurturing<br /><br />
      <b>Approach:</b> <br/>We designed a campaign using sponsored content, video ads, and a retargeting funnel to guide users from awareness to registration. Personalized follow-ups ensured prospects stayed engaged after sign-up.<br /><br />
      <b>Result:</b><br/> The campaign resulted in 1,200+ webinar sign-ups, a 62% attendance rate, and strong engagement post-event, creating a pool of highly qualified leads for nurturing and conversion.`,
    },
  ];

  return (
    <>
        <CommonAccordion
            paddingBottom={0}
            title="Case Studies: LinkedIn Campaigns that Delivered"
            subheding2=""
            items={accordionData}
            footer="These LinkedIn case studies prove that with the right strategy, B2B lead generation becomes predictable."
        />
        <div className='flex justify-center'>
            <a href="#" className='orange-btn'>Get Custom Quote</a>
        </div>
    </>
  );
};