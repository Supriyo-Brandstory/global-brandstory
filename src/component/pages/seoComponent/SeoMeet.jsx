import styles from "@/style/smm.module.css";

export const SeoMeet = () => {
  return (
    <div className={styles.frame}>
      <h2 className={`${styles.heading} ${styles.center}`}>
        Meet the Experts: Your Team for Digital Growth
      </h2>
      <p className={styles.center}>
        Our team is made up of SEO strategists, technical specialists, content
        creators, and analysts. Each brings a unique skill set and a shared
        focus on delivering measurable growth.
      </p>

      <div className={styles.contentWrapper}>
        {/* Left Side Text */}
        <div className={styles.left}>
          <ul>
            <li>
              Many of our SEO experts are certified in Google Analytics and
              trained in SEO strategy, technical optimisation, and content
              marketing. Collectively, they have worked on hundreds of projects
              across industries and business sizes.
            </li>
            <li>
              We start by understanding your goals, then create a plan tailored
              to your business. You stay informed at every stage. Clients are
              treated as partners, never as account numbers.
            </li>
            <li>
              Why Us – Choosing this team means gaining experienced
              professionals who care about your results. Every decision is made
              to increase your visibility, authority, and revenue.
            </li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className={styles.right}>
          <img src="/images/seo/seo-meet.png" alt="Advertising" />
        </div>
      </div>
    </div>
  );
};
