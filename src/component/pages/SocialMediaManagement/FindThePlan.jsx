'use client';

import { useRouter } from "next/navigation";
import { CommonBwThreeCard } from "../common/CommonBwThreeCard";

export const FindThePlan = () => {
  const router = useRouter();

  const title = "Find the Plan That Fits Your Brand";
  const description =
    "We Offer Social Media Management Packages For Every Stage Of Business Growth. Each Plan Is Designed For Maximum Results With Clear Deliverables.";
  const footer =
    "We Also Design Custom Plans For Global Brands With Unique Requirements.";

  const data = [
    {
      title: "Starter – ₹ / $",
      description: `
        <ul class="list-disc pl-6 space-y-2 text-left">
          <li>2 platforms of your choice</li>
          <li>8 posts per month</li>
          <li>Ideal for startups and small brands</li>
        </ul>
      `,
    },
    {
      title: "Growth – ₹ / $",
      description: `
        <ul class="list-disc pl-6 space-y-2 text-left">
          <li>3 platforms</li>
          <li>16 posts per month</li>
          <li>1 paid campaign to boost reach</li>
          <li>Monthly performance reporting</li>
        </ul>
      `,
    },
    {
      title: "Scaler – ₹ / $",
      description: `
        <ul class="list-disc pl-6 space-y-2 text-left">
          <li>Full-suite social media management</li>
          <li>Organic + paid campaigns across all platforms</li>
          <li>Detailed reporting, analytics, and strategy reviews</li>
          <li>Dedicated team for creative execution</li>
        </ul>
      `,
    },
  ];

  const handleClick = () => {
    router.push("/contact-us");
  };

  return (
    <>
      <CommonBwThreeCard
        title={title}
        description={description}
        footer={footer}
        cardData={data}
        paddingBottom="80px"
      />

      <div className="flex justify-center pb-20">
        <button
          className="
            text-white font-medium text-lg
            py-4 px-12 rounded-full
            transition-all duration-300
            shadow-lg
            cursor-pointer
          "
          style={{ backgroundColor: "#E73D26" }}
          aria-label="Request a Custom Quote"
          onClick={handleClick}
        >
          Request a Custom Quote
        </button>
      </div>
    </>
  );
};
