import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            Abiodun<span>.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <a href="#home" className="logo" onClick={closeMenu}>
            Abiodun<span>.</span>
          </a>

          <button
            className="sidebar-close"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="sidebar-nav">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Let's Talk →
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
