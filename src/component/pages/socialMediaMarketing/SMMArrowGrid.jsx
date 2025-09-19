import CommonArrowGrid from "../common/CommonArrowGrid"

export const SMMArrowGrid = () =>{
    const heading = "Take a Closer Look at Our Social Media Services"
    const descripton = "We use the right channels to grow your brand and reach more people:"
     const boxesData = [
    {
        title: "Enterprise SEO",
        description: "Scalable Strategies For Large, Complex Websites With Multiple Markets Or Locations.",
        theme: "light",
        size: "sm"
    },
    {
        title: "E-Commerce SEO",
        description: "Product-Focused Optimisation To Increase Visibility, Improve User Experience, And Drive More Online Sales.",
        theme: "dark",
        size: "md"
    },
    {
        title: "Link Building",
        description: "Quality Backlink Strategies That Build Authority And Strengthen Search Rankings.",
        theme: "dark",
        size: "sm"
    },
    {
        title: "Local SEO",
        description: "Targeted Optimisation To Improve Your Presence In Map Listings And Local Search Results.",
        theme: "dark",
        size: "md"
    },
  ];
    return (
        <CommonArrowGrid 
        heading={heading}
        descripton={descripton}
         boxes={boxesData}
        />
    )
}