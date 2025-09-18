// SMMSocialMediaTools.jsx
import { CommonThreeCardBlur } from "../common/CommonThreeCardBlur"

export const SMMSocialMediaTools = ()=>{
    const data = [
        {
            logo: "/images/three-card-icon-1.png",
            title: "Hootsuite, Buffer, Sprout Social",
            description: "These help us post on time and see how posts perform."
        },
        {
            logo: "/images/three-card-icon-2.png",
            title: "Later, Canva",
            description: "These help us design nice pictures, videos, and plan content in advance."
        },
        {
            logo: "/images/three-card-icon-3.png",
            title: "Google Analytics",
            description: "This shows how social media brings people to your website and helps you see what turns into sales."
        }
    ]

    return (
       <CommonThreeCardBlur data={data}/>
    )
}
