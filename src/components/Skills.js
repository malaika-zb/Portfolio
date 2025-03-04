import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

const skills = [
  { name: "Python Programming" },
  { name: "Data Cleaning & Preprocessing" },
  { name: "Machine Learning" },
  { name: "Data Visualization" },
  { name: "Statistics & Probability" },
  { name: "SQL & Databases" },
  { name: "Deep Learning" },
  { name: "Model Deployment" },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills" style={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx" style={styles.skillBox}>
              <h2 style={styles.heading}>Skills</h2>
              <p style={styles.description}>
                A blend of technical expertise and hands-on experience to deliver data-driven solutions.
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {skills.map((skill, index) => (
                  <div key={index} className="item" style={styles.skillItem}>
                    <span style={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" style={styles.backgroundImage} />
    </section>
  );
};

const styles = {
  section: {
    background: '#0c0c14',
    color: '#fff',
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: '"Poppins", sans-serif',
  },
  skillBox: {
    background: 'rgba(15, 15, 25, 0.95)',
    padding: '60px',
    borderRadius: '25px',
    boxShadow: '0 0 40px rgba(0, 255, 255, 0.2)',
    border: '2px solid rgba(0, 255, 255, 0.4)',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#c0c0c0',
    marginBottom: '40px',
  },
  skillItem: {
    padding: '50px 30px',
    background: 'rgba(20, 20, 40, 0.95)',
    borderRadius: '20px',
    boxShadow: '0 5px 15px rgba(0, 255, 255, 0.2)',
    border: '1px solid rgba(0, 255, 255, 0.5)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  skillItemHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 10px 25px rgba(0, 255, 255, 0.5)',
  },
  skillName: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#ffffff', // White instead of blue
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'block',
    transition: 'color 0.3s',
  },
  backgroundImage: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    zIndex: '-1',
    opacity: 0.2,
  },
};

// Optional: Add hover effect via plain CSS or in JSX
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.skill-slider .item');
  items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      Object.assign(item.style, styles.skillItemHover);
    });
    item.addEventListener('mouseleave', () => {
      Object.assign(item.style, styles.skillItem);
    });
  });
});
