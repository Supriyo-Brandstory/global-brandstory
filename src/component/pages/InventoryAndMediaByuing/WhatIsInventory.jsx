import styles from '@/style/marketingAutomation.module.css'

export const WhatIsInventory = () => {
    return (
        <div className={`${styles.frame} py-30 text-center`}>   
            <h2>What is Inventory & Media Buying in<br />Digital Advertising?</h2><br />
            <div className='px-10'>
                <p>
                    Media buying goes far beyond reserving space on a web page. It is about securing access to the most effective digital inventory across channels and devices. Through programmatic buying, real time bidding, and direct publisher relationships, we make sure your ads show up in the right context, at the right time, to the right audience.
                </p>
                <br />
                <p>
                    Effective media planning and buying is both art and science. It involves understanding user behavior, analyzing inventory sources, and utilizing data to deliver your brand story where it will perform best. Whether you are running videos on YouTube, display banners on news sites, or OTT ads on smart TVs, it's about placing each impression with purpose.
                </p>
            </div>
        </div>
    )
}