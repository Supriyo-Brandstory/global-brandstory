import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const Platforms = () => {
    const title = "Platforms and Tools Behind Our<br/>Back-End Development Services";
    const description = "This stack allows us to deliver scalable, high-performing, and secure digital infrastructure tailored to your needs:";
    const data = [
        {
            "title": "Cloud Platforms",
            "description": "We deploy and manage applications on AWS, Google Cloud, and Azure, ensuring high availability, fault tolerance, and scalable infrastructure to support your business growth.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s47.png"
        },
        {
            "title": "API Development",
            "description": "Our team builds RESTful and GraphQL APIs that provide fast, secure, and well-documented communication between your front-end, third-party services, and internal systems.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s64.png"
        },
        {
            "title": "Database Management",
            "description": "We design and maintain MongoDB, PostgreSQL, MySQL, and Redis databases for efficient data storage, retrieval, and integrity, enabling high-performance applications at scale.",
            "bgcolor": "#3e484b",
            "logo": "/images/square-images/s9.png"
        },
        {
            "title": "DevOps & CI/CD",
            "description": "Through Docker, Kubernetes, and Jenkins, we streamline deployment, automate workflows, and ensure your back-end updates happen smoothly with minimal downtime.",
            "bgcolor": "#6d3119",
            "logo": "/images/square-images/s63.png"
        },
        {
            "title": "Security",
            "description": "We implement OAuth 2.0 authentication, data encryption, and regular security audits to protect sensitive information, maintain compliance, and safeguard your business reputation.",
            "bgcolor": "#474574",
            "logo": "/images/square-images/s65.png"
        }
    ];

    return (
        <CommonGridBox3Scrollable title={title} description={description} data={data} />
    );
}