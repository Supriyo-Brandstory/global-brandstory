import styles from '@/style/homepage.module.css';
import Image from 'next/image';

const services = [
  {
    title: 'SEO Services',
    description:
      'Findable. Scalable. Measurable.<br>We Turn Search Intent Into Steady Traffic And Conversions. From On-Page SEO to Content Clusters and GA4 Tracking. No Contracts for Retainer and Value – Real ROI Only.',
    image: '/images/seo-service.webp',
    points: [
      'Keyword Strategy',
      'Technical SEO',
      'Local SEO',
      'Content Optimization',
      'Performance Reporting',
    ],
  },
  {
    title: 'Social Media Marketing',
    description:
      'Create Culture. Drive Conversation. Deliver Results.<br>With Strategy, Creativity, and Purpose, Organic Social Humanizes Brands, Builds Communities, Engagement, and Real Revenue.',
    image: '/images/social-media.webp',
    points: [
      'Instagram + Facebook Management',
      'Reels, Stories, Short Form Content',
      'LinkedIn Growth + B2B',
      'Analytics + Optimization',
      'Brand Social Campaigns',
    ],
  },
  {
    title: 'PPC Management',
    description:
      'Every Click Should Count.<br>We Manage Your Budget Like Our Own. Search, Display, YouTube, and Social Ads Optimized Continuously for Clicks, Results, and Conversion ROI.',
    image: '/images/ppc-management.webp',
    points: [
      'Google Ads Search, Display, Shopping',
      'YouTube Performance Max',
      'Meta, LinkedIn, and Remarketing Campaigns',
      'Keyword, Audience & Intent Targeting',
      'Landing Page CRO',
    ],
  },
  {
    title: 'Content Marketing',
    description:
      'Stories That Educate, Sell, and Scale.<br>We Create Content Systems – Not Just Blogs. Every Word is Written With Strategy, Customer Journey, Built Authority, and Drive Action.',
    image: '/images/content-marketing.webp',
    points: [
      'Blogs, Guides & Whitepapers',
      'SEO-Focused Content Hubs',
      'Website + Product Copy',
      'Content Calendar + Scripts',
      'Email Sequences',
    ],
  },
  {
    title: 'Online Reputation Management (ORM)',
    description:
      'Build Trust. Re-Gain Control. Prevent Crises.<br>We Monitor, Protect, and Strengthen Your Brand Across Google Reviews, Social, Web, and PR – While Turning Review Sentiment into Strategic Growth.',
    image: '/images/orm.webp',
    points: [
      'Review Strategy & Management',
      'Brand Mention Tracking',
      'Google Profile Optimization',
      'Click Integration Systems',
      'CR/PR Pushbacks',
    ],
  },
  {
    title: 'Marketing Automation',
    description:
      'Smarter Work. More Results. Less Hassle.<br>From Welcome Emails to Abandoned Cart Flows, We Build Automation Systems That Fuel Measurable Buyer Results.',
    image: '/images/marketing-automation.webp',
    points: [
      'Hubspot Marketing Customization',
      'Lead Nurturing Sequences',
      'Behavioral Email Triggers',
      'CRM Integration',
      'Drip Campaigns',
    ],
  },
  {
    title: 'B2B Marketing',
    description:
      'We Speak B2B Fluently.<br>We Help You Connect with Real Human Decision-Makers and Win Deals With Content-Driven, Funnel-Focused, ROI-First Marketing Strategy.',
    image: '/images/b2b-marketing.webp',
    points: [
      'ABM Strategy',
      'LinkedIn Ads + Lead Forms',
      'Webinars + Case Studies',
      'Form + CRM Alignment',
      'Industry-Specific Landing Pages',
    ],
  },
  {
    title: 'B2C Marketing',
    description:
      'Make People Click. Make Them Come Back.<br>We Drive Connection With Ads That Speak B2C eCommerce, Retail, and Direct-to-Consumer Brands.',
    image: '/images/b2c-marketing.webp',
    points: [
      'Full-Funnel Campaigns',
      'Creative Ad + Influencer Collabs',
      'Retention Sequences',
      'UGC Campaigns',
      'Promotion Calendars + Conversions',
    ],
  },
];


export default function MarketingServices() {
  return (
    <section className={styles.MarketingServices_container}>
      <div className={styles.MarketingServices_left}>
        <h2>Clicks, Leads, Sales — All in Sync</h2>
        <p>
          Every Campaign We Launch Is Backed By Research, Optimized By Data, And Crafted With Creative That Converts.
        </p>
        <span>Our Core Digital Marketing Services</span>
      </div>

      <div className={styles.MarketingServices_right}>
        {services.map((service, index) => (
          <div className={styles.MarketingServices_card} key={index}>
            <Image
              src={service.image}
              alt={service.title}
              width={572}
              height={576}
              className={styles.MarketingServices_card_img}
            />
            <div>
              <h3>{service.title}</h3>
              <div className={styles.MarketingServices_card_description} dangerouslySetInnerHTML={{ __html: service.description }}></div>
              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
