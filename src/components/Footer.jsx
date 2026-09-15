function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Abiodun<span>.</span>
            </a>

            <p>
              Full-stack developer building useful, responsive and
              user-focused digital products.
            </p>
          </div>

          <div className="footer-navigation">
            <p className="footer-heading">Navigation</p>

            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-connect">
            <p className="footer-heading">Connect</p>

            <a href="mailto:alabiitunu03@gmail.com">
              Email
            </a>

            <a
              href="https://wa.me/2348147998118"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://github.com/Harbeey001"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Abiodun Itunuoluwa Alabi. All rights reserved.
          </p>

          <a href="#home">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
