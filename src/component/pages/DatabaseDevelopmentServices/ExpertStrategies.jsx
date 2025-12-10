import React from 'react'
import CommonTwoCard from '../common/CommonTwoCard'

export const ExpertStrategies =()=>{
    const data = {
    heading: "Expert Strategies to Improve Data<br/>Performance",
    subheading:
      "We Combine Technical Know-How With A Results-Oriented Approach:<br/><br/><b class='highlited-text'>Key Offerings Include:</b>",
    cards: [
            {
              title: "Data Modeling & Architecture",
              description:
                "We design logical and physical data models that align perfectly with your business requirements, ensuring a strong foundation for reliable and scalable systems.",
            },
            {
              title: "Query Optimization",
              description:
                "By refining queries and implementing efficient indexing, we improve database performance and speed up access to critical information.",
            },
            {
              title: "Database Security",
              description:
                "We safeguard sensitive data through encryption, access controls, and adherence to industry best practices, keeping your information secure and compliant.",
            },
            {
              title: "Operational Efficiency",
              description:
                "Our solutions reduce downtime, streamline workflows, and minimize operational costs, ensuring your database supports business continuity.",
            },
            {
              title: "Business Intelligence Integration",
              description:
                "We transform raw data into actionable insights, enabling smarter, data-driven decisions that guide your strategic initiatives.",
            },
        ],
    };


    return (
        <>
            <CommonTwoCard {...data} titleClass="text-center" cardLayout="two-col"/>
            <p className='max-w-[1200px] text-center mx-auto mb-30'>With these strategies, your database becomes a strategic asset, not just a technical requirement.</p>
        </>
    )
}