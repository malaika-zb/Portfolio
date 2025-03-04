import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect" style={styles.section}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                  style={styles.image}
                />
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} style={styles.formContainer}>
                  <h2 style={styles.heading}>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          style={styles.input} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          style={styles.input} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          style={styles.input} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          style={styles.input} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="4" value={formDetails.message} placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          style={styles.textarea}></textarea>
                        <button type="submit" style={styles.button}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p style={status.success ? styles.successMessage : styles.errorMessage}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const styles = {
  section: {
    background: '#0c0c14',
    padding: '60px 0', 
    color: '#fff',
    fontFamily: '"Poppins", sans-serif',
    margin: '0',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
    filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))',
  },
  formContainer: {
    background: 'rgba(15, 15, 25, 0.95)',
    padding: '20px',  // Reduced padding
    borderRadius: '10px',  // Smaller box
    boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
    border: '1px solid rgba(0, 255, 255, 0.3)',
    backdropFilter: 'blur(8px)',
    maxWidth: '380px',  // Restrict width
    margin: 'auto',  // Center it
  },
  heading: {
    fontSize: '1.2rem',  // Smaller heading
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '10px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'rgba(20, 20, 40, 0.8)',
    border: '1px solid rgba(0, 255, 255, 0.4)',
    color: '#fff',
    padding: '8px',
    borderRadius: '6px',
    width: '100%',
    marginBottom: '8px',
    fontSize: '0.9rem',  // Smaller font
  },
  textarea: {
    backgroundColor: 'rgba(20, 20, 40, 0.8)',
    border: '1px solid rgba(0, 255, 255, 0.4)',
    color: '#fff',
    padding: '8px',
    borderRadius: '6px',
    width: '100%',
    marginBottom: '8px',
    fontSize: '0.9rem',  // Smaller font
  },
  button: {
    background: '#00f2f2',
    color: '#0c0c14',
    fontWeight: 'bold',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '0.9rem',  // Smaller button text
    width: '100%',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
    marginTop: '5px',
  },
  successMessage: {
    color: '#00ff99',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  errorMessage: {
    color: '#ff3366',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
};
