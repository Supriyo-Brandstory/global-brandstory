'use client';

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { menuData } from "./Data";

const MobileMenu = ({ isOpen, onClose }) => {
  const [state, setState] = useState({
    menu: null,
    section: null,
    child: null,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setState({ menu: null, section: null, child: null });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = () => {
    onClose?.();
  };

  const toggleMenu = (index) => {
    setState((prev) => ({
      menu: prev.menu === index ? null : index,
      section: null,
      child: null,
    }));
  };

  const toggleSection = (sectionIndex) => {
    setState((prev) => ({
      ...prev,
      section: prev.section === sectionIndex ? null : sectionIndex,
      child: null,
    }));
  };

  const toggleChild = (childKey) => {
    setState((prev) => ({
      ...prev,
      child: prev.child === childKey ? null : childKey,
    }));
  };

  return (
    <nav
      className={`mobileNav ${isOpen ? "mobileNavOpen" : ""}`}
      aria-hidden={!isOpen}
    >
      <div
        className="mobileNavPanel"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div className="mobileMenuContainer">
          {menuData.map((menu, i) => {
            const isMenuOpen = state.menu === i;
            const hasSubmenu = !!(menu.sections || menu.items);

            return (
              <div
                key={menu.title}
                className={`mobileMenuItem ${isMenuOpen ? "mobileMenuItemOpen" : ""}`}
              >
                <div className="mobileMenuHeader">
                  {menu.link ? (
                    <a
                      href={menu.link}
                      className="mobileMenuTitle mobileMenuTitleLink"
                      onClick={handleNavigate}
                    >
                      {menu.title}
                    </a>
                  ) : (
                    <span className="mobileMenuTitle">{menu.title}</span>
                  )}

                  {menu.link && !hasSubmenu ? (
                    <a
                      href={menu.link}
                      className="mobileMenuToggle"
                      onClick={handleNavigate}
                      aria-label={`Go to ${menu.title}`}
                    >
                      <ChevronRight size={18} />
                    </a>
                  ) : (
                    hasSubmenu && (
                      <button
                        type="button"
                        className="mobileMenuToggle"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu(i);
                        }}
                        aria-expanded={isMenuOpen}
                        aria-label={`Toggle ${menu.title} submenu`}
                      >
                        <ChevronRight
                          size={18}
                          className={isMenuOpen ? "rotate" : ""}
                        />
                      </button>
                    )
                  )}
                </div>

                {hasSubmenu && (
                  <div
                    className={`mobileMenuContent ${isMenuOpen ? "mobileMenuContentOpen" : ""}`}
                  >
                    <div className="mobileMenuContentInner">
                      {menu.items
                        ? menu.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.link}
                              className="mobileLink"
                              onClick={handleNavigate}
                            >
                              {item.name}
                            </a>
                          ))
                        : menu.sections.map((section, sIdx) => {
                            const isSectionOpen = state.section === sIdx;
                            const sectionKey = `${menu.title}-${section.name}`;

                            return (
                              <div
                                key={sectionKey}
                                className={`mobileSection ${isSectionOpen ? "mobileSectionOpen" : ""}`}
                              >
                                <div className="mobileSectionHeader">
                                  <a
                                    href={section.link}
                                    className="mobileSectionLink"
                                    onClick={handleNavigate}
                                  >
                                    {section.name}
                                  </a>

                                  {section.children && (
                                    <button
                                      type="button"
                                      className="mobileMenuToggle"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSection(sIdx);
                                      }}
                                      aria-expanded={isSectionOpen}
                                      aria-label={`Toggle ${section.name} submenu`}
                                    >
                                      <ChevronRight
                                        size={16}
                                        className={isSectionOpen ? "rotate" : ""}
                                      />
                                    </button>
                                  )}
                                </div>

                                {section.children && (
                                  <div
                                    className={`mobileSubItems ${isSectionOpen ? "mobileSubItemsOpen" : ""}`}
                                  >
                                    <div className="mobileSubItemsInner">
                                      {section.children.map((child, cIdx) => {
                                        const childKey = `${sectionKey}-${child.name}-${cIdx}`;
                                        const isChildOpen = state.child === childKey;

                                        return (
                                          <div
                                            key={childKey}
                                            className={`mobileSubItem ${isChildOpen ? "mobileSubItemOpen" : ""}`}
                                          >
                                            <div className="mobileSubItemHeader">
                                              <a
                                                href={child.link}
                                                className="mobileSubItemLink"
                                                onClick={handleNavigate}
                                              >
                                                {child.name}
                                              </a>

                                              {child.children && (
                                                <button
                                                  type="button"
                                                  className="mobileMenuToggle"
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleChild(childKey);
                                                  }}
                                                  aria-expanded={isChildOpen}
                                                  aria-label={`Toggle ${child.name} submenu`}
                                                >
                                                  <ChevronRight
                                                    size={16}
                                                    className={isChildOpen ? "rotate" : ""}
                                                  />
                                                </button>
                                              )}
                                            </div>

                                            {child.children && (
                                              <div
                                                className={`mobileSubChildren ${isChildOpen ? "mobileSubChildrenOpen" : ""}`}
                                              >
                                                <div className="mobileSubChildrenInner">
                                                  {child.children.map((sub) => (
                                                    <a
                                                      key={sub.name}
                                                      href={sub.link}
                                                      className="mobileLink mobileLinkSub"
                                                      onClick={handleNavigate}
                                                    >
                                                      {sub.name}
                                                    </a>
                                                  ))}
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mobileMenuFooter">
          <a href="/contact-us" className="mobileMenuContactBtn" onClick={handleNavigate}>
            Contact Us
          </a>
        </div>
      </div>

      <button
        type="button"
        className="mobileNavOverlay"
        aria-label="Close menu"
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />
    </nav>
  );
};

export default MobileMenu;
