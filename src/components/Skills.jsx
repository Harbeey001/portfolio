const skillGroups = [
{
number: "01",
title: "Frontend Development",
description:
"Building responsive interfaces and interactive web experiences.",
skills: [
"HTML5",
"CSS3",
"JavaScript",
"React.js",
"Next.js",
"Tailwind CSS",
"Bootstrap",
"Vite",
],
},
{
number: "02",
title: "Backend Development",
description:
"Building server-side applications, APIs and application logic.",
skills: [
"Node.js",
"Express.js",
"REST APIs",
"EJS",
"Authentication",
"CRUD Operations",
],
},
{
number: "03",
title: "Database",
description:
"Working with application data and connecting backend systems to databases.",
skills: [
"MongoDB",
"Mongoose",
],
},
{
number: "04",
title: "Tools & Workflow",
description:
"Tools I use to develop, manage and deploy web projects.",
skills: [
"Git",
"GitHub",
"Vercel",
"Figma",
"Supabase",
],
},
];

const exploring = [
"TypeScript",
"Prisma",
"PostgreSQL",
"Progressive Web Apps",
];

function Skills() {
return ( <section id="skills" className="section skills-section"> <div className="container"> <div className="skills-header"> <div className="section-header"> <p className="section-label">
Technical Skills </p>

```
        <h2 className="section-title">
          Technologies I use to build.
        </h2>

        <p className="section-description">
          My current toolkit covers frontend development, backend
          development, databases and the tools I use throughout the
          development workflow.
        </p>
      </div>
    </div>

    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article
          className="skill-card"
          key={group.number}
        >
          <div className="skill-card-top">
            <span className="skill-number">
              {group.number}
            </span>

            <span className="skill-card-line"></span>
          </div>

          <div className="skill-card-content">
            <h3>
              {group.title}
            </h3>

            <p>
              {group.description}
            </p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="exploring">
      <div className="exploring-content">
        <p className="exploring-label">
          Currently Exploring
        </p>

        <h3>
          Expanding my development toolkit.
        </h3>

        <p className="exploring-description">
          Technologies I'm actively learning and incorporating into my
          development workflow.
        </p>
      </div>

      <div className="exploring-tags">
        {exploring.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>


);
}

export default Skills;
