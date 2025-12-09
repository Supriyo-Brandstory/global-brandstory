import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TheDiffrence = ()=>{
    const title = "The Difference Brandstory Global Brings<br/>to Your Business";
    const description = "Partnering with us means more than hiring architects or designers. It means gaining a strategic partner who understands both technology and users.";
    const data = [
          {
            "title": "Expert Solution Architects",
            "description": "Our architects have hands-on experience designing complex systems for both startups and enterprises. They ensure your software is scalable, secure, and aligned with your long-term strategy.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s26.png" 
          },
          {
            "title": "User Experience Expertise",
            "description": "We combine technical rigor with intuitive design, creating software that is not only robust but also easy for users to navigate and engage with.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s31.png" 
          },
          {
            "title": "Technology-Agnostic Approach",
            "description": "Rather than following trends, we select tools and platforms based purely on your business requirements, ensuring the solution fits your needs today, and adapts for tomorrow.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s16.png" 
          },
          {
            "title": "Strategic Partnership",
            "description": "From discovery through delivery, we act as your trusted advisors, guiding each stage of the project to ensure every decision aligns with your business objectives and maximizes ROI.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s34.png" 
          }
        ];
    return (
        <>
          <CommonGridBox3Scrollable title={title} description={description} data={data} />
          <p className='max-w-[1200px] text-center mx-auto mb-30'>Our dual expertise in system architecture and UX design makes us a trusted partner for projects where success depends on both technology and user experience.</p>
        </>
    );
}