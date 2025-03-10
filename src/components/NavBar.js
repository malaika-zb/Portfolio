import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import githubIcon from '../assets/img/githubbb.png';  // New GitHub icon
import linkedinIcon from '../assets/img/nav-icon1.svg';  // You can replace this with an actual LinkedIn icon if you want
import instagramIcon from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/malaika-zb?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/malaika-zainab-230b0b293/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://www.instagram.com/malaika_zb/" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram Icon" />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
