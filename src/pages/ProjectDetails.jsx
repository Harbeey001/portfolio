import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="container">
          <p className="section-label">404</p>

          <h1>Project not found.</h1>

          <p>
            The project you're looking for doesn't exist.
          </p>

          <Link to="/" className="btn btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="project-details">

        {/* Header */}
        <section className="project-details-hero">
          <div className="container">

            <Link to="/#projects" className="back-link">
              ← Back to Projects
            </Link>

            <p className="section-label">
              {project.category}
            </p>

            <div className="project-details-heading">
              <div>
                <span className="project-details-number">
                  {project.number}
                </span>

                <h1>{project.title}</h1>
              </div>

              <p>
                {project.description}
              </p>
            </div>

          </div>
        </section>

        {/* Main Image */}
        <section className="project-details-image-section">
          <div className="container">
            <div className="project-details-image">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
              />
            </div>
          </div>
        </section>

        {/* Information */}
        <section className="project-details-content section">
          <div className="container">

            <div className="project-details-grid">

              <div className="project-details-main">

                <div className="project-detail-block">
                  <p className="section-label">
                    Overview
                  </p>

                  <h2>
                    About the project
                  </h2>

                  <p>
                    {project.overview}
                  </p>
                </div>

                <div className="project-detail-block">
                  <p className="section-label">
                    Features
                  </p>

                  <h2>
                    What I built
                  </h2>

                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <aside className="project-details-sidebar">

                <div className="project-sidebar-block">
                  <p className="section-label">
                    Technologies
                  </p>

                  <div className="project-detail-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-sidebar-block">
                  <p className="section-label">
                    Links
                  </p>

                  <div className="project-detail-links">

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                  </div>
                </div>

              </aside>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default ProjectDetails;
