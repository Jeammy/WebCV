import '../styles/about.css'

export default function about(){
  return (
    <div className="home">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div class="hero-content">
          <h1>Your Name</h1>
          <p>Computer Science Student</p>
          <a href="#projects" class="btn">View Projects</a>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>Your introduction and background information can go here.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div class="project-card">
          <h3>Project 1</h3>
          <p>Description of your project.</p>
          <a href="#">View Project</a>
        </div>
        
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at your@email.com</p>
      </section>

      <footer>
        <p>&copy; 2023 Your Name</p>
      </footer>
    </div>
  )
}