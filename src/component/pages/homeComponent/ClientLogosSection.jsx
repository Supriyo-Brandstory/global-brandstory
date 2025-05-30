import styles from '@/style/homepage.module.css';

const clientsRow1 = [
    { image: '/images/clientlogo/white-gold.svg', alt: 'white-gold' },
    { image: '/images/clientlogo/secure-ends.svg', alt: 'secure-ends' },
    { image: '/images/clientlogo/sobha.svg', alt: 'sobha' },
    { image: '/images/clientlogo/flipkart.svg', alt: 'flipkart' },
    { image: '/images/clientlogo/amazon-flex.svg', alt: 'amazon-flex' },
    { image: '/images/clientlogo/ldt.svg', alt: 'ldtentview' },
    { image: '/images/clientlogo/crowdstrike.svg', alt: 'crowdstrike' },
];

const clientsRow2 = [
    { image: '/images/clientlogo/decatholn.svg', alt: 'decathlon' },
    { image: '/images/clientlogo/applo.svg', alt: 'applo hospital' },
    { image: '/images/clientlogo/adarash.svg', alt: 'adarsh group' },
    { image: '/images/clientlogo/provident.svg', alt: 'provident more for secure' },
    { image: '/images/clientlogo/carafina.svg', alt: 'carafina' },
    { image: '/images/clientlogo/ayurcentral.svg', alt: 'ayurcentral' },
    { image: '/images/clientlogo/pkc.svg', alt: 'pkc' },
    
];

const clientsRow3 = [
    { image: '/images/clientlogo/warner.svg', alt: 'warner bros discovery' },
    { image: '/images/clientlogo/deloiite.svg', alt: 'deloitte' },
    { image: '/images/clientlogo/siemans.svg', alt: 'siemens' },
    { image: '/images/clientlogo/merceddes-benz.svg', alt: 'mercedes-benz' },
    { image: '/images/clientlogo/farro.svg', alt: 'farro & co' },
    { image: '/images/clientlogo/ashray.svg', alt: 'ashray developers' },
];

export default function ClientLogosSection() {
    return (
        <section className={styles.ClientLogosSection_wrapper}>
            <div className={styles.ClientLogosSection_headingContainer}>
                <h2 className={styles.ClientLogosSection_mainHeading}>
                    Your Next Big Move Starts Here.
                </h2>
                <p className={styles.ClientLogosSection_subHeading}>You Can Be One of Them</p>
                <p className={styles.ClientLogosSection_description}>
                    A Quick Look At The Brands We've Partnered With — And The Results That Followed.
                </p>
            </div>

            <div className={styles.ClientLogosSection_marqueeWrapper}>
                <div className={styles.ClientLogosSection_marqueeLeft}>
                    <div className={styles.ClientLogosSection_logosRow}>
                        {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((src, i) => (
                            <img key={`row1-${i}`} src={src.image} alt={src.alt} />
                        ))}
                    </div>
                </div>

                <div className={styles.ClientLogosSection_marqueeRight}>
                    <div className={styles.ClientLogosSection_logosRow}>
                        {[...clientsRow2, ...clientsRow2, ...clientsRow2, ...clientsRow2].map((src, i) => (
                            <img key={`row2-${i}`} src={src.image} alt={src.alt} />
                        ))}
                    </div>
                </div>

                <div className={styles.ClientLogosSection_marqueeLeft}>
                    <div className={styles.ClientLogosSection_logosRow}>
                        {[...clientsRow3, ...clientsRow3, ...clientsRow3].map((src, i) => (
                            <img key={`row3-${i}`} src={src.image} alt={src.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}