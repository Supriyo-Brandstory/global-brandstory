import React from 'react';
import CommonAccordion2 from '../common/CommonAccordion2';

export const Tools = () => {
  const accordionData = [
    {
      title: "1. Languages",
      content: `We build the foundation of your website using HTML5, CSS3, and modern JavaScript (ES6+), ensuring semantic, clean, and maintainable code.`,
    },
    {
      title: "2. Frameworks & Libraries",
      content: `Our team leverages React.js, Next.js, Vue.js, Angular, and Svelte to create dynamic, responsive, and interactive user interfaces.`,
    },
    {
      title: "3. State Management",
      content: `To handle complex application states efficiently, we use Redux, Zustand, and Vuex.`,
    },
    {
      title: "4. Styling",
      content: `We focus on modern, maintainable styling using Sass/SCSS, Tailwind CSS, and Styled-components.`,
    },
    {
      title: "5. Build Tools",
      content: `Our development process incorporates advanced build tools like Webpack, Vite, and Gulp, which optimize assets, manage dependencies, and speed up development workflows.`,
    },
    {
      title: "6. CMS & APIs",
      content: `We integrate WordPress, Sanity, Contentful, and custom APIs to give your team flexible content management capabilities and seamless back-end connectivity.`,
    },
  ];

  return (
    <CommonAccordion2
      title="Tools We Use to<br/>Deliver Engaging<br/>Front-End Experiences"
      description="We leverage a modern, powerful front-end stack:"
      items={accordionData}
      splitRatio={0.5}
    />
  );
};