'use client';
import React, { useState } from 'react';
import styles from '@/style/homepage.module.css';

const techData = {
    Frontend: {
        icon: '/icons/frontend.svg',
        items: [
            { name: 'Next.JS', icon: '/icons/nextjs.svg' },
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Vue', icon: '/icons/vue.svg' },
            { name: 'Angular', icon: '/icons/angular.svg' },
        ],
    },
    Backend: {
        icon: '/icons/backend.svg',
        items: [
            { name: 'Node.js', icon: '/icons/nodejs.svg' },
            { name: 'Python', icon: '/icons/python.svg' },
            { name: 'PHP', icon: '/icons/php.svg' },
        ],
    },
    'Mobile App': {
        icon: '/icons/mobile.svg',
        items: [
            { name:'Swift', icon: '/icons/swift.svg' },
            { name: 'Kotlin', icon: '/icons/kotlin.svg' },
            { name: 'Flutter', icon: '/icons/fluttericon.svg' },
            { name: 'React Native', icon: '/icons/react.svg' },
        ],
    },
    Cloud: {
        icon: '/icons/cloud.svg',
        items: [
            { name: 'AWS', icon: '/icons/aws.svg' },
            { name: 'Azure', icon: '/icons/azure.svg' },
            { name: 'Google Cloud', icon: '/icons/gcp.svg' },
        ],
    },
    'AI, ML, Data Technologies': {
        icon: '/icons/ai.svg',
        items: [
            {name:'Amazon <br> Sage Maker', icon: '/icons/sagemaker.svg'},
            {name:'Azure <br> Machine Learning', icon: '/icons/azureml.svg'},
            {name: 'TensorFlow', icon: '/icons/tensorflow.svg' },
            {name: 'PyTorch', icon: '/icons/pytorch.svg' },
        ],
    },
};

const TechTabs = () => {
    const [activeTab, setActiveTab] = useState('Frontend');

    return (
        <div className={`${styles.techtab_containerbg}`}>
            <div className={styles.techtab_container}>
                <h2 className={styles.techtab_title}>Built With the Tools That Build Today's Brands</h2>
                <p className={styles.techtab_subtitle}>
                    Not Every Agency Gets Tech Right – Or Makes It Work For Your Business. At BrandStory, We Use The Kind Of Technology That
                    Doesn’t Just Sound Smart, It Actually Helps You Grow.
                </p>

                <div className={styles.techtab_tabContainer}>
                    {Object.keys(techData).map((tab) => (
                        <div
                            key={tab}
                            className={`${styles.techtab_tab} ${activeTab === tab ? styles.techtab_active : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <img src={techData[tab].icon} alt={tab} className={styles.techtab_tabIcon} />
                            <span>{tab}</span>
                        </div>
                    ))}
                </div>

                <hr className={styles.techtab_separator} />

                <div className={styles.techtab_items}>
                    {techData[activeTab].items.map((tool) => (
                        <div className={styles.techtab_itemContainer} key={tool.name}>
                            <div className={styles.techtab_item}>
                                <img src={tool.icon} alt={tool.name} className={styles.techtab_itemIcon} />

                            </div>
                            <div className={styles.techtab_tabText} dangerouslySetInnerHTML={{__html: tool.name}}></div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechTabs;
