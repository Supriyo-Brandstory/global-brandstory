import CommonGridBox3 from "../common/CommonGridBox3";
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";


export const CreatingClick = () => {
    
    const title = "Creating Click-Worthy Thumbnails and Info Cards";
    const description = "Your video’s success is often decided before the first second. A custom thumbnail is the first impression, and info cards guide viewers to take action.<br/><br/>We Design:";
    const footer ="This approach increases watch time, clicks, and subscriber growth, while making your channel feel professional and cohesive."
    const data = [
        {
            "title": "Custom thumbnails",   
            "description": "We create thumbnails that are bright, clear, and match your brand identity. This helps your videos stand out and makes people want to click.",
            "bgcolor": "#a03e17ff",
            "logo": "/images/square-images/s7.png"
        },
        {
            "title": "End screens & info cards",   
            "description": "These encourage viewers to subscribe, explore more playlists, or visit your website. They guide viewers naturally without being pushy.",
            "bgcolor": "#514f82ff",
            "logo": "/images/square-images/s8.png"
        },
        {
            "title": "Call-to-action placement",   
            "description": "We place CTAs in the right spots so viewers are more likely to take action, without interrupting their watching experience.",
            "bgcolor": "#c1ba9cff",
            "logo": "/images/square-images/s9.png"
        }
    ];
    
    return (
        <CommonGridBox3 
            boxHeight="350px"
            title={title}
            description={description}
            footer={footer}
            data={data} 
        />
    );
}
