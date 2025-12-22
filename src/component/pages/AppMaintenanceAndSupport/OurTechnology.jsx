import React from 'react';
import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const OurTechnology = () => {
    const title = "Our Technology Partners";
    const description = "Our partnerships with top tech providers let us deliver reliable and high performing application maintenance and support services. With advanced tools and cloud platforms, we keep your apps secure and running at peak performance, always.";
    const data = [
          {
            "title": "AWS (Amazon Web Services)",
            "description": "Utilizing AWS infrastructure, we provide scalable and high availability app maintenance solutions for web and mobile applications.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s60.png"
          },
          {
            "title": "Microsoft Azure",
            "description": "With Azure, we enable smooth cloud integration, automated monitoring, and robust application support for business critical systems.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s61.png"
          },
          {
            "title": "Google Cloud Platform",
            "description": "Google Cloud helps us deliver AI driven insights, predictive analytics, and maintenance app solutions for smarter performance.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s62.png"
          },
          {
            "title": "DevOps & CI/CD Tools",
            "description": "We integrate with leading tools like Jenkins, GitLab CI/CD, Docker, and Kubernetes to ensure faster updates, smoother deployments, and smooth application maintenance and support services.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s63.png"
          },
          {
            "title": "Collaboration And Monitoring Tools",
            "description": "Using platforms like Jira, Slack, Datadog, and New Relic, we track app health in real time and provide proactive maintenance support services to keep your systems running flawlessly.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s42.png"
          }
        ];
    return (
        <CommonGridBox3Scrollable boxHeight="350px" title={title} description={description} data={data} />
    );
}