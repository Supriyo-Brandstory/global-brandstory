import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const HowWeOptimize = () => {
    const title = "How We Optimize Front-End Development With Targeted Strategies";
    const description = "To ensure every project drives results, we focus on:";
    const data = [
          {
            "title": "Blazing-Fast Interfaces",
            "description": "We leverage modern frameworks like React.js, Vue.js, and Next.js to create responsive, high-performance websites. Every interaction is optimized for speed, ensuring visitors enjoy a seamless and engaging experience across all devices.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s23.png"
          },
          {
            "title": "Custom-Coded Solutions",
            "description": "Off-the-shelf solutions rarely meet unique business requirements. Our developers craft tailored front-end solutions, addressing your specific needs while maintaining clean, modular, and maintainable code for long-term scalability.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s48.png"
          },
          {
            "title": "Seamless CMS Integration",
            "description": "We empower your team to manage content effortlessly by integrating WordPress, Sanity, or Contentful. These CMS platforms provide intuitive interfaces and flexibility while keeping your website secure, organized, and easy to update.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s46.png"
          },
          {
            "title": "Accessibility & SEO",
            "description": "Our websites are built to be accessible and discoverable. We follow WCAG accessibility standards and SEO-first practices, ensuring that your site reaches a broader audience while providing an inclusive, user-friendly experience.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s20.png"
          },
          {
            "title": "Robust QA",
            "description": "Quality assurance is central to our development process. We conduct unit testing, end-to-end testing, and cross-browser verification to catch and resolve issues before launch, delivering websites that perform flawlessly from day one.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s13.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable boxHeight='350px' title={title} description={description} data={data} />
    );
}