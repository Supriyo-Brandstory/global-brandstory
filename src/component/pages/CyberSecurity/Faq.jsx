import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
    const data = [
        {
            title: "What Is Included In Your Cybersecurity Services?",
            description: "Our comprehensive services typically include **risk assessment and compliance auditing**, **penetration testing**, **managed security services** (like 24/7 monitoring and threat detection), **endpoint protection**, and **incident response** planning and execution."
        },
        {
            title: "What Industries Do You Serve With Your Cybersecurity Consulting Services?",
            description: "We serve a wide range of industries with specialized needs, including **Fintech**, **Healthcare** (HIPAA compliance), **E-commerce**, **SaaS** providers, and **Government/Public Sector** organizations, tailoring our security plans to meet specific regulatory frameworks."
        },
        {
            title: "How Are Managed Cybersecurity Services Different From In-House Teams?",
            description: "Managed services offer **24/7 continuous monitoring** and access to a broad team of security experts, often at a lower cost than building a full, dedicated in-house Security Operations Center (SOC). They provide immediate scalability and expertise in the latest threats."
        },
        {
            title: "What’s The Purpose Of A Cybersecurity Assessment Service?",
            description: "The primary purpose is to get a **snapshot of your current security posture**. It identifies vulnerabilities, gaps in compliance, and potential risks across your systems and infrastructure, providing a roadmap for necessary security improvements."
        },
        {
            title: "Do You Provide Cybersecurity As A Service (CSaaS) For Small Businesses?",
            description: "Yes, we offer flexible, scalable CSaaS solutions specifically designed for small and medium-sized businesses (SMBs). These services package essential security tools and management (like endpoint protection and managed firewall) into an **affordable, easy-to-manage monthly subscription**."
        },
        {
            title: "How Do I Know If I Need A Penetration Test?",
            description: "You need a penetration test if you: **handle sensitive data** (like customer or financial information), are preparing for a **major compliance audit** (e.g., PCI-DSS, SOC 2), have recently **made major changes** to your network, or need to verify the effectiveness of your existing defenses against a real-world attack."
        }
    ];

    return (
        <FAQs data={data}/>
    )
}