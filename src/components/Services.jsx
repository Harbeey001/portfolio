const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive websites and web applications around the goals, users and requirements of a project.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating responsive, accessible and interactive interfaces using React and modern frontend technologies.",
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Developing APIs, server-side logic, authentication and database integrations with Node.js, Express and MongoDB.",
  },
  {
    number: "04",
    title: "Website Improvement",
    description:
      "Improving existing websites through better responsiveness, usability, structure and overall user experience.",
  },
];

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-header">
          <div className="section-header">
            <p className="section-label">
              Services
            </p>

            <h2 className="section-title">
              Turning requirements into working solutions.
            </h2>

            <p className="section-description">
              I can help with everything from responsive website interfaces to
              backend functionality and complete web applications.
            </p>
          </div>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article
              className="service-item"
              key={service.number}
            >
              <span className="service-number">
                {service.number}
              </span>

              <div className="service-main">
                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>
              </div>

              <span
                className="service-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="services-cta">
          <p>
            Have a website or application idea?
          </p>

          <a href="#contact">
            Let's discuss it →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
