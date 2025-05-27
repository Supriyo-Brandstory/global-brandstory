import React from 'react'
import style from '@/style/homepage.module.css'

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.bannerContent}>
                <h1 className={style.bannerHeading}>Everything Your Brand Needs to <br/>Grow — In One Digital Agency</h1>
                <p className={style.banerParagraph}>Just one sharp, plugged-in team delivering strategy, design, content, tech, and marketing — all under one roof.</p>
                <button className={style.bannerButton}>Let’s Talk</button>

                <ul className={style.bannerList}>
                    <li>Strategy</li>
                    <li>DESIGN</li>
                    <li>MARKETING</li>
                    <li>VIDEO</li>
                    <li>DEVELOPMENT</li>
                    <li>ANALYTICS</li>
                </ul>
            </div>
        </div>
    )
}

export default Banner