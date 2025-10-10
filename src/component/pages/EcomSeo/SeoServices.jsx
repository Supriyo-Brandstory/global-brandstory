import CommonTwoCard from '../common/CommonTwoCard'

export const SeoServices =()=>{
    const data = {
    
    // Updated heading based on the image's main title
    heading: "eCommerce SEO Services for All Business Types",
    
    // Removed the subheading as the image doesn't have one that fits this structure
    subheading: "", 
    cards: [
            {
              
              // Title from the image
              title: "DTC Brands (Direct-To-Consumer)",
              
              // Description from the image
              description:
                "If You Sell Directly To Customers, Your Website Is Your Main Shop. We Help You Bring In New Visitors, Keep Old Ones Coming Back, and Make Product Pages Work Better. From Smart Keyword Use To Smooth Navigation, We Make It Easier For People To Find And Buy From You.",
            },
            {
              
              // Title from the image
              title: "Marketplace Sellers (Amazon, Flipkart, Etc.)",
              
              // Description from the image
              description:
                "Selling On Big Platforms Means Tough Competition. We Help Your Products Stand Out With Strong Titles, Keyword-Rich Descriptions, And Optimized Listings So Buyers Notice You First.",
            },
            {
              
              // Title from the image
              title: "B2B eCommerce Companies",
              
              // Description from the image
              description:
                "Business Buyers Need Clear Details, Specs, And Easy Navigation. We Make Sure Your Brand Shows Up For The Right Searches, Build Trust With Strong Content, And Turn Your Site Into A Lead Machine.",
            },
            {
              
              // Title from the image
              title: "Subscription-Based eCommerce",
              
              // Description from the image
              description:
                "With Subscriptions, It’s About Keeping Customers, Not Just Getting Them. We Help You Rank For The Right Terms, Create Helpful Content, And Optimize Funnels To Boost Sign-Ups And Renewals.",
            }
        ],
    };
    
    return (
        <>
            <CommonTwoCard {...data}/>
        </>
    )
}