// components/ImpactStats.jsx
import styles from '@/style/homepage.module.css';

const stats = [
  {
    icon: '/icons/brands.svg',
    text: "500+ Brands Served — From Early-Stage To Enterprise",
    background: '#FFEFE9'
  },
  {
    icon: '/icons/projects.svg',
    text: "1200+ Projects Delivered Across Web, Brand, And Marketing",
    background: '#FFFFFF'

  },
  {
    icon: '/icons/organic-growth.svg',
    text: "5.5x Avg. Organic Growth Delivered For Retainer Clients",
       background: '#FFEFE9'

  },
  {
    icon: '/icons/content.svg',
    text: "140M+ Content Views Across YouTube, Reels, And Paid Media",
      background: '#FFFFFF'

  },
  {
    icon: '/icons/countries.svg',
    text: "12+ Countries Served With Local Insight And Global Fluency",
         background: '#FFEFE9'

  },
  {
    icon: '/icons/clients.svg',
    text: "92% Client Retention Rate Over The Past 3 Years",
      background: '#FFFFFF'

  }
];

export default function ImpactStats() {
  return (
    <section className={styles.impact_container}>
      <h2 className={styles.impact_heading}>How Do We Make a Difference?</h2>
      <div className={styles.impact_grid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.impact_box} style={{ backgroundColor: stat.background }}>
            {stat.icon && 
              <img className={styles.impact_icon} src={stat.icon} alt={stat.text} />
            }
            <div className={styles.impact_text}>{stat.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
