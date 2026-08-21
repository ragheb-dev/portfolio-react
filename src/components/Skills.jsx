function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map(function (skill) {
          return <p key={skill}>{skill}</p>;
        })}
      </div>
    </section>
  );
}

export default Skills;