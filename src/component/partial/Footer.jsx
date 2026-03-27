import styles from '@/style/footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer_container} px-4`}>

        {/* Top Stats */}
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
          <div className={styles.stat} style={{ borderRight: 'none' }}>
            <h3>1 Goal</h3>
            <p>Your Business Growth — everything else is strategy</p>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>

          {/* Brand */}
          <div className={styles.brandSection}>
            <Link href="/">
              <img src="/white-logo.svg" alt="logo" className={styles.logo} />
            </Link>
            <p>
              A Full-Stack Digital Agency <br />
              11+ Years, 250+ Clients, 30+ Industries
            </p>
            <p className={styles.callButtontext}>Ready to speak with a consultant?</p>
            <Link href="/contact-us"><button className={styles.callButton}>CALL US NOW</button></Link>
          </div>

          {/* COMPANY */}
          <div className={styles.column}>
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/our-works">Our Works</Link></li>
              <li><Link href="/our-clients">Our Clients</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* DEVELOPMENT */}
          <div className={styles.column}>
            <h4>DEVELOPMENT</h4>
            <ul>
              <li><Link href="/services/software-development">Software Development</Link></li>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development">Mobile App Development</Link></li>
              <li><Link href="/services/full-stack-development">Full Stack Development</Link></li>
              <li><Link href="/services/front-end-development">Frontend Development</Link></li>
              <li><Link href="/services/back-end-development">Backend Development</Link></li>
            </ul>
          </div>

          {/* CREATIVE */}
          <div className={styles.column}>
            <h4>CREATIVE & MEDIA PRODUCTION</h4>
            <ul>
              <li><Link href="/services/video-production">Video Production</Link></li>
              <li><Link href="/services/photography">Photography</Link></li>
              <li><Link href="/services/video-production">Corporate Video</Link></li>
              <li><Link href="/services/photography">Corporate Photography</Link></li>
            </ul>
          </div>

          {/* CONSULTING */}
          <div className={styles.column}>
            <h4>CONSULTING</h4>
            <ul>
              <li><Link href="/services/digital-transformation">Digital Transformation</Link></li>
              <li><Link href="/services/it-consulting">IT Consulting</Link></li>
              <li><Link href="/services/cyber-security">Cybersecurity</Link></li>
              <li><Link href="/services/data-analytics">Data Analytics</Link></li>
            </ul>
          </div>

          {/* DIGITAL MARKETING */}
          <div className={styles.column}>
            <h4>DIGITAL MARKETING</h4>
            <ul>
              <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link href="/services/seo">SEO Services</Link></li>
              <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link href="/services/b2b-marketing">B2B Marketing</Link></li>
              <li><Link href="/services/b2c-marketing">B2C Marketing</Link></li>
              <li><Link href="/services/content-marketing">Content Marketing</Link></li>
            </ul>
          </div>

          {/* BRANDING */}
          <div className={styles.column}>
            <h4>BRANDING</h4>
            <ul>
              <li><Link href="/services/branding">Branding Services</Link></li>
              <li><Link href="/services/branding/strategy">Brand Strategy & Positioning</Link></li>
              <li><Link href="/services/branding/identity-design">Brand Identity Design</Link></li>
              <li><Link href="/services/branding/messaging-and-copy-writing">Brand Messaging</Link></li>
              <li><Link href="/services/branding/visual-branding">Visual Branding</Link></li>
              <li><Link href="/services/branding/rebranding">Rebranding Services</Link></li>
            </ul>
          </div>

          {/* TECHNOLOGIES */}
          <div className={styles.column}>
            <h4>TECHNOLOGIES</h4>
            <ul>
              <li><Link href="/services/front-end-development">Frontend</Link></li>
              <li><Link href="/services/back-end-development">Backend</Link></li>
              <li><Link href="/services/mobile-app-development">Mobile App</Link></li>
              <li><Link href="/services/cloud">Cloud</Link></li>
              <li><Link href="/services/ai-development">AI / ML & Data</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div className={styles.column}>
            <h4>INDUSTRIES</h4>
            <ul>
              <li><Link href="/industries/ecommerce">E-commerce</Link></li>
              <li><Link href="/industries/healthcare">Healthcare</Link></li>
              <li><Link href="/industries/education-e-learning">Education</Link></li>
              <li><Link href="/industries/real-estate">Real Estate</Link></li>
              <li><Link href="/industries/finance-and-banking">Finance & Banking</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>END-TO-END BRILLIANCE, POWERED BY BRANDSTORY</p>

          <div className={styles.bottomLinks}>
            <div className={styles.policyLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
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
