import styles from '@/style/homepage.module.css';

const services = [
  {
    title: 'End-to-End Software Development',
    icon: '/icons/software-development.svg',
    description:
      'Need A Web App, Dashboard, Or Platform? We Build Software From The Ground Up — With Clean Code, Smart Design, And A Plan That Fits Your Goals.',
  },
  {
    title: 'Software Consulting',
    icon: '/icons/software-consulting.svg',
    description:
      'Not sure where to begin? We help you figure it out — what to build, how to build it, and how to make it future-ready.',
  },
  {
    title: 'Custom Software',
    icon: '/icons/custom-software.svg',
    description:
      'Every business works differently. We build software that’s made just for you — no templates, no shortcuts, just exactly what you need.',
  },
  {
    title: 'Architecture & Wireframing',
    icon: '/icons/architecture-wireframing.svg',
    description:
      'Before we start building, we sketch everything out. User flows, screens, logic — so you know exactly how it’ll work before we write a single line of code.',
  },
  {
    title: 'Ongoing Support & Maintenance',
    icon: '/icons/support-maintenance.svg',
    description:
      'We don’t disappear after launch. We stay with you to fix bugs, update features, and keep things running smoothly as your business grows.',
  },
  {
    title: 'Database Development',
    icon: '/icons/database-development.svg',
    description:
      'Your data needs to be fast, secure, and easy to work with. We build the backend systems that keep your app or software stable and ready to scale.',
  },
  {
    title: 'Enterprise Software Development',
    icon: '/icons/enterprise-software.svg',
    description:
      'If you’re building for scale or running a complex setup, we’ve got you. We create custom tools and systems that match your business and play well with your existing tech.',
  },
];

export default function SoftwareSolutions() {
  return (
    <section className={styles.SoftwareSolutions_section}>
      <div className={styles.SoftwareSolutions_container}>
        <h2 className={styles.SoftwareSolutions_title}>
          Software That Solves, Scales, and Stays Ahead.
        </h2>
        <p className={styles.SoftwareSolutions_subtitle}>
          We Design, Build, And Launch Digital Products That Go Beyond The Minimum.
        </p>
        <p className={styles.SoftwareSolutions_description}>
          From First Click To Full Deployment, We Create Web Platforms, Mobile Apps, SaaS Products,
          And Custom Solutions — All Engineered To Move Fast, Stay Lean, And Grow With Your Business.
        </p>

        <div className={styles.SoftwareSolutions_grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.SoftwareSolutions_cardWrapper}>
              <div className={styles.SoftwareSolutions_cardInner}>
                <div className={styles.SoftwareSolutions_cardFront}>
                  <span><img src="/icons/right-arrow.svg" alt="right-arrow"/></span>
                  <img src={service.icon} className={styles.SoftwareSolutions_icon}/>
                  <p>{service.title}</p>
                </div>
                <div className={styles.SoftwareSolutions_cardBack}>
                  <span><img src="/icons/left-arrow.svg" alt="left-arrow"/></span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.SoftwareSolutions_results}>
          <p className={styles.SoftwareSolutions_results_title}>Results You Are Looking For</p>
          <p className={styles.SoftwareSolutions_results_description}>
            We Helped A SaaS Platform Launch From MVP To 40,000 Active Users In Just 12 Months — With A Product-First,
            Sprint-Based Delivery Model, And Scalable Cloud Infrastructure On AWS.
          </p>
        </div>
      </div>
    </section>
  );
}
