// components/TwoMinuteTips.jsx
import styles from '@/style/homepage.module.css';

const blogPosts = [
  {
    title: "Everyone’s Chasing Keywords—Here’s What Smart Brands Are Doing Instead",
    link: "#",
  },
  {
    title: "Why Views Don’t Equal Value—and What You Should Be Measuring Instead",
    link: "#",
  },
  {
    title: "Why Your Google Ads Campaign Is Bleeding Budget and the Fix You’re Missing",
    link: "#",
  },
];

export default function Bloglist() {
  return (
    <section className={styles.Bloglist_section}>
           
      <div className={styles.Bloglist_container}>
        
        <div className={styles.Bloglist_leftSticky}>
          <h2>
            <span className={styles.Bloglist_redText}>Got 2 Minutes?</span> 
            <span className={styles.Bloglist_whiteText}> Learn Something New.</span>
          </h2>
          <p className={styles.Bloglist_subtext}>
            Quick tips, smart takes, and honest insights from our team on tech, marketing,
            everything in between.
          </p>
      
        </div>
        <div className={styles.Bloglist_rightCards}>
          {blogPosts.map((post, index) => (
            <div key={index} className={styles.Bloglist_card}>
              <div className={styles.Bloglist_tag}>BLOGS</div>
              <h3 className={styles.Bloglist_title}>{post.title}</h3>
              <div className={styles.Bloglist_readMoreContainer}>
              <a href={post.link} className={styles.Bloglist_readMore}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );

}
