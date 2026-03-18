"use client";

import { HeaderNav } from "@/data/header/HeaderNav";
import { useState } from "react";
import Link from "next/link";

export default function MainNav() {
  const [openItem, setOpenItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleItem = (label) => {
    setOpenItem(openItem === label ? null : label);
  };

  return (
    <div className="main-nav-container">
      <div className="view-mobile mobile-menu-button">
        <div className={`mobile-menu-icon ${menuOpen ? "active-mobile-menu-icon" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`main-nav ${menuOpen ? "active-mobile-menu" : ""}`}>
        <div className="mobile-menu-close" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
        </div>
        <ul className="main-menu">
          {HeaderNav.map((item) => (
            <li
              key={item.label}
              className={`main-menu-item level-1 ${item.children ? "has-children" : ""}`}
            >
              {item.children ? (
                <>
                  <Link
                    className="main-menu-link level-1-link"
                    aria-expanded={openItem === item.label}
                    aria-haspopup="true"
                    onClick={() => toggleItem(item.label)}
                    href={item.href}
                  >
                    {item.label}
                  </Link>

                  <ul className="sub-menu">
                    {item.children.map((child) => (
                      <li key={child.label} className="sub-menu-item">
                        <Link href={child.href} className="main-menu-link sub-menu-link">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className="main-menu-link level-1-link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}