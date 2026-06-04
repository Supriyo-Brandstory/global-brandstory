'use client';

import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { menuData } from "./Data";

const HeaderMenu = ({ mobileMenuOpen }) => { 
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTopMenu, setActiveTopMenu] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [activeChild, setActiveChild] = useState(null);

  useEffect(() => {
    setMounted(true);

    const check = () => setIsMobile(window.innerWidth < 1024);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!mounted) return null; 

  //  =============================== MOBILE RETURN =============================== 
if (isMobile) {
  return (
    <MobileMenu
      isOpen={mobileMenuOpen}
    />
  );
}


  /* =============================== DESKTOP LOGIC =============================== */
  const resetMenu = () => {
    setIsMenuOpen(false);
    setActiveTopMenu(null);
    setActiveSection(null);
    setActiveChild(null);
  };

  const handleTopMenuEnter = (item) => {
    if (item.title === "Company") {
      setIsMenuOpen(true);
      setActiveTopMenu(item);
      return;
    }

    if (item.title === "Industries") {
      setIsMenuOpen(true);
      setActiveTopMenu(item);
      return;
    }

    if (item.sections?.length) {
      setIsMenuOpen(true);
      setActiveTopMenu(item);
      setActiveSection(item.sections[0]);
      setActiveChild(null);
      return;
    }

    resetMenu();
  };

  const handleItemClick = (link) => {
    if (!link) return;
    resetMenu();
    window.location.href = link;
  };

  const isCompanyMenu = activeTopMenu?.title === "Company";
  const isIndustriesMenu = activeTopMenu?.title === "Industries";

  //  =============================== DESKTOP =============================== 
  return (
    <>
      {/* ================= TOP NAV ================= */}
      <nav className="topMenu">
        <ul className="menuList">
          {menuData.map((item, index) => (
            <li
              key={index}
              className={`menuItem ${
                activeTopMenu?.title === item.title ? "active" : ""
              }`}
              onMouseEnter={() => handleTopMenuEnter(item)}
            >
              {item?.link ? (
                <a href={item.link}>
                  <span>{item.title}</span>
                </a>
              ) : (
                <span>{item.title}</span>
              )}
              {(item.sections || item.items) && <span className="arrow" />}
            </li>
          ))}
        </ul>
      </nav>

      {/* ================= MEGA MENU ================= */}
      {isMenuOpen && activeTopMenu && (
        <div className="megaMenuHoverZone" onMouseLeave={resetMenu}>
          <div className="megaMenu">

            {/* ================= COMPANY ================= */}
            {isCompanyMenu && (
              <div className="companyMega">
                <div className="companyWrapper">
                  <h2><b>Company</b></h2>

                  <div className="companyGrid">
                    <a href="/about-us" className="companyCard about">
                      <h3>About Us</h3>
                      <p>Who we are, what we believe in, and how we create meaningful digital impact for brands worldwide.</p>
                      <img src="/images/HeaderIcons/company/1.svg" alt="" />
                    </a>

                    <a href="/our-works" className="companyCard works">
                      <h3>Our Works</h3>
                      <p>Real products. Real results.<br/> Crafted for growth.</p>
                      <img src="/images/HeaderIcons/company/2.svg" alt="" />
                    </a>

                    <a href="" className="companyCard partners">
                      <h3>Partners</h3>
                      <p>Strong alliances that <br /> power better solutions.</p>
                      <img src="/images/HeaderIcons/company/3.svg" alt="" />
                    </a>

                    <a href="/our-clients" className="companyCard clients">
                      <h3>Our Clients</h3>
                      <p>Strategic alliances that strengthen our ecosystem and help us deliver smarter, scalable solutions.</p>
                      <img src="/images/HeaderIcons/company/4.svg" alt="" />
                    </a>
                  </div>

                  <div className="companyGridLow">
                    <a href="/careers" className="companyCard careers">
                      <h3>Careers</h3>
                      <p>Join a future-focused team.</p>
                      <img src="/images/HeaderIcons/company/5.svg" alt="" />
                    </a>

                    <a href="/blogs" className="companyCard blogs">
                      <h3>Blogs</h3>
                      <p>Insights, trends, and stories.</p>
                      <img src="/images/HeaderIcons/company/6.svg" alt="" />
                    </a>
                  </div>
                </div>

                <FeaturedCaseStudies />
              </div>
            )}

            {/* ================= INDUSTRIES ================= */}
            {isIndustriesMenu && (
              <div className="industriesMega">
                <h4 className="industriesTitle">Industries</h4>

                <div className="industriesGrid">
                  {activeTopMenu.items.map((item, index) => (
                    <a key={index} href={item.link} className="industryItem">
                      <span className="industryIcon">
                        <img src={item.image} alt={item.name} />
                      </span>
                      <span className="industryName">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* ================= DEFAULT TREE ================= */}
            {!isCompanyMenu && !isIndustriesMenu && (
              <div className="megaMenuInner">
                <div className="megaCol">
                  <b className="colTitle">{activeTopMenu.title}</b>
                  <ul>
                    {activeTopMenu.sections.map((section, index) => (
                      <li
                        key={index}
                        className={`colItem ${
                          activeSection?.name === section.name ? "active" : ""
                        }`}
                        onMouseEnter={() => {
                          setActiveSection(section);
                          setActiveChild(null);
                        }}
                      >
                        <img src={section.image} alt="" className="colItemIcon" />
                        <span className="text">{section.name}</span>
                        <img src="/images/HeaderIcons/arrow-right.svg" alt="" className="colItemArrow" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 - Modified with conditional class */}
                <div className={`megaCol ${activeChild?.children?.length ? 'has-children' : ''}`}>
                  <h4 className="colTitle">{activeSection?.name}</h4>
                  <ul>
                    {activeSection?.children?.map((child, index) => (
                      <li
                        key={index}
                        className={`colItem ${activeChild?.name === child.name ? 'active' : ''}`}
                        onMouseEnter={() =>
                          child.children?.length
                            ? setActiveChild(child)
                            : setActiveChild(null)
                        }
                        onClick={() => handleItemClick(child.link)}
                      >
                        <span className="text">{child.name}</span>
                        {activeChild?.children?.length && (
                          <img src="/images/HeaderIcons/arrow-right.svg" alt="" className="colItemArrow" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="megaCol">
                  {activeChild?.children?.length ? (
                    <>
                      <h4 className="colTitle">{activeChild.name}</h4>
                      <ul>
                        {activeChild.children.map((sub, index) => (
                          <li
                            key={index}
                            className="colItem"
                            onClick={() => handleItemClick(sub.link)}
                          >
                            <span className="text">{sub.name}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <FeaturedCaseStudies />
                  )}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

/* =============================== FEATURED =============================== */
const FeaturedCaseStudies = () => {
  return (
    <div className="companyFeatured">
      <h4>Featured Case Studies</h4>

      <div className="featuredCard">
        <span>Case Study</span>
        <p>How PR helped a Real Estate Developer grow 85% Project Bookings</p>
        <span><a href="https://brandstoryglobal.com/case-studies/pr-helped-real-estate-developer-grow-project-bookings" className="hover:underline">Read More</a></span>
      </div>

      <div className="featuredCard">
        <span>Case Study</span>
        <p>Scaling high-intent organic growth for a US SaaS platform</p>
        <span><a href="https://brandstoryglobal.com/case-studies/scaling-high-intent-organic-growth-for-a-us-saas-platform" className="hover:underline">Read More</a></span>
      </div>

      <div className="ctaRow">
        <span><b>Ready to Grow?</b></span>
        <a href="/contact-us" className="ctaBtn">Contact Us</a>
      </div>
    </div>
  );
};

export default HeaderMenu;
