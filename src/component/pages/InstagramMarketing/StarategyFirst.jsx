import React from 'react'
import CommonAccordion from '../common/CommonAccordion';

export const StarategyFirst = () => {
     const accordionData = [
    {
      title: "1. We Publish Only On Real Blogs With Real Audiences",
      content:
        `We Don’t Touch Link Farms Or Private Blog Networks. Every Site We Work With Is A Legitimate, Independently Run Blog With Real Traffic And Consistent Content. These Are Websites With Readers Who Care Not Just Sites Built To Sell Backlinks. When Your Content Is Placed There, It Adds True Value And Authority To Your Brand.
        `,
    },
    {
      title: "2. Manually Vetted, Metrics-Backed Websites",
      content:
        ``, 
    },
    {
      title: "3. Full-Service Content Creation By Our Team",
      content:
        ``, 
    },
    {
      title: "4. Outreach And Placement Done The Right Way",
      content:
        ``, 
    },
    {
      title: "5. Over 100 Brands Have Partnered With Us",
      content:
        ``, 
    },
  ];
  return (
        <>
            <CommonAccordion
                title="Strategy-First Instagram Ad</br>Campaigns That Deliver"
                // subheding2="A Backlink Only Works When It Earns Trust, From Search Engines And Your Audience. Our Guest Posting Service Is Built To Do Exactly That. We Focus On Quality Over Volume, Real Websites Over Shortcuts, And Strong Editorial Standards Over Spammy Placements."
                items={accordionData} 
                footer="<span class='highlited-text' >Custom Instagram marketing packages available on request.</span>" 
                paddingBottom={0}  
            />
             <div className="mx-auto mb-30 text-center">
                <a className="orange-btn">
                    Book Your Global SEO Strategy Session
                </a>
            </div>
        </>
    )
}