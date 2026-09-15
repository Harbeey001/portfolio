function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">
            Full-Stack Web Developer
          </p>

          <h1>
            I build web applications
            <span> that solve real problems.</span>
          </h1>

          <p className="hero-description">
            I'm Abiodun Itunuoluwa Alabi, a web developer focused on building
            responsive, practical and maintainable digital products for
            businesses, organizations and individuals.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <span className="hero-meta-label">
                Based in
              </span>

              <strong>
                Nigeria
              </strong>
            </div>

            <div>
              <span className="hero-meta-label">
                Available for
              </span>

              <strong>
                Freelance & Opportunities
              </strong>
            </div>

            <div>
              <span className="hero-meta-label">
                Core Stack
              </span>

              <strong>
                React · Node.js · MongoDB
              </strong>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-profile">

            <div className="hero-profile-image">
              <img
                src="/images/profile.jpg"
                alt="Abiodun Itunuoluwa Alabi"
              />
            </div>

            <div className="hero-profile-info">
              <p>
                Developer
              </p>

              <h2>
                Abiodun Itunuoluwa Alabi
              </h2>

              <span>
                Frontend · Backend · Full Stack
              </span>
            </div>

            <div className="hero-profile-line"></div>

            <div className="hero-code">
              <p>
                <span>const</span> developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;frontend: <b>"React"</b>,
              </p>

              <p>
                &nbsp;&nbsp;backend: <b>"Node.js"</b>,
              </p>

              <p>
                &nbsp;&nbsp;database: <b>"MongoDB"</b>
              </p>

              <p>
                {"}"}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
