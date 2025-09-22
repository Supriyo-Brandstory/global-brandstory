import styles from '@/style/common/commonAdvertise.module.css';
import Link from 'next/link';

const CommonAdvertise = ({btnOneLink, btnTwoLink, btn1, btn2, title1, title2, description}) =>{
    
    return (
        <div className={styles.frame}>
            <div className={styles.innerFrame}>
                <span>
                    <h2 className={styles.heading}>{title1}</h2>
                    {title2 && <p>{title2}</p>}
                </span>
                {description && <p>{description}</p>}
                <div class="flex gap-x-4">
                  <Link href={btnOneLink} class="orange-btn">
                    {btn1}
                  </Link>
                  <Link href={btnTwoLink} class="orange-btn-transparent">
                    {btn2}
                  </Link>
                </div>
            </div>
        </div>
    ); 
}

export default CommonAdvertise;