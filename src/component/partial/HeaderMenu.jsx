export const menuData = [
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/about" },
      { name: "Our Works", link: "/our-works" },
      { name: "Partners", link: "/partners" },
      { name: "Our Clients", link: "/our-clients" },
      { name: "Careers", link: "/careers" },
      { name: "Blogs", link: "/blogs" }
    ]
  },
  {
    title: "Services",
    sections: [
      {
        name: "Development",
        link: "/services/software-development",
        children: [
          {
            name: "Software Development Services",
            link: "/services/software-development",
            image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            children: [
              { name: "Software Consulting Services", link: "/services/consulting", image: "https://via.placeholder.com/200x120?text=Consulting" },
              { name: "Custom Software Development", link: "/services/custom-software", image: "https://via.placeholder.com/200x120?text=Custom+Software" },
              { name: "Software Architecture & Wireframe", link: "/services/architecture", image: "https://via.placeholder.com/200x120?text=Architecture" },
              { name: "Software Maintenance & Support", link: "/services/maintenance", image: "https://via.placeholder.com/200x120?text=Maintenance" },
              { name: "Database Development", link: "/services/database", image: "https://via.placeholder.com/200x120?text=Database" },
              { name: "Enterprise Software Development Services", link: "/services/enterprise", image: "https://via.placeholder.com/200x120?text=Enterprise+Software" }
            ]
          },
          {
            name: "Web Development Services",
            link: "/services/web-development-services",
            image: "https://via.placeholder.com/200x120?text=Web+App",
            children: [
              { name: "Web Design Services", link: "/services/web-design", image: "https://via.placeholder.com/200x120?text=Web+Design" },
              { name: "Ecommerce Web Development Services", link: "/services/ecommerce", image: "https://via.placeholder.com/200x120?text=Ecommerce" },
              { name: "Landing Page Development Services", link: "/services/landing-page", image: "https://via.placeholder.com/200x120?text=Landing+Page" },
              { name: "Website Revamp Services", link: "/services/website-revamp", image: "https://via.placeholder.com/200x120?text=Revamp" },
              { name: "Web Maintenance & Support", link: "/services/web-maintenance", image: "https://via.placeholder.com/200x120?text=Web+Maintenance" },
              { name: "WordPress Web Development Services", link: "/services/wordpress", image: "https://via.placeholder.com/200x120?text=WordPress" },
              { name: "Shopify Web Development Services", link: "/services/shopify", image: "https://via.placeholder.com/200x120?text=Shopify" },
              { name: "Magento Web Development", link: "/services/magento", image: "https://via.placeholder.com/200x120?text=Magento" }
            ]
          },
          {
            name: "Mobile App Development",
            link: "/services/mobile-app-development",
            image: "https://via.placeholder.com/200x120?text=Mobile+Dev",
            children: [
              { name: "Android App Development", link: "/services/android-app-development", image: "https://via.placeholder.com/200x120?text=Android+App" },
              { name: "iOS App Development", link: "/services/ios-app-development", image: "https://via.placeholder.com/200x120?text=iOS+App" },
              { name: "Cross Platform App Development", link: "/services/cross-platform-app-development", image: "https://via.placeholder.com/200x120?text=Cross+Platform+App" },
              { name: "Web Development Services", link: "/services/web-development", image: "https://via.placeholder.com/200x120?text=Web+App" },
              { name: "Hybrid Mobile App Development", link: "/services/hybrid-mobile-app-development", image: "https://via.placeholder.com/200x120?text=Hybrid+Mobile+App" },
              { name: "App Store Optimization Services", link: "/services/app-store-optimization-services", image: "https://via.placeholder.com/200x120?text=App+Store+Optimization" },
              { name: "App Maintenance & Support", link: "/services/app-maintenance", image: "https://via.placeholder.com/200x120?text=App+Maintenance" },
            ]
          },
          {
            name: "Web Application Development",
            link: "/services/web-application-development",
            image: "https://via.placeholder.com/200x120?text=Web+App",
            children: [
              { name: "SaaS Development Services", link: "/services/saas-development", image: "https://via.placeholder.com/200x120?text=SaaS" },
              { name: "PaaS Development", link: "/services/web-development", image: "https://via.placeholder.com/200x120?text=Web+App" },
              { name: "Web Portal Development", link: "/services/web-portal-development", image: "https://via.placeholder.com/200x120?text=Web+Portal" },
              { name: "Progressive Web App (PWA) Development", link: "/services/progressive-web-app-development", image: "https://via.placeholder.com/200x120?text=PWA" },
              { name: "Enterprise Web App Development", link: "/services/enterprise-web-app-development", image: "https://via.placeholder.com/200x120?text=Enterprise+Web+App" },
              { name: "Web App Maintenance & Support", link: "/services/web-app-maintenance", image: "https://via.placeholder.com/200x120?text=Web+App+Maintenance" },
            ]
          },
          {
            name: "Full Stack Development",
            link: "/services/full-stack-development",
            image: "https://via.placeholder.com/200x120?text=Full+Stack",
            children: [
              { name: "Front-End Development", link: "/services/front-end-development", image: "https://via.placeholder.com/200x120?text=Front+End" },
              { name: "Back-End Development", link: "/services/back-end-development", image: "https://via.placeholder.com/200x120?text=Back+End" },
              { name: "API Development & Integration", link: "/services/api-development-integration", image: "https://via.placeholder.com/200x120?text=API+Dev" },
              { name: "CRM Integration", link: "/services/crm-integration", image: "https://via.placeholder.com/200x120?text=CRM" },
              { name: "UI/UX Design Services", link: "/services/ui-ux-design-services", image: "https://via.placeholder.com/200x120?text=UI+UX" }
            ]
          }
        ]
      },


      { name: "Branding", link: "/services/branding", image: "https://via.placeholder.com/200x120?text=Branding",
        children: [
          { name: "Branding Services",
            link: "/services/branding-services",
            image: "https://via.placeholder.com/200x120?text=Branding+Services",
            children: [
              { name: "Brand Strategy & Positioning", link: "/services/brand-strategy-positioning", image: "https://via.placeholder.com/200x120?text=Brand+Strategy" },
              { name: "Brand Identity Design", link: "/services/brand-identity-design", image: "https://via.placeholder.com/200x120?text=Brand+Identity" },
              { name: "Brand Messaging & Copywriting", link: "/services/brand-messaging-copywriting", image: "https://via.placeholder.com/200x120?text=Brand+Messaging" },
              { name: "Visual Branding & Collateral Design", link: "/services/visual-branding-collateral-design", image: "https://via.placeholder.com/200x120?text=Visual+Branding" },
              { name: "Rebranding Services", link: "/services/rebranding-services", image: "https://via.placeholder.com/200x120?text=Rebranding" },
              { name : "Brand Guidelines & Toolkits", link: "/services/brand-guidelines-toolkits", image: "https://via.placeholder.com/200x120?text=Brand+Guidelines" },
              { name : "Employer Branding", link: "/services/employer-branding", image: "https://via.placeholder.com/200x120?text=Employer+Branding" },
            ]
          }
        ]
       },
      { name: "Consulting", link: "/services/consulting", image: "https://via.placeholder.com/200x120?text=Consulting",
        children: [
         {name: "Digital Transformation Services",
          link: "/services/digital-transformation-services",
          image: "https://via.placeholder.com/200x120?text=Digital+Transformation",
          children: [
            { name: "Digital Strategy & Roadmap", link: "/services/digital-strategy-roadmap", image: "https://via.placeholder.com/200x120?text=Digital+Strategy" },
            { name: "Cloud Transformation", link: "/services/cloud-transformation", image: "https://via.placeholder.com/200x120?text=Cloud+Transformation" },
            { name: "Legacy System Modernization", link: "/services/legacy-system-modernization", image: "https://via.placeholder.com/200x120?text=Legacy+System" },
          ]
        },
        {
          name: "IT Consulting Services",
          link: "/services/it-consulting-services",
          image: "https://via.placeholder.com/200x120?text=IT+Consulting",
          children: [
            { name: "IT Strategy & Planning", link: "/services/it-strategy-planning", image: "https://via.placeholder.com/200x120?text=IT+Strategy" },
            { name: "IT Talent Consulting", link: "/services/it-talent-consulting", image: "https://via.placeholder.com/200x120?text=IT+Talent" },
            { name : "IT Operations Optimization", link: "/services/it-operations-optimization", image: "https://via.placeholder.com/200x120?text=IT+Operations" },
          ]
        },
        {
          name: "Cybersecurity Services",
          link: "/services/cybersecurity-services",
          image: "https://via.placeholder.com/200x120?text=Cybersecurity",
          children: [
            { name: "Security Assessment", link: "/services/security-assessment", image: "https://via.placeholder.com/200x120?text=Security+Assessment" },
            { name: "IT Security Audit", link: "/services/it-security-audit", image: "https://via.placeholder.com/200x120?text=IT+Security" },
            { name: "Security Testing", link: "/services/security-testing", image: "https://via.placeholder.com/200x120?text=Security+Testing" },
            { name: "Penetration Testing", link: "/services/penetration-testing", image: "https://via.placeholder.com/200x120?text=Penetration+Testing" },
            { name: "Compliance Assessment", link: "/services/compliance-assessment", image: "https://via.placeholder.com/200x120?text=Compliance+Assessment" },
            { name: "Managed Security Services", link: "/services/managed-security-services", image: "https://via.placeholder.com/200x120?text=Managed+Security" },
            { name: "Vulnerability Management", link: "/services/vulnerability-management", image: "https://via.placeholder.com/200x120?text=Vulnerability+Management" },
          ]
        },
        
        ]

       },
      { name: "Digital Marketing", 
        link: "/services/digital-marketing", 
        image: "https://via.placeholder.com/200x120?text=Marketing",
        children: [
          {name: "Digital Marketing Services",
          link: "/services/digital-marketing-services",
          image: "https://via.placeholder.com/200x120?text=Digital+Marketing",
          children: [
            { name: "SEO Services", link: "/services/seo-services", image: "https://via.placeholder.com/200x120?text=SEO" },
            { name: "Social Media Marketing", link: "/services/social-media-marketing", image: "https://via.placeholder.com/200x120?text=Social+Media" },
            { name: "B2B Marketing", link: "/services/b2b-marketing", image: "https://via.placeholder.com/200x120?text=B2B" },
            { name: "B2C Marketing", link: "/services/b2c-marketing", image: "https://via.placeholder.com/200x120?text=B2C" },
            { name: "Content Marketing", link: "/services/content-marketing", image: "https://via.placeholder.com/200x120?text=Content" },
          ]
        },
          
        ]

       },
      { name: "Creative & Media Production", link: "/services/creative-media", image: "https://via.placeholder.com/200x120?text=Media",
        children: [
          { name: "Video Production", link: "/services/video-production", image: "https://via.placeholder.com/200x120?text=Video" ,
             children: [
              { name: "Corporate Video", link: "/services/corporate-video", image: "https://via.placeholder.com/200x120?text=Corporate+Video" },
              { name: "Podcast Production", link: "/services/podcast-production", image: "https://via.placeholder.com/200x120?text=Podcast" },
              { name: "Explainer Video", link: "/services/explainer-video", image: "https://via.placeholder.com/200x120?text=Explainer+Video" },
              {name: "E Learning Video", link: "/services/e-learning-video", image: "https://via.placeholder.com/200x120?text=E-Learning+Video" },
              { name: "Marketing Video", link: "/services/marketing-video", image: "https://via.placeholder.com/200x120?text=Marketing+Video" },
              {name:"Video Editing Services", link: "/services/video-editing-services", image: "https://via.placeholder.com/200x120?text=Video+Editing" },
              {name:"Animation Video", link: "/services/animation-video", image: "https://via.placeholder.com/200x120?text=Animation+Video" },
            ]
          },
          { name: "Photography", link: "/services/photography", image: "https://via.placeholder.com/200x120?text=Photography",
            children: [
              {name:"Corporate Photography", link: "/services/corporate-photography", image: "https://via.placeholder.com/200x120?text=Corporate+Photography" },
              {name:"Ecommerce Photography", link: "/services/ecommerce-photography", image: "https://via.placeholder.com/200x120?text=Ecommerce+Photography" },
              {name:"Food Photography", link: "/services/food-photography", image: "https://via.placeholder.com/200x120?text=Food+Photography" },
              {name:"Fashion Photography", link: "/services/fashion-photography", image: "https://via.placeholder.com/200x120?text=Fashion+Photography" },
              {name:"Architecural Photography", link: "/services/architecural-photography", image: "https://via.placeholder.com/200x120?text=Architecural+Photography" },
              {name:"Event Photography", link: "/services/event-photography", image: "https://via.placeholder.com/200x120?text=Event+Photography" },
              {name:"Drone Photography", link: "/services/drone-photography", image: "https://via.placeholder.com/200x120?text=Drone+Photography" },
            ]
           },
        ]
       }
    ]
  },
  {
    title: "Technologies",
        sections: [
      { name: "Frontend Technologies", link: "/technologies/frontend-technologies" ,
        children: [
          {name:"React.js Development", link: "/technologies/react-development" },
          {name:"Angular Development", link: "/technologies/angular-development" },
          {name:"Vue.js Development", link: "/technologies/vue-development" },
          {name:"HTML5 & CSS3 Development", link: "/technologies/html5-css3-development" },
          {name:"JavaScript & TypeScript", link: "/technologies/javascript-typescript" },
          {name:"Bootstrap / TailwindCSS", link: "/technologies/bootstrap-tailwindcss" },
        ]
      },
      {
        name:"Backend Technologies",
        link: "/technologies/backend-technologies",
        children: [
          {name:"Node.js Development", link: "/technologies/node-development" },
          {name:"Python Development", link: "/technologies/python-development" },
          {name:"PHP Development", link: "/technologies/php-development" },
          {name:"Java Spring Boot Development", link: "/technologies/java-spring-boot-development" },
          {name:".NET Development", link: "/technologies/net-development" },
          {name:"Ruby on Rails Development", link: "/technologies/ruby-on-rails-development" },
          {name:"Golang Development", link: "/technologies/golang-development" },
        ]
      },
      { name: "Mobile Technologies", link: "/technologies/mobile",
        children: [
          {name:"Android App Development (Kotlin, Java)", link: "/technologies/android-app-development-kotlin-java" },
          {name:"iOS App Development (Swift)",link:"/technologies/ios-app-development-swift" },
          {name:"Flutter App Development",link:"/technologies/flutter-app-development" },
          {name:"React Native Development",link:"/technologies/react-native-development" },
          {name:"Ionic App Development",link:"/technologies/ionic-app-development" },
        ]
       },
      { name: "Cloud & DevOps", link: "/technologies/cloud",
        children: [
          {name:"AWS Cloud Services",link:"/technologies/aws-cloud-services" },
          {name:"Azure Cloud Services",link:"/technologies/azure-cloud-services" },
          {name:"Google Cloud (GCP) Services",link:"/technologies/google-cloud-services" },
          {name:"Cloud DevOps & CI/CD (Docker, Jenkins, GitHub Actions)",link:"/technologies/cloud-devops-ci-cd" },
          {name:"Serverless Architecture (Lambda, Firebase)",link:"/technologies/serverless-architecture" },
        ]
       },
      { name: "AI, ML & Data Technologies", link: "/technologies/ai",
        children: [
          {name:"Artificial Intelligence Development (AI)",link:"/technologies/artificial-intelligence-development" },
          {name:"Machine Learning & Predictive Analytics (ML)",link:"/technologies/machine-learning-predictive-analytics" },
          {name:"Natural Language Processing (NLP)",link:"/technologies/natural-language-processing" },
          {name:"Computer Vision (CV)",link:"/technologies/computer-vision" },
          {name:"Data Engineering (ETL Pipelines, Apache Spark, Airflow)",link:"/technologies/data-engineering" },
          {name:"Data Visualization Tools (Power BI, Tableau, Looker)",link:"/technologies/data-visualization-tools" },
        ]
       }
    ]
  },
  {
    title: "Industries",
    items: [
     {name:"E-commerce",link:"/industries/ecommerce" },
     {name:"Healthcare",link:"/industries/healthcare" },
     {name:"Education & E-learning",link:"/industries/education-e-learning" },
     {name:"Real Estate",link:"/industries/real-estate" },
     {name:"Finance & Banking",link:"/industries/finance-banking" },
     {name:"Hospitality & Tourism",link:"/industries/hospitality-tourism" },
     {name:"Automotive",link:"/industries/automotive" },
     {name:"Media & Entertainment",link:"/industries/media-entertainment" },
     {name:"Manufacturing & Industrial",link:"/industries/manufacturing-industrial" },
     {name:"Manufacturing & Industrial",link:"/industries/manufacturing-industrial" },
     {name:"Technology & SaaS",link:"/industries/technology-saas" },
     {name:"Logistics & Supply Chain",link:"/industries/logistics-supply-chain" },
     {name:"Telecommunications",link:"/industries/telecommunications" },
     {name:"Legal Services",link:"/industries/legal" },
     {name:"Beauty Wellness & Fitness",link:"/industries/beauty-wellness-fitness" },
     {name:"Non-Profit & NGOs",link:"/industries/non-profit-ngos" },
     {name:"Food & Beverages",link:"/industries/food-beverage" },
     {name:"Home Decor & Interior Design",link:"/industries/home-decor-interior-design" },
     {name:"Government & Public Sector",link:"/industries/government-public-sector" },
     {name:"Energy & Utilities",link:"/industries/energy-utilities" },
     {name:"Insurance",link:"/industries/insurance" },
     {name:"Gaming & Esports",link:"/industries/gaming-esports" },
     {name:"Events & Exhibitions",link:"/industries/events-exhibitions" },
     {name:"Agriculture & AgroTech",link:"/industries/agriculture-agrotech" },
     {name:"Crypto & Blockchain",link:"/industries/crypto-blockchain" },
     {name:"Pet Care & Veterinary",link:"/industries/pet-care-veterinary" },
     {name:"Renewable Energy",link:"/industries/renewable-energy" },
     {name:"Green & Sustainable Brands",link:"/industries/green-sustainable-brands" },
    ]
  }
];

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const HeaderMenu = ({ mobileMenuOpen }) => {
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [mobileMenuState, setMobileMenuState] = useState({
    currentMenu: null,
    currentSection: null,
    currentSubItem: null
  });

const handleMenuHover = (index, menu) => {
  if (!mobileMenuOpen) {
    setHoveredMenuIndex(index);

    if (
      (menu.title === "Services" || menu.title === "Technologies") &&
      menu.sections?.length > 0
    ) {
      const firstSection = menu.sections[0];
      setHoveredSection(firstSection);
      setHoveredSubItem(firstSection.children?.[0] || null);
    } else {
      setHoveredSection(null);
      setHoveredSubItem(null);
    }
  }
};


  const handleLeave = () => {
    // if (!mobileMenuOpen) {
    //   setHoveredMenuIndex(null);
    //   setHoveredSection(null);
    //   setHoveredSubItem(null);
    // }
  };

  const handleMobileMenuToggle = (e, index) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => ({
      currentMenu: prev.currentMenu === index ? null : index,
      currentSection: null,
      currentSubItem: null
    }));
  };

  const handleMobileSectionToggle = (e, section) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => ({
      ...prev,
      currentSection: prev.currentSection === section ? null : section,
      currentSubItem: null
    }));
  };

  const handleMobileSubItemToggle = (e, subItem) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => ({
      ...prev,
      currentSubItem: prev.currentSubItem === subItem ? null : subItem
    }));
  };

  const renderMobileMenu = () => {
    return (
      <div className="mobileMenuContainer">
        {menuData.map((menu, index) => (
          <div key={index} className="mobileMenuItem">
            <div className="mobileMenuHeader">
              <a
                href={menu.link || '#'}
                className="mobileMenuTitle"
                onClick={(e) => {
                  // Only prevent default if there are items/sections to expand
                  // if (menu.items || menu.sections) {
                  //   e.preventDefault();
                  // }
                }}
              >
                {menu.title}
              </a>
              {(menu.items || menu.sections) && (
                <button
                  className="mobileMenuToggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMobileMenuToggle(e, index);
                  }}
                >
                  <ChevronRight
                    size={16}
                    className={`mobileMenuIcon ${mobileMenuState.currentMenu === index ? 'rotate-90' : ''}`}
                  />
                </button>
              )}
            </div>

            {mobileMenuState.currentMenu === index && (
              <div className="mobileMenuContent">
                {menu.items ? (
                  menu.items.map((item, idx) => (
                    <a key={idx} href={item.link} className="mobileMenuItemLink">
                      {item.name}
                    </a>
                  ))
                ) : (
                  <>
                    {menu.sections.map((section, sIdx) => (
                      <div key={sIdx} className="mobileMenuSection">
                        <div className="mobileMenuSectionHeader">
                          <a
                            href={section.link}
                            className="mobileMenuSectionTitle"
                            onClick={(e) => {
                              // Only prevent default if there are children to expand
                              // if (section.children) {
                              //   e.preventDefault();
                              // }
                            }}
                          >
                            {section.name}
                          </a>
                          {section.children && (
                            <button
                              className="mobileMenuToggle"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMobileSectionToggle(e, section);
                              }}
                            >
                              <ChevronRight
                                size={16}
                                className={`mobileMenuIcon ${mobileMenuState.currentSection === section ? 'rotate-90' : ''}`}
                              />
                            </button>
                          )}
                        </div>

                        {mobileMenuState.currentSection === section && section.children && (
                          <div className="mobileMenuSubItems">
                            {section.children.map((child, cIdx) => (
                              <div key={cIdx} className="mobileMenuSubItem">
                                <div className="mobileMenuSubItemHeader">
                                  <a
                                    href={child.link}
                                    className="mobileMenuItemLink"
                                    onClick={(e) => {
                                      // Only prevent default if there are children to expand
                                      // if (child.children) {
                                      //   e.preventDefault();
                                      // }
                                    }}
                                  >
                                    {child.name}
                                  </a>
                                  {child.children && (
                                    <button
                                      className="mobileMenuToggle"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleMobileSubItemToggle(e, child);
                                      }}
                                    >
                                      <ChevronRight
                                        size={16}
                                        className={`mobileMenuIcon ${mobileMenuState.currentSubItem === child ? 'rotate-90' : ''}`}
                                      />
                                    </button>
                                  )}
                                </div>

                                {mobileMenuState.currentSubItem === child && child.children && (
                                  <div className="mobileMenuSubChildren">
                                    {child.children.map((subChild, scIdx) => (
                                      <a
                                        key={scIdx}
                                        href={subChild.link}
                                        className="mobileMenuItemLink subChild"
                                      >
                                        {subChild.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav className={mobileMenuOpen ? "navLinksMobile" : "navLinks"}>
      {mobileMenuOpen ? (
        renderMobileMenu()
      ) : (
        <>
          {menuData.map((menu, index) => (
            <div
              className="navItem"
              key={index}
              onMouseEnter={() => handleMenuHover(index, menu)}
              onMouseLeave={handleLeave}
            >
              <div className="navTitle">
                {menu.title} <ChevronDown size={16} />
              </div>

              {hoveredMenuIndex === index && (
                <div className="dropdown">
                  {menu.items ? (
                    menu.items.map((item, idx) => (
                      <a key={idx} href={item.link} className="dropdownItem">
                        {item.name}
                      </a>
                    ))
                  ) : (
                    <div className="dropdownContainer">
                      <div className="dropdownSection">
                        {menu.sections.map((section, sIdx) => (
                          <a
                            key={sIdx}
                            href={section.link}
                            onMouseEnter={() => {
                              setHoveredSection(section);
                              setHoveredSubItem(section.children?.[0] || section);
                            }}
                            className={`dropdownItem st1column ${hoveredSection?.name === section.name ? "active-link" : ""
                              }`}
                          >
                            {section.name}
                          </a>
                        ))}
                      </div>

                      {hoveredSection?.children && (
                        <div className="dropdownSection dropdownGroup">
                          {hoveredSection.children.map((child, cIdx) => (
                            <a
                              key={cIdx}
                              href={child.link}
                              onMouseEnter={() => setHoveredSubItem(child)}
                              className={`dropdownItem ${hoveredSubItem?.name === child.name ? "active-link" : ""
                                }`}
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}

                      {hoveredSubItem?.children && (
                        <div className="dropdownSection dropdownGroup">
                          {hoveredSubItem.children.map((subChild, i) => (
                            <a
                              key={i}
                              href={subChild.link}
                              onMouseEnter={() => { }}
                              className={`dropdownItem ${hoveredSubItem?.name === subChild.name ? "active-link" : ""
                                }`}
                            >
                              {subChild.name}
                            </a>
                          ))}
                        </div>
                      )}

                      {hoveredSubItem?.image && (
                        <div className="dropdownSection dropdownImage">
                          <img
                            src={hoveredSubItem.image}
                            alt={hoveredSubItem.name}
                            className="menuPreviewImage"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </nav>
  );
};

export default HeaderMenu;