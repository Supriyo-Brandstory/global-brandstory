'use client';

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { menuData } from "./Data";

const MobileMenu = ({ isOpen, onClose }) => {
  const [state, setState] = useState({
    menu: null,
    section: null,
    child: null,
  });

  const toggleMenu = (index) => {
    setState({
      menu: state.menu === index ? null : index,
      section: null,
      child: null,
    });
  };

  const toggleSection = (section) => {
    setState({
      ...state,
      section: state.section === section ? null : section,
      child: null,
    });
  };

  const toggleChild = (child) => {
    setState({
      ...state,
      child: state.child === child ? null : child,
    });
  };

  if (!isOpen) return null;

  return (
    <nav className="mobileNavOld">
      <div className="mobileMenuContainer">
        {menuData.map((menu, i) => (
          <div key={i} className="mobileMenuItem">
            {/* TOP LEVEL */}
            <div className="mobileMenuHeader">
              <span className="mobileMenuTitle">{menu.title}</span>

              {(menu.sections || menu.items) && (
                <button
                  className="mobileMenuToggle"
                  onClick={() => toggleMenu(i)}
                >
                  <ChevronRight
                    size={16}
                    className={state.menu === i ? "rotate" : ""}
                  />
                </button>
              )}
            </div>

            {/* LEVEL 1 */}
            {state.menu === i && (
              <div className="mobileMenuContent">
                {menu.items ? (
                  menu.items.map((item, idx) => (
                    <a key={idx} href={item.link} className="mobileLink">
                      {item.name}
                    </a>
                  ))
                ) : (
                  menu.sections.map((section, sIdx) => (
                    <div key={sIdx} className="mobileSection">
                      <div className="mobileSectionHeader">
                        <a href={section.link}>{section.name}</a>

                        {section.children && (
                          <button
                            className="mobileMenuToggle"
                            onClick={() => toggleSection(section)}
                          >
                            <ChevronRight
                              size={16}
                              className={
                                state.section === section ? "rotate" : ""
                              }
                            />
                          </button>
                        )}
                      </div>

                      {/* LEVEL 2 */}
                      {state.section === section && section.children && (
                        <div className="mobileSubItems">
                          {section.children.map((child, cIdx) => (
                            <div key={cIdx} className="mobileSubItem">
                              <div className="mobileSubItemHeader">
                                <a href={child.link}>{child.name}</a>

                                {child.children && (
                                  <button
                                    className="mobileMenuToggle"
                                    onClick={() => toggleChild(child)}
                                  >
                                    <ChevronRight
                                      size={16}
                                      className={
                                        state.child === child ? "rotate" : ""
                                      }
                                    />
                                  </button>
                                )}
                              </div>

                              {/* LEVEL 3 */}
                              {state.child === child &&
                                child.children && (
                                  <div className="mobileSubChildren">
                                    {child.children.map((sub, x) => (
                                      <a
                                        key={x}
                                        href={sub.link}
                                        className="mobileLink sub"
                                      >
                                        {sub.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
