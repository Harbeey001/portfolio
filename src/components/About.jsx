function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-intro">
          <p className="section-label">
            About Me
          </p>

          <h2 className="section-title">
            Turning ideas into practical digital products.
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            I'm Abiodun Itunuoluwa Alabi, a web developer focused on building
            responsive and practical web applications that solve real problems.
          </p>

          <p>
            My development journey started with the fundamentals of web
            development and has grown into full-stack development. Along the
            way, I've worked with technologies including JavaScript, React,
            Next.js, Node.js, Express and MongoDB.
          </p>

          <p>
            I enjoy taking an idea from its early requirements through
            interface development, backend logic and database integration.
            Working on real projects has helped me understand that good
            development is not only about writing code, but also about
            understanding the problem and building something useful for the
            people who will use it.
          </p>

          <p>
            I'm continuously improving my skills through hands-on projects,
            learning new technologies and refining the way I approach software
            development. My goal is to keep building reliable digital
            products while growing into a stronger full-stack developer.
          </p>

          <div className="about-details">
            <div className="about-detail">
              <span>01</span>

              <div>
                <strong>Frontend</strong>

                <p>
                  Responsive interfaces and interactive experiences built with
                  modern frontend technologies.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>02</span>

              <div>
                <strong>Backend</strong>

                <p>
                  APIs, server-side logic and database integration for
                  functional web applications.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>03</span>

              <div>
                <strong>Continuous Growth</strong>

                <p>
                  Learning through real projects, problem solving and
                  consistent improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
