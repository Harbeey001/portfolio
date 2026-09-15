import { Link } from "react-router-dom";

const projects = [
{
number: "01",
slug: "expense-tracker",
title: "Expense Tracker",
category: "Full-Stack Web Application",
status: "Completed Project",
description:
"A personal finance application for managing income and expenses through a structured dashboard and transaction management system.",
technologies: [
"Next.js",
"TypeScript",
"Tailwind CSS",
"Prisma",
"PostgreSQL",
"Supabase",
],
image: "/images/projects/expense-tracker.png",
liveUrl: "https://expense-tracker-2-teal.vercel.app",
},

{
number: "02",
slug: "okegboho-baptist-church",
title: "Okegboho Baptist Church",
category: "Church Website",
status: "Completed Project",
description:
"A modern church website bringing church information, sermons, media, giving information and communication options into one digital platform.",
technologies: [
"React",
"JavaScript",
"CSS",
"Vercel",
],
image: "/images/projects/okegboho-baptist.png",
liveUrl: "https://okegbohobaptistchurch.vercel.app",
},

{
number: "03",
slug: "farmlink",
title: "FarmLink",
category: "Agricultural Marketplace",
status: "In Development",
description:
"A full-stack marketplace designed to connect farmers with buyers and make agricultural products easier to discover, request and manage.",
technologies: [
"React",
"Node.js",
"Express",
"MongoDB",
],
image: "/images/projects/farmlink.png",
liveUrl: "",
},
];

function Projects() {
return ( <section id="projects" className="section projects-section"> <div className="container"> <div className="projects-heading"> <div className="section-header"> <p className="section-label">
Selected Work </p>

```
        <h2 className="section-title">
          Projects I've built.
        </h2>

        <p className="section-description">
          A selection of projects that demonstrate how I approach
          interfaces, application logic, backend systems and real-world
          problems.
        </p>
      </div>

      <span className="projects-count">
        03 Projects
      </span>
    </div>

    <div className="projects-list">
      {projects.map((project) => (
        <article
          className="project-item"
          key={project.slug}
        >
          <div className="project-number">
            {project.number}
          </div>

          <div className="project-main">
            <div className="project-top">
              <div>
                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

                <Link to={`/projects/${project.slug}`}>
                  View Details →
                </Link>
              </div>
            </div>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="project-preview"
            aria-label={`View ${project.title} details`}
          >
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
            />
          </Link>
        </article>
      ))}
    </div>
  </div>
</section>

);
}

export default Projects;
