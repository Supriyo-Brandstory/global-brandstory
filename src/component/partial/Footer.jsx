import styles from '@/style/footer.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
      <div className={styles.topStats}>
        <div className={styles.stat}>
          <h3>32,00,000+ M</h3>
          <p>Leads Generated for growth-hungry brands</p>
        </div>
        <div className={styles.stat}>
          <h3>₹ 5,200+ Cr</h3>
          <p>Client Revenue Influenced across digital touchpoints</p>
        </div>
        <div className={styles.stat}>
          <h3>11+ Years</h3>
          <p>of Creative Intelligence driving measurable results</p>
        </div>
        <div className={`${styles.stat} `} style={{ borderRight: 'none' }}>
          <h3>1 Goal</h3>
          <p>Your Business Growth everything else is strategy</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.brandSection}>
          <img src="/white-logo.svg" alt="logo" className={styles.logo}/>
          <p>A Full-Stack Digital Agency <br/>11+ Years, 250+ Clients, 30+ Industries</p>
          <p className={styles.callButtontext}>Ready to speak with a consultant?</p>
          <button className={styles.callButton}>CALL US NOW</button>
        </div>

        <div className={styles.column}>
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Our Works</li>
            <li>Partners</li>
            <li>Our Clients</li>
            <li>Careers</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>DEVELOPMENT</h4>
          <ul>
            <li>Software Development Services</li>
            <li>Web Development Services</li>
            <li>Mobile App Development</li>
            <li>Web Application Development</li>
            <li>UI/UX Design Services</li>
            <li>Full Stack Development</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>CREATIVE & MEDIA PRODUCTION</h4>
          <ul>
            <li>Video Production</li>
            <li>Photography</li>
            <li>Corporate Video</li>
            <li>Corporate Photography</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>CONSULTING</h4>
          <ul>
            <li>Digital Transformation Services</li>
            <li>IT Consulting Services</li>
            <li>Cybersecurity Services</li>
            <li>Data Analytics Services</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>DIGITAL MARKETING</h4>
          <ul>
            <li>Digital Marketing Services</li>
            <li>SEO Services</li>
            <li>Social Media Marketing</li>
            <li>B2B Marketing</li>
            <li>B2C Marketing</li>
            <li>Content Marketing</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>BRANDING</h4>
          <ul>
            <li>Branding Services</li>
            <li>Brand Strategy & Positioning</li>
            <li>Brand Identity Design</li>
            <li>Brand Messaging & Copywriting</li>
            <li>Visual Branding & Collateral Design</li>
            <li>Rebranding Services</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>Frontend Technologies</li>
            <li>Backend Technologies</li>
            <li>Mobile App</li>
            <li>Cloud</li>
            <li>AI/ML & Data Technologies</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>INDUSTRIES</h4>
          <ul>
            <li>E-commerce</li>
            <li>Healthcare</li>
            <li>Education & E-learning</li>
            <li>Real Estate</li>
            <li>Finance & Banking</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>END-TO-END BRILLIANCE, POWERED BY BRANDSTORY</p>
        <div className={styles.bottomLinks}>
          <div className={styles.policyLinks}>
          <a href="#">Sitemap</a>
          <a href="#">Privacy & Terms of Use</a>
          </div>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/icons/facebook-icon.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/instagram-icon.svg" alt="Instagram" /></a>
            <a href="#"><img src="/icons/youtube-icon.svg" alt="YouTube" /></a>
            <a href="#"><img src="/icons/linkedin-icon.svg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}