import { Container, Row, Col, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import githubIcon from "../assets/img/githubbb.png";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import instagramIcon from "../assets/img/nav-icon3.svg";

export const Footer = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  const clearFields = () => setEmail('');

  useEffect(() => {
    const button = document.querySelector('.new-email-bx button');
    if (button) {
      const applyHover = () => Object.assign(button.style, styles.buttonHover);
      const removeHover = () => Object.assign(button.style, styles.button);

      button.addEventListener('mouseenter', applyHover);
      button.addEventListener('mouseleave', removeHover);

      return () => {
        button.removeEventListener('mouseenter', applyHover);
        button.removeEventListener('mouseleave', removeHover);
      };
    }
  }, []);

  return (
    <footer className="footer" style={styles.footer}>
      <Container>
        {/* Newsletter Section at Top */}
        <Row className="align-items-center" style={styles.newsletterWrapper}>
          <Col lg={12}>
            <div className="newsletter-bx wow slideInUp" style={styles.newsletterBox}>
              <Row className="align-items-center">
                <Col lg={12} md={6} xl={5}>
                  <h3 style={styles.heading}>Subscribe to our Newsletter<br />& Never miss latest updates</h3>
                  {status === 'sending' && <Alert style={styles.alert}>Sending...</Alert>}
                  {status === 'error' && <Alert variant="danger" style={styles.alert}>{message}</Alert>}
                  {status === 'success' && <Alert variant="success" style={styles.alert}>{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                  <form onSubmit={handleSubmit}>
                    <div className="new-email-bx" style={styles.emailBox}>
                      <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        style={styles.input}
                      />
                      <button type="submit" style={styles.button}>Submit</button>
                    </div>
                  </form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Social Links & Copyright at Bottom */}
        <Row className="align-items-center mt-4" style={styles.bottomSection}>
          <Col xs={12} className="text-center">
            <div className="social-icon">
              <a href="https://github.com/malaika-zb?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub Icon" style={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/malaika-zainab-230b0b293/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn Icon" style={styles.icon} />
              </a>
              <a href="https://www.instagram.com/malaika_zb/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram Icon" style={styles.icon} />
              </a>
            </div>
            <p style={styles.copyright}>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#0b0b15',
    paddingTop: '40px',
    paddingBottom: '20px',
    color: '#fff',
    marginTop: '50px',
  },
  newsletterWrapper: {
    marginBottom: '30px',
  },
  newsletterBox: {
    background: 'rgba(15, 15, 25, 0.95)',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
    border: '1px solid rgba(0, 255, 255, 0.3)',
    backdropFilter: 'blur(8px)',
  },
  heading: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '15px',
  },
  alert: {
    fontSize: '0.9rem',
    padding: '8px 12px',
    margin: '10px 0',
    borderRadius: '10px',
    fontWeight: 'bold',
  },
  emailBox: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid rgba(0, 255, 255, 0.5)',
    backgroundColor: 'rgba(20, 20, 40, 0.9)',
    color: '#fff',
    outline: 'none',
    transition: 'all 0.3s',
  },
  button: {
    background: '#00f2f2',
    color: '#0c0c14',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  buttonHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
  },
  bottomSection: {
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  socialIcon: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '10px',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  copyright: {
    fontSize: '0.9rem',
    marginTop: '10px',
    color: '#ccc',
  }
};
