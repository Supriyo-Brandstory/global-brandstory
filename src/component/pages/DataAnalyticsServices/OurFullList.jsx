import React from 'react';
import CommonTwoImgDesc from "../common/CommonTwoImgDesc";

export const OurFullList = () => {
    const data = {
        heading: "Our Full List of Data Analytics Services",
        subHeading: "You Don't Need Everything. You Just Need What Works. Here's What We Offer:",
        rows: [
            {
                img: "/images/DataAnalyticsServices/1.png",
                alt: "Big Data Analytics Dashboard",
                text: [
                    `<b>Big Data Services That Help You Act In Real Time</b><br/>Our Big Data Analytics Services Help You Handle Large Volumes Of Information Quickly.<br/><br/>
                    <ul>
                        <li><b>Get Real-Time Insights With The Right Tools</b><br/>We Use Platforms Like Hadoop, Spark, And Cloud Data Lakes To Bring You Live Updates.</li><br/>
                        <li><b>Understand Complex Data With Ease</b><br/>We Organize Raw, Messy Data Into Clear Patterns So Your Team Can Focus On Action Instead Of Analysis.</li><br/>
                        <li><b>Connect Everything For Faster, Better Decisions</b><br/>Your Systems, CRM, ERP, Apps, Or Sensors, Don’t Have To Live In Silos. We Bring Them Together So Your Decisions Are Backed By The Full Picture.</li>
                    </ul>`
                ],
                reverse: false
            },
            {
                img: "/images/DataAnalyticsServices/2.png",
                alt: "Data Visualization on Laptop",
                text: [
                    `<b>Data Visualization That Shows You The Full Picture</b><br/>Our Data Analytical Services Make It Easier To See What’s Going On.<br/><br/>
                    <ul>
                        <li><b>Design Custom Dashboards In Power BI, Tableau, And More</b><br/>You Get One View That Shows Everything You Need, From Sales Trends To Customer Behavior.</li><br/>
                        <li><b>Turn Complex Data Into Easy-To-Read Visuals</b><br/>No Need To Dig Through Spreadsheets. We Build Dashboards That Highlight What Matters Most.</li><br/>
                        <li><b>Catch Patterns And Changes Before They Slip By</b><br/>Spot Trends Early And Act On Them. Whether It’s A Dip In Performance Or A Sudden Spike, You’ll Always Be In The Know.</li>
                    </ul>`
                ],
                reverse: true
            }
        ]
    };

    return <CommonTwoImgDesc data={data} />;
};
