import CommonArrowGrid from '@/component/pages/common/CommonArrowGrid'

export const B2CArrowGrid = () => {
    // Updated heading and description based on the image
    const heading = "More on Our B2C Services"
    const description = "Explore Adjacent Services To Complement Your Growth:"
    
    // Updated boxesData to match the 5 items in the image
    const boxesData = [
    {
        // Box 01
        title: "Conversion Rate Optimization",
        description: "Improve Website Performance To Turn More Visitors Into Paying Customers.",
        theme: "light",
        size: "sm" // Keeping original size properties
    },
    {
        // Box 02
        title: "Ecommerce Growth Marketing",
        description: "Scale Your Online Store With Strategies That Drive Traffic And Sales.",
        theme: "dark",
        size: "md" // Keeping original size properties
    },
    {
        // Box 03
        title: "SEO For B2C",
        description: "Boost Visibility And Reach The Right Customers Through Targeted Search Optimization.",
        theme: "dark",
        size: "sm" // Keeping original size properties
    },
    {
        // Box 04
        title: "Social Media For B2C",
        description: "Engage And Grow Your Audience With Tailored Social Media Campaigns.",
        theme: "dark",
        size: "sm" // Keeping original size properties
    },
    {
        // Box 05
        title: "Performance Marketing For B2C",
        description: "Maximize ROI With Data-Driven Campaigns Focused On Measurable Results.",
        theme: "dark",
        size: "sm" // Keeping original size properties
    },
  ];
  
    return (
    <CommonArrowGrid boxes={boxesData} heading={heading} descripton={description}/>
    );    
}