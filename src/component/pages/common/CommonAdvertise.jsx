import styles from '@/style/common/commonAdvertise.module.css';
import Link from 'next/link';

const CommonAdvertise = ({btnOneLink, btnTwoLink, btn1, btn2, title1, title2, description}) =>{
    
    return (
        <div className={styles.frame}>
            <div className={styles.innerFrame}>
                <span>
                    <h1 className={styles.heading}>{title1}</h1>
                    {title2 && <h1 className={styles.heading}>{title2}</h1>}
                </span>
                {description && <p>{description}</p>}
                <div class="flex gap-x-4">
                  <Link href={btnOneLink} class="orange-btn">
                    {btn1}
                  </Link>
                  <Link href={btnTwoLink} class="orange-btn">
                    {btn2}
                  </Link>
                </div>
            </div>
        </div>
    ); 
}

export default CommonAdvertise;