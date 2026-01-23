import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const SDArrow = () => {
    const heading = "Comprehensive Development Services — All Under One Roof"
    const description = "Our Extended Offerings Include:"
    
    const boxesData = [
    {
        title: "Software Development Services",
        description: "Custom-Built Software Tailored To Meet Your Operational, Analytical, And Business-Specific Needs. From Enterprise Platforms To SaaS Products, We Help You Scale With Confidence.",
        theme: "light", 
        size: "sm" 
    },
    {
        title: "UI/UX Design",
        description: "Intuitive And User-First Design Systems That Improve Engagement, Reduce Churn, And Align Your Digital Product With Brand Expectations.",
        theme: "dark", 
        size: "md" 
    },
    {   
        title: "Web App Development",
        description: "High-Performance Web Applications Engineered For Responsiveness, Security, And Long-Term Usability.",
        theme: "dark", 
        size: "sm" 
    },
    {   
        title: "Website Design",
        description: "Mobile-First, UX-Led Websites Crafted To Convert, Combining Aesthetics, Usability, And SEO Best Practices.",
        theme: "dark", 
        size: "sm" 
    },
    { 
        title: "Full Stack Development",
        description: "Robust Front-End And Back-End Architecture That Supports Dynamic Business Applications With Future-Ready Scalability.",
        theme: "dark", 
        size: "sm" 
    },
    { 
        title: "Full Stack Development",
        description: "Robust Front-End And Back-End Architecture That Supports Dynamic Business Applications With Future-Ready Scalability.",
        theme: "dark", 
        size: "lg" 
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}