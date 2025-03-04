import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/prob.webp";
import projImg2 from "../assets/img/ids.webp";
import projImg3 from "../assets/img/dld.avif";
import projImg4 from "../assets/img/data.png";
import backgroundImage from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const projects = [
  {
    title: "Probability and Statistics",
    description: "Data Analysis and Visualization using R",
    imgUrl: projImg1,
    link: "https://github.com/malaika-zb/Probability-and-Statistics-Project"
  },
  {
    title: "Data Science",
    description: "End-to-End Data Science Implementation",
    imgUrl: projImg2,
    link: "https://github.com/malaika-zb/Data-Science-Project-"
  },
  {
    title: "Digital Logic Design",
    description: "Simulation of Digital Circuits using Proteus",
    imgUrl: projImg3,
    link: "https://github.com/malaika-zb/Digital-Logic-Design-Project"
  },
  {
    title: "Data Structures",
    description: "Advanced Data Structures and Algorithms",
    imgUrl: projImg4,
    link: "https://github.com/noorulhuda555/DS-project"
  }
];

export const Projects = () => {
  return (
    <section className="project" id="projects" style={styles.section}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={styles.heading}>Projects</h2>
                  <p style={styles.description}>
                    Here are some of the projects I have worked on during my academic and personal learning journey.
                  </p>

                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} md={6} className="mb-4">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ ...cardStyles.card }} 
      className="project-card"
    >
      <div style={cardStyles.imageContainer}>
        <img src={imgUrl} alt={title} style={cardStyles.image} />
      </div>
      <div style={cardStyles.text}>
        <h4 style={cardStyles.title}>{title}</h4>
        <p style={cardStyles.description}>{description}</p>
        <p style={cardStyles.githubLink}>View on GitHub</p>
      </div>
    </a>
  );
};

const styles = {
  section: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '80px 0',
    textAlign: 'center',
    position: 'relative',
    color: '#fff'
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff'
  },
  description: {
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: '0 auto 40px'
  }
};

const cardStyles = {
  card: {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer',
    position: 'relative'
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  text: {
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff'
  },
  description: {
    fontSize: '1rem',
    marginBottom: '10px'
  },
  githubLink: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#007bff'
  }
};

const addHoverEffect = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 20px rgba(0,0,0,0.25);
    }
  `;
  document.head.appendChild(style);
};

addHoverEffect();
