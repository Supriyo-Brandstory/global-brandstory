import { CommonLabels } from "../common/CommonLabels";

export const Labels = () => {
  const data = [
    "E-commerce","Healthcare","Education & E-Learning","Real Estate",
    "Finance & Banking","Hospitality & Tourism","Automotive","Media & Entertainment",
    "Manufacturing & Industrial","Fashion & Apparel","Technology & SaaS","Logistics & Supply Chain",
    "Telecommunication","Legal Services","Beauty, Wellness & Fitness","Non-profits & NGOs",
    "Food & Beverages","Interior Design","Government & Public Sector","Energy & Utilities",
    "Insurance","Gaming & Esports","Events & Exhibitions","Agriculture & Agrotech",
    "Crypto & Blockchain","Petcare & Veterinary","Renewable Energy","Sustainable Brands"
  ];

  return (
    <CommonLabels title="Industries We’ve Transformed" data={data}/>
  );
};
