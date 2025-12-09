import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const StrategiesFor = ()=>{
    const title = "Strategies for Uninterrupted Performance";
    const description = "Our strategies ensure every system operates optimally:";
    const data = [
          {
            "title": "Continuous Monitoring",
            "description": "We continuously track your software’s performance, security, and stability in real-time. This proactive oversight allows us to detect anomalies early, prevent downtime, and ensure your systems run smoothly around the clock.",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s28.png" 
          },
          {
            "title": "AI-Powered Predictive Maintenance",
            "description": "Using advanced analytics and machine learning, we anticipate potential failures before they occur. This predictive approach minimizes unexpected disruptions, reduces operational risks, and allows for planned, efficient maintenance activities.",
            "bgcolor": "#474574", 
            "logo": "/images/square-images/s45.png" 
          },
          {
            "title": "DevOps & CI/CD Integration",
            "description": "Maintenance is seamlessly incorporated into your development pipeline. By combining DevOps practices and continuous integration/continuous deployment, updates, patches, and improvements are delivered efficiently without interrupting day-to-day operations.",
            "bgcolor": "#3e484b", 
            "logo": "/images/square-images/s46.png" 
          },
          {
            "title": "Cloud-Native & Container Maintenance",
            "description": "We optimize and maintain applications deployed in cloud environments or managed with containers. This ensures high performance, scalability, and reliability while taking full advantage of modern infrastructure capabilities.",
            "bgcolor": "#6d3119", 
            "logo": "/images/square-images/s47.png" 
          },
          {
            "title": "Sustainable Coding Practices",
            "description": "Beyond performance, we focus on efficiency and sustainability. By adopting clean, efficient coding standards, we reduce resource consumption, improve maintainability, and help align your software with environmental, social, and governance (ESG) objectives.",
            "bgcolor": "#474574", 
            "logo": "/images/square-images/s48.png" 
          }
        ];
    return (
        <>
          <CommonGridBox3Scrollable boxHeight='400px' title={title} description={description} data={data} />
          <p className='max-w-[1200px] text-center mx-auto mb-30'>Each strategy minimizes downtime, reduces technical debt, and ensures long-term software reliability.</p>
        </>
    );
}