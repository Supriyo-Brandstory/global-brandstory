import React from "react";
import CommonCard from "../common/CommonCard";

export const IndustriesBenifiting = () => {
  const boxHeight = "230px";
  const seoData = [
    {
      title: "Healthcare & Fitness",
      desc: "We develop apps that integrate HealthKit and ensure secure handling of sensitive patient and health data while providing intuitive user experiences.",
      icon: "/images/rounded-icons/r3.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight,
    },
    {
      title: "Finance & Payments",
      desc: "From mobile banking apps to Apple Pay integration and in-app transactions, we build secure, compliant, and seamless financial solutions.",
      icon: "/images/rounded-icons/r32.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight,
    },
    {
      title: "Retail & E-Commerce",
      desc: "Our apps create smooth shopping experiences with AR features, push notifications, personalized recommendations, and loyalty program integration.",
      icon: "/images/rounded-icons/r109.png",
      background: "url('/images/ppc/p-bg-3.png')",
      height: boxHeight,
    },
    {
      title: "Education & Learning",
      desc: "We deliver interactive, secure, and scalable e-learning platforms that engage students and educators while supporting complex educational workflows.",
      icon: "/images/rounded-icons/r13.png",
      background: "url('/images/ppc/p-bg-1.png')",
      height: boxHeight,
    },
    {
      title: "Travel & Hospitality",
      desc: "Our apps streamline bookings, provide real-time updates, and offer rich media experiences for travelers, enhancing usability and customer satisfaction.",
      icon: "/images/rounded-icons/r98.png",
      background: "url('/images/ppc/p-bg-2.png')",
      height: boxHeight,
    },
  ];

  return (
    <CommonCard
      seoData={seoData}
      heding="Industries Benefiting From Our iOS App Development Expertise"
      description="Our iOS solutions have empowered businesses across diverse sectors:"
      footer=""
    />
  );
};
