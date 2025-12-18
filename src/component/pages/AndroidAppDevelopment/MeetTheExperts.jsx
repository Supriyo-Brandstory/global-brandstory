import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const MeetTheExperts = () => {
    const title = "Meet the Experts Who Build and Manage Your Android Applications";
    const description = "Our Team Combines Technical Mastery With Creative Insight:";
    const footer = ""; 
    const data = [
        {
            "title": "Android Developers",
            "description": `
                Skilled in Kotlin, Jetpack Compose, MVVM, and clean architecture to build scalable, high-performance apps.
            `
        },
        {
            "title": "UX/UI Designers",
            "description": `
               Craft intuitive, visually engaging interfaces optimized for Android users.
            `
        },
        {
            "title": "Project Managers & QA team",
            "description": `
               Oversee milestones, maintain clear communication, and ensure smooth project execution. Conduct thorough testing to deliver secure and bug-free applications.
            `
        }
    ];
    return (
        <CommonBwThreeCard rightPadding="50px" title={title} description={description} footer={footer} cardData={data} />
    );
}