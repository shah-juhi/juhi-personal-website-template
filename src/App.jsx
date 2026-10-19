// This file contains the website's content and component structure
import './App.css'
import profileImage from './assets/me.png'

// This object stores the words and links shown on the page.
// You can edit the text here without needing to change the layout below.
// Change these details to make this website yours.
const siteInfo = {
  name: 'Juhi Shah',
  role: 'First Byte Member',
  intro: 'First Year CS Student @ UF',
  // Replace profile.png in src/assets to use your own profile picture.
  image: profileImage,
  location: 'Based in Gainesville, FL',
  email: 'capybara@ufl.edu',
  about: 'I like to explore building fullstack applications, and am currently looking to learn as much as possible. I have a particular interest in trainning AI models and building applications that utilize them. I am also interested in learning more about cybersecurity and how to build secure applications.',
  // Add, remove, or rename languages and tools in this list.
  skills: ['Python', 'HTML & CSS', 'Git & GitHub'],
  // Add a new project by copying one of these lines and changing its words.
  projects: [
    { title: 'Moodie', description: 'Project for Swamphacks XII. Sentiment Analysis through subtitles of movies.', tag: 'Python project' },
  ],
  // Add your social links here. You can remove any of these if you don't want them to show up.
  links: {
    github: 'https://github.com/shah-juhi',
    linkedin: 'https://www.linkedin.com/in/shah-juhi/',
  },
}

// This takes the first word from the full name for the greeting.
const firstName = siteInfo.name.split(' ')[0]

// App is the main component, which means it describes the whole webpage.
function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${siteInfo.name} home`}>
          <span className="brand-mark">CW</span>
          <span>{siteInfo.name}</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {siteInfo.role}</p>
            <h1>Hi, I’m {firstName}.</h1>
            <p className="intro">{siteInfo.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href={`mailto:${siteInfo.email}`}>Get in touch</a>
            </div>
          </div>

          <div className="profile">
            <img className="profile-picture" src={siteInfo.image} alt={`Portrait of ${siteInfo.name}`} />
            <p><span className="location-dot" />{siteInfo.location}</p>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-label"><span>01</span> About me</div>

          <div className="section-content">
            <h2>Six Sevennnn</h2>
            <p>{siteInfo.about}</p>

            <ul className="skill-list" aria-label="Skills">
              {siteInfo.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-label"><span>02</span> Selected work</div>

          <div className="section-content">
            <h2>Things I’m making.</h2>

            <div className="project-list">
              {siteInfo.projects.map((project, index) => (
                <article className="project" key={project.title}>
                  <div className="project-meta">
                    <p className="project-number">0{index + 1}</p>
                    <p className="project-tag">{project.tag}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Have a question?</p>
          <a className="footer-email" href={`mailto:${siteInfo.email}`}>
            {siteInfo.email}
          </a>
        </div>

        <div className="footer-links">
          <a href={siteInfo.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteInfo.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="footer-note">Built with React + CSS</p>
      </footer>
    </div>
  )
}

export default App
