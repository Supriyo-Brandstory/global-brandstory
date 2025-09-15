'use client'
import styles from "@/style/common/commonArrowGrid.module.css";
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from "lucide-react";

const CommonArrowGrid = ({ boxes }) => {
    return (
        <div className={styles.frame}>
            <div className={styles.header}>
                <h1>Explore More of Our SEO Marketing Services</h1>
                <p>Our expertise covers every area of search optimisation. Depending on your business goals, you may also want to explore:</p>
            </div>
            <div className={styles.gridContainer}>
                {boxes.map((box, index) => (
                    <GridBox
                        key={index}
                        index={String(index + 1).padStart(2, '0')}
                        title={box.title}
                        description={box.description}
                        theme={box.theme || "dark"}
                        size={box.size || "md"}
                    />
                ))}
            </div>
        </div>
    )
}

const GridBox = ({index, title, description, theme = "dark", size = "md"}) => {
    const [calculatedHeight, setCalculatedHeight] = useState(null);
    const boxRef = useRef(null);
    
    // Get the background image path based on theme and size
    const getBackgroundImage = () => {
        if (theme === 'light') {
            return '/images/container-rounded-bg-white.png';
        }
        return `/images/container-rounded-bg-${size}.png`;
    };

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            if (boxRef.current) {

                // Get the current width of the box
                const boxWidth = boxRef.current.offsetWidth;
                
                // Calculate height based on image aspect ratio
                const aspectRatio = img.naturalHeight / img.naturalWidth;
                const newHeight = boxWidth * aspectRatio;                
                setCalculatedHeight(newHeight);
            }
        };
        img.src = getBackgroundImage();
    }, [theme, size]);

    // Also recalculate on window resize
    useEffect(() => {
        const handleResize = () => {
            if (boxRef.current && calculatedHeight) {
                const img = new Image();
                img.onload = () => {
                    const boxWidth = boxRef.current.offsetWidth;
                    const aspectRatio = img.naturalHeight / img.naturalWidth;
                    const newHeight = boxWidth * aspectRatio;
                    setCalculatedHeight(newHeight);
                };
                img.src = getBackgroundImage();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [calculatedHeight, theme, size]);

    return (
        <div 
            ref={boxRef}
            className={`${styles.gridbox} ${styles[theme]} ${styles[size]} ${index == 1 ? `${styles.firstbox}` : ''}`}
            style={{
                backgroundImage: `url(${getBackgroundImage()})`,
                height: calculatedHeight ? `${calculatedHeight}px` : 'auto',
                minHeight: calculatedHeight ? 'unset' : '200px' // fallback while loading
            }}
            >
            <div className={styles.indexNumber}>{index}</div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.arrow}>
                {theme !== 'light'? <img src="images/arrow-right.png" alt="arrow" /> :  
                <img src="images/arrow-top-right.png" alt="arrow" />}
               
            </div>
        </div>
    )
}

export default CommonArrowGrid;
