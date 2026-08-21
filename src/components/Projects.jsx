import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Movie Project",
      description: "A movie website built using HTML, CSS and JavaScript."
    },
    {
      title: "Examination System",
      description: "An examination website with registration and login features."
    },
    {
      title: "McKinsey Clone",
      description: "A responsive website inspired by the McKinsey website."
    },
    {
      title: "Apple Clone",
      description: "A responsive Apple website clone using Bootstrap."
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
       {projects.map(function (project) {
          return (
           <ProjectCard
            key={project.title}
             title={project.title}
             description={project.description}
            image={project.image}
    /> 
  );
})}
      </div>
    </section>
  );
}

export default Projects;