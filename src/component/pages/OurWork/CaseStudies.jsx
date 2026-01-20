import { CommonGridSelector } from "../common/CommonGridSelector";

export const CaseStudies = () => {

  const tabs = [
  {
    name: "Website Design and Development",
    cards: [
      {
        category: "Software Company",
        title: "Website Design & Development For A Platform As A Service (CPaaS) Provider",
        description: "Our client is a Digital Communication Solutions Provider specializing in AI-Powered Communication Platform As A Service (CPaaS). The company offers an AI-powered platform...",
        buttonText: "Read More",
        buttonLink: "#",
        image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      },
      {
        category: "Real Estate",
        title: "Ferns Estates & Developers",
        description: "Ferns is renowned for its rich legacy and portfolio of residential plots, villas and gated communities, and real estate developments in Bangalore...",
        buttonText: "Read More",
        buttonLink: "#",
        image: "https://via.placeholder.com/800x500?text=Ferns+Estates"
      },
      {
        category: "Healthcare & Wellness",
        title: "Wellness Retreat Centre Website Design & Development",
        description: "Our client is a wellness retreat centre that focuses on natural, holistic, and yogic living. It offers a range of curative, preventive, and wellness programs...",
        buttonText: "Read More",
        buttonLink: "#",
        image: "https://via.placeholder.com/800x500?text=Wellness+Retreat"
      },
      {
        category: "SaaS Company",
        title: "Website Design And Development For A SaaS Company",
        description: "BrandStory has created a product-based website strategy and design for an AI-Powered SaaS company. The company offers an AI-powered platform...",
        buttonText: "Read More",
        buttonLink: "#",
        image: "https://via.placeholder.com/800x500?text=SaaS+Company"
      },
      {
        category: "Restaurant",
        title: "Muro",
        description: "Muro is a distinguished dining destination in Bengaluru that combines Asian culinary artistry with sophisticated architecture, creating refined Asian cuisine...",
        buttonText: "Read More",
        buttonLink: "#",
        image: "https://via.placeholder.com/800x500?text=Muro+Restaurant"
      },
      {
        category: "Logistics",
        title: "Varsha Logistics",
        description: "BrandStory was tasked with designing and developing a website that digitally reflects Varsha Logistics' holistic, technology-based approach...",
        buttonText: "Read More",
        buttonLink: "#",
        image: "https://via.placeholder.com/800x500?text=Varsha+Logistics"
      }
      // You can add more if there are additional unique ones in full site
    ]
  },
  {
    name: "Search Engine Optimization",
    cards: [
      {
        category: "Interior Design Company",
        title: "SEO Solutions For Interior Design Company",
        description: "Our client is an award-winning interior design firm in India known for its luxury residential interiors. Despite being the industry leader...",
        buttonText: "Read More",
        buttonLink: "#",
        image: ""
      },
      {
        category: "Lifeciences & Pharma Company",
        title: "SEO Solutions For Lifesciences & Pharma Company",
        description: "Despite being the industry leader in providing animal and human healthcare products, our client struggled with organic visibility. Until they met us...",
        buttonText: "Read More",
        buttonLink: "#",
        image: ""
      },
      {
        category: "Management Consulting Firm",
        title: "SEO Solutions To Management Consulting Firm",
        description: "Our client is one among the largest management consulting companies in India. But, until they met us, they didn't see the organic growth they deserved...",
        buttonText: "Read More",
        buttonLink: "#",
        image: ""
      },
      {
        category: "Real-Estate Company",
        title: "SEO Solutions To Real Estate Company",
        description: "Our client is ranked among top 5 real estate developers in Bangalore. They maintain a good reputation in the market for residential, commercial, institutional projects...",
        buttonText: "Read More",
        buttonLink: "#",
        image: ""
      },
      {
        category: "Technology Company",
        title: "SEO Solutions To Technology Firm",
        description: "Our client builds deep tech SaaS products and platforms. They are experts in analytics, machine learning over 200+ products and integrations...",
        buttonText: "Read More",
        buttonLink: "#",
        image: ""
      }
      // Additional variants like award-winning mentions can map to these
    ]
  },
  {
    name: "Performance Marketing",
    cards: [
      // The screenshots show fewer unique ones for Performance Marketing; mostly overlaps or less detail visible.
      // Inferring from layout and common patterns (e.g., tech/SaaS focus):
      {
        category: "Tech Company / SaaS",
        title: "Performance Marketing For Tech SaaS Products",
        description: "Our client builds deep tech SaaS products and platforms with expertise in analytics, machine learning, and 200+ integrations. We executed performance campaigns...",
        buttonText: "Read More",
        buttonLink: "#",
        image: "https://via.placeholder.com/800x500?text=Performance+Tech"
      }
      // Add more if specific ones appear in full view; screenshots indicate this tab has similar card styles but possibly fewer uniques
    ]
  }
];

  return <CommonGridSelector title="Case Studies" tabs={tabs} />;
};
