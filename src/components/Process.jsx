const steps = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "I start by understanding the goal, users and requirements before deciding what needs to be built.",
  },
  {
    number: "02",
    title: "Plan the solution",
    description:
      "I break the idea into features, user flows and technical requirements so the project has a clear direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop the interface, backend functionality and integrations while keeping the code organized and maintainable.",
  },
  {
    number: "04",
    title: "Test & refine",
    description:
      "I test the application, fix issues and improve the experience across different devices and screen sizes.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Once the application is ready, I prepare it for deployment and make sure the final product is accessible to its users.",
  },
];

function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="process-layout">
          <div className="process-intro">
            <p className="section-label">My Process</p>

            <h2 className="section-title">
              From an idea to a working product.
            </h2>

            <p className="section-description">
              I keep my development process straightforward: understand the
              problem, build the right solution, test it and improve it.
            </p>
          </div>

          <div className="process-list">
            {steps.map((step) => (
              <div className="process-item" key={step.number}>
                <span className="process-number">
                  {step.number}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
