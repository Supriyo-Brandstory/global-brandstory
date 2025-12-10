import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TheDiffrence = ()=>{
    const title = "The Difference Our Team Brings<br/>to Database Development";
    const description = "Choosing A Database Partner Is About More Than Technical Skill. Here’s What Sets Us Apart:";
    const data = [
          {
            "title": "Proven Expertise",
            "description": "With years of experience across SQL, NoSQL, and hybrid database solutions, we bring deep technical knowledge to every project. ",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s49.png"
          },
          {
            "title": "Business-First Approach",
            "description": "Our focus is on building databases that support your business goals and deliver measurable results, not just technical functionality.",
            "bgcolor": "#474574", 
            "logo": "/images/square-images/s21.png"
          },
          {
            "title": "Trusted Methodology",
            "description": "Using a structured, repeatable process, we minimize risk, ensure quality, and maximize operational efficiency.",
            "bgcolor": "#3e484b", 
            "logo": "/images/square-images/s36.png"
          },
          {
            "title": "End-To-End Support",
            "description": "From initial planning and architecture to deployment and post-launch optimization, we provide continuous guidance and support.",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s43.png"
          },
          {
            "title": "Future-Ready Solutions",
            "description": "We design systems that scale with your business, reduce technical debt, and lower long-term costs.",
            "bgcolor": "#474574", 
            "logo": "/images/square-images/s25.png"
          }
        ];
    return (
        <>
          <CommonGridBox3Scrollable title={title} description={description} data={data} />
          <p className='max-w-[1200px] text-center mx-auto mb-30'>We build trust, efficiency, and high-performance systems that drive your business forward.</p>
        </>
    );
}