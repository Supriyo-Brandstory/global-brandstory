import CommonGridBox3Scrollable from "../common/CommonGridBox3Scrollable";

export const TheUnique = () => {
  const title = "The Unique Advantages of Partnering with Our Professional Team";
  const description = "Partnering with us means more than just technical support. We bring:";
  const data = [
    {
      "title": "Expert Website Support",
      "description": "We combine strategic oversight with hands-on technical expertise to ensure your website runs smoothly, remains secure, and consistently delivers results. Your site is in capable hands, with experts managing every detail.",
      "bgcolor": "#6d3119",
      "logo": "/images/square-images/s49.png"
    },
    {
      "title": "Transparent Reporting",
      "description": "You'll always know your website's health and progress. Our clear, actionable reports provide insights into performance, security, updates, and optimization efforts, keeping you informed and in control.",
      "bgcolor": "#474574",
      "logo": "/images/square-images/s42.png"
    },
    {
      "title": "Long-Term Partnership",
      "description": "We focus on continuous improvement rather than quick fixes. By building a long-term partnership, we help your website evolve alongside your business, ensuring it remains an effective and valuable asset.",
      "bgcolor": "#3e484b",
      "logo": "/images/square-images/s10.png"
    },
    {
      "title": "Lower Total Cost Of Ownership (TCO)",
      "description": "Proactive maintenance and early issue detection prevent expensive emergency fixes. By addressing potential problems before they escalate, we reduce overall costs and keep your website running efficiently.",
      "bgcolor": "#6d3119",
      "logo": "/images/square-images/s14.png"
    },
    {
      "title": "Maximized Uptime & Revenue",
      "description": "Smooth, uninterrupted website performance ensures your visitors have a seamless experience, minimizing downtime and maximizing opportunities for conversions, engagement, and revenue generation.",
      "bgcolor": "#474574",
      "logo": "/images/square-images/s24.png"
    },
    {
      "title": "Enhanced SEO & Organic Traffic",
      "description": "Well-maintained, fast-loading websites rank better in search engines. By optimizing technical aspects and performance, we help improve SEO, attract more organic traffic, and increase visibility for your business.",
      "bgcolor": "#3e484b",
      "logo": "/images/square-images/s16.png"
    },
    {
      "title": "Extended Website Lifespan",
      "description": "Through careful maintenance, updates, and performance tuning, we extend your website's lifespan. Your site continues to serve as a reliable, high-performing business asset for years to come.",
      "bgcolor": "#6d3119",
      "logo": "/images/square-images/s43.png"
    }
  ];

  return (
    <CommonGridBox3Scrollable boxHeight="350px" title={title} description={description} data={data} />
  );
}