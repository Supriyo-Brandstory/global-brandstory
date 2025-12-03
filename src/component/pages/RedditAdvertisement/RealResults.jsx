import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const RealResults = ()=>{
    const title = "Real Results from Real Reddit Campaigns";
    const description = ""; 
    const data = [
          {
            "title": "Gaming Brand",
            "description": "Signups Went Up By 270%. We Made Ads That Used The Words And Style The Community Likes. People Felt The Ads Were Part Of Their Group, So Many Joined Quickly.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s19.png"
          },
          {
            "title": "Tech SaaS",
            "description": "The Brand Made $30K In Just 2 Weeks. We Shared Ads In 3 Small Communities Where People Wanted New Technology. The Right People Saw The Ads, Tried The Product, And Bought It Fast.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s18.png"
          },
          {
            "title": "Crypto Launch",
            "description": "Engagement Went Up By 350%. We Showed The Ads To People Who Like Blockchain And Crypto. Many Clicked, Liked, And Shared The Posts Because The Ads Spoke To Them.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s17.png"
          }
        ];
    return (
        <CommonGridBox3 title={title} description={description} data={data} />
    );
}