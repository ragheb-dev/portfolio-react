function Navbar(props) {
  return (
    <nav>
      <h2>{props.name}</h2>

      <ul>
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
</ul>

      <button onClick={function () {
        props.setDarkMode(!props.darkMode);
      }}>
        {props.darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;