import { CommonBwThreeCard } from "../common/CommonBwThreeCard"

export const SafePrivate = () => {
    const title = "Safe, Private, and Secure Analytics Setup";
    const description = "Data only works when it’s secure. Our data and analytics services follow full compliance and protection protocols.";
    const footer = "";
    const data = [
        {
            "title": "Role-based access so only the right people see the right data",
            "description": `
                We set up user controls to make sure information is shared safely within your team.
            `
        },
        {
            "title": "Encrypted data paths and secure servers",
            "description": `
               From storage to transfer, your data is protected at every step. We use industry-standard encryption and reliable cloud environments.
            `
        },
        {
            "title": "Support for audits, compliance, and regulation updates",
            "description": `
               Need to meet GDPR, HIPAA, or other standards? We guide you through it all and keep you up to date when rules change.
            `
        }
    ];
    return (
        <>
            <CommonBwThreeCard rightPadding="50px" title={title} description={description}  footer={footer} cardData={data} paddingBottom="0px" />
        </>
    );
}