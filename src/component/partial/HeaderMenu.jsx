
export const menuData = [
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/about" },
      { name: "Our Team", link: "/team" },
      { name: "Careers", link: "/careers" },
      { name: "Partners", link: "/partners" }
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
            name: "Consulting",
            link: "/services/consulting",
            image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
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
          { name: "Mobile Development Services", link: "/services/mobile-development", image: "https://via.placeholder.com/200x120?text=Mobile+Dev" },
          { name: "Web Application Development Services", link: "/services/web-app", image: "https://via.placeholder.com/200x120?text=Web+App" },
          { name: "Full Stack Development Services", link: "/services/full-stack", image: "https://via.placeholder.com/200x120?text=Full+Stack" },
          { name: "API Development & Integration", link: "/services/api", image: "https://via.placeholder.com/200x120?text=API+Dev" },
          { name: "CRM Integration", link: "/services/crm", image: "https://via.placeholder.com/200x120?text=CRM" },
          { name: "UI/UX Design Services", link: "/services/ui-ux", image: "https://via.placeholder.com/200x120?text=UI+UX" }
        ]
      },
      { name: "Branding", link: "/services/branding", image: "https://via.placeholder.com/200x120?text=Branding" },
      { name: "Consulting", link: "/services/consulting", image: "https://via.placeholder.com/200x120?text=Consulting" },
      { name: "Digital Marketing", link: "/services/digital-marketing", image: "https://via.placeholder.com/200x120?text=Marketing" },
      { name: "Creative & Media Production", link: "/services/creative-media", image: "https://via.placeholder.com/200x120?text=Media" }
    ]
  },
  {
    title: "Technologies",
    items: [
      { name: "Web Technologies", link: "/technologies/web" },
      { name: "Mobile Technologies", link: "/technologies/mobile" },
      { name: "Cloud & DevOps", link: "/technologies/cloud" },
      { name: "Artificial Intelligence", link: "/technologies/ai" }
    ]
  },
  {
    title: "Industries",
    items: [
      { name: "Healthcare", link: "/industries/healthcare" },
      { name: "Finance", link: "/industries/finance" },
      { name: "E-commerce", link: "/industries/ecommerce" },
      { name: "Education", link: "/industries/education" },
      { name: "Manufacturing", link: "/industries/manufacturing" }
    ]
  }
];

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const HeaderMenu = ({ mobileMenuOpen }) => {
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);

  const handleMenuHover = (index, menu) => {
    setHoveredMenuIndex(index);
    if (menu.title === "Services" && menu.sections?.length > 0) {
      const firstSection = menu.sections[0];
      setHoveredSection(firstSection);
      setHoveredSubItem(firstSection.children?.[0] || null);
    } else {
      setHoveredSection(null);
      setHoveredSubItem(null);
    }
  };

  const handleLeave = () => {

  };

  return (
    <nav className={mobileMenuOpen ? "navLinksMobile" : "navLinks"}>
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
                  {/* Column 1: Sections */}
                  <div className="dropdownSection">
                    {menu.sections.map((section, sIdx) => (
                      <a
                        key={sIdx}
                        href={section.link}
                        onMouseEnter={() => {
                          setHoveredSection(section);
                          setHoveredSubItem(section.children?.[0] || section);
                        }}
                        className={`dropdownItem st1column ${
                          hoveredSection?.name === section.name ? "active-link" : ""
                        }`}
                      >
                        {section.name}
                      </a>
                    ))}
                  </div>

                  {/* Column 2: Section Children */}
                  {hoveredSection?.children && (
                    <div className="dropdownSection dropdownGroup">
                      {hoveredSection.children.map((child, cIdx) => (
                        <a
                          key={cIdx}
                          href={child.link}
                          onMouseEnter={() => setHoveredSubItem(child)}
                          className={`dropdownItem ${
                            hoveredSubItem?.name === child.name ? "active-link" : ""
                          }`}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Column 3: Sub-Children */}
                  {hoveredSubItem?.children && (
                    <div className="dropdownSection dropdownGroup">
                      {hoveredSubItem.children.map((subChild, i) => (
                        <a
                          key={i}
                          href={subChild.link}
                          onMouseEnter={() => {}} // Optional
                          className={`dropdownItem ${
                            hoveredSubItem?.name === subChild.name ? "active-link" : ""
                          }`}
                        >
                          {subChild.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Column 4: Image */}
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
    </nav>
  );
};

export default HeaderMenu;

