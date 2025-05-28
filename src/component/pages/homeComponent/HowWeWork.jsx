// components/HowWeWork.jsx
import styles from '@/style/homepage.module.css';


const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Before We Dive In, We Listen.<br>It’s All About Understanding The Brand, The Goals, And What Success Looks Like — No Assumptions, Just Real Talk."
  },
  {
    number: "02",
    title: "Define",
    description: "Once We’re On The Same Page, We Map Out What’s Next.<br>Strategy, Timelines, And Key Moves Are Laid Out So Nothing Feels Unclear Or Rushed."
  },
  {
    number: "03",
    title: "Design",
    description: "Time To Design, Write, Create, And Build.<br>Designs Are Created, Content Takes Shape, And Platforms Are Built — All While Keeping Communication Open And Updates Flowing."
  },
  {
    number: "04",
    title: "Built",
    description: "This Is Where Everything Comes Together — Thoughtfully, Thoroughly.<br>We Bring The Plan To Life With Precision And Care, Testing As We Go And Refining What’s Needed."
  },
  {
    number: "05",
    title: "Launch",
    description: "Once Everything’s Polished And Ready, We Go Live.<br>Rollout Happens Across Channels, With Close Checks To Ensure A Smooth Start From Day One."
  },
  {
    number: "06",
    title: "Optimize",
    description: "After Launch, We Don’t Just Disappear.<br>Performance Is Tracked, Learnings Are Applied, And Improvements Keep Things Moving Forward."
  }
];

export default function HowWeWork() {
  return (
    <section className={styles.howwework_container}>
      <h2 className={styles.howwework_heading}>How We Get Things Done — Together</h2>
      <p className={styles.howwework_subheading}>
        No Jargon. No Chaos. Just A Smart, Simple Way To Build Great Things.<br />
        Here’s How We Turn Your Ideas Into Impact — Step By Step, Side By Side.
      </p>
      {steps.map(step => (
        <div key={step.number} className={styles.howwework_step}>
          <div className={styles.howwework_number}>{step.number}</div>
          <div>
            <h3 className={styles.howwework_title}>{step.title}</h3>
            <div className={styles.howwework_description} dangerouslySetInnerHTML={{ __html: step.description }}></div>
          </div>
        </div>
      ))}
    </section>
  );
}
