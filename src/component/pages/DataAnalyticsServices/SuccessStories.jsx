import { CommonBigIndex } from "../common/CommonBigIndex"

export const SuccessStories = () => {
  const heading = "Success Stories Backed by Data"
  const description = ""
  const footer = "Let Us Show You What Your Next Campaign Could Look Like"
  const cases = [
    {
      title: "Big Data in Retail",
      description: `
        <b>Client:</b><br/>
        National Retail Chain<br/><br/>
        <b>Problem:</b><br/>
        Forecasting and supply visibility were off<br/><br/>
        <b>Fix:</b><br/>
        Built real-time dashboards across POS and supply chain<br/><br/>
        <b>Results:</b><br/>
        45% better forecasts, 28% lower holding costs
      `
    },
    {
      title: "Dashboards for SaaS",
      description: `
        <b>Client:</b><br/>
        B2B Product Company<br/><br/>
        <b>Problem:</b><br/>
        Leadership couldn’t track usage or performance<br/><br/>
        <b>Fix:</b><br/>
        Built custom Power BI dashboards with automated reporting<br/><br/>
        <b>Results:</b><br/>
        60% faster decisions, 90% less manual reporting
      `
    },
    {
      title: "DAaaS for Healthcare",
      description: `
        <b>Client:</b><br/>
        Diagnostics Startup<br/><br/>
        <b>Problem:</b><br/>
        No in-house analytics team<br/><br/>
        <b>Fix:</b><br/>
        Offered full data analytics as a service with weekly insights<br/><br/>
        <b>Results:</b><br/>
        Bookings rose by 25% in 3 months
      `
    },
  ]
  
  return (
    <CommonBigIndex 
        caseLabel="Case"
        data={cases}
        description={description}
        heading={heading}
        paddingBottom={0}
    />
  )
}