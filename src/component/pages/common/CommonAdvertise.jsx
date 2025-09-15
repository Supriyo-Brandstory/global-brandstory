import styles from '@/style/common/commonAdvertise.module.css';

const CommonAdvertise = () =>{
    return (
        <div className={styles.frame}>
            <div className={styles.innerFrame}>
                <span>
                    <h1 className={styles.heading}>Ready to Rank?</h1>
                    <h1 className={styles.heading}>Let’s Grow Your Organic Traffic</h1>
                </span>
                <p>
                    Get a free SEO audit and speak with an SEO strategist today. See how these SEO services can help you attract more traffic, better leads, and higher sales.
                </p>
                <div class="flex gap-x-4">
                  <button class="orange-btn">
                    Get a Free SEO Audit
                  </button>
                  <button class="orange-btn-outline">
                    Get a Free SEO Audit
                  </button>
                </div>
            </div>
        </div>
    );
}

export default CommonAdvertise;