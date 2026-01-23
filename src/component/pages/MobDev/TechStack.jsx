import React from "react";
import CommonAbout from "../common/CommonAbout";

export const TechStack = () => {
  return (
    <CommonAbout
      title="<h2>Technology Stack We Use for Mobile<br/>App Development</h2>"
      subtitle="<p>Our tech stack is about solving your business challenges efficiently and securely.</p>"
      text1="Our Stack Includes:"
      text2="We stay current with evolving trends in android app development to ensure every solution is modern, maintainable, and user-approved."
      points={[
        "<b>IOS:</b> Swift, SwiftUI, Objective-C, Xcode",
        "<b>Android:</b> Kotlin, Android Studio, Git, GitLab",
        "<b>Cross-Platform:</b> Flutter, React Native, NativeScript",
        "<b>Databases:</b> Firebase, MongoDB, MySQL, DynamoDB, SQLite",
        "<b>Design Tools:</b> Figma, Sketch, Adobe XD, Photoshop",
      ]}
      imageSrc="/images/MobDev/about.png" // Image source path is maintained as requested
      imageAlt="tech-stack"
    />
  );
};
