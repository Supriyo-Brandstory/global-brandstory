import { CommonBigIndex } from "../common/CommonBigIndex"

export const ClientStories = () => {
  const heading = "Client Stories"
  
  const cases = [
    {
      title: "Legacy Site Support For Enterprise",
      description:
        "A multinational corporation faced frequent downtime due to an outdated platform. Our strategic audit revealed multiple vulnerabilities. We implemented our proactive maintenance plan, updated all CMS and plugins, and established ongoing monitoring. Result: 99.9% uptime and improved page speed, leading to higher engagement and reduced bounce rates."
    },
    {
      title: "Performance Optimization For E-Commerce",
      description:
        "An online retailer struggled with slow loading times and checkout issues. We optimized images, cleaned code, and implemented caching strategies. Result: conversion rates increased by 22%, and organic traffic improved thanks to faster site performance."
    },
    {
      title: "Security And Compliance For A Professional Services Firm",
      description:
        "A legal services website faced a potential data breach risk. We conducted security scans, installed firewalls, and scheduled regular backups. Result: zero security incidents and enhanced client trust."
    },
  ]
  
  return <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        heading={heading}
    />
}