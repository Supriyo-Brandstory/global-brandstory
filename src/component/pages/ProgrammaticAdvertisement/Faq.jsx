import React from 'react';
import CommonFAQ from '@/component/pages/common/CommonFAQ';

export const Faq = () => {
    const data = [
        {
            title: "How is Programmatic Advertising Different From Traditional Digital Ads?",
            description: "Programmatic advertising automates the ad buying process. It uses data and AI to place ads quickly and efficiently. Unlike traditional ads, which require manual buying and placement, programmatic ads reach the right audience faster and smarter, saving time and money."
        },
        {
            title: "Which Platforms Do You Run Programmatic Ads On?",
            description: "We run campaigns on major demand-side platforms (DSPs) like DV360, The Trade Desk, StackAdapt, and more. This lets us reach people across websites, apps, video, audio, and connected TV, making your campaigns more effective."
        },
        {
            title: "Do You Support CTV And Audio Programmatic Ads?",
            description: "Yes. Our programmatic services cover Connected TV (CTV), programmatic audio, and digital out-of-home (DOOH). This allows your ads to reach people while they watch shows, listen to music, or move around in public, giving your brand a wider presence."
        },
        {
            title: "What’s The Minimum Budget Required To Get Started?",
            description: "Campaigns can start from $2,500 per month, depending on your goals and platform mix. We help you spend your budget wisely to reach the right audience and get measurable results."
        },
        {
            title: "Can You Help Us Build Programmatic Creatives Too?",
            description: "Absolutely. We create Dynamic Creative Optimization (DCO), static ads, and video ads for each platform. This ensures your ads look good, match the audience, and drive actions like clicks, sign-ups, or purchases."
        },
        {
            title: "How Do You Ensure Transparency And Avoid Ad Fraud?",
            description: "We use industry-leading fraud detection tools to stop fake clicks or traffic. We also provide full reporting access, so you can see exactly how your campaigns perform and know your budget is being used correctly."
        }
    ];

    return <CommonFAQ data={data} />;
};