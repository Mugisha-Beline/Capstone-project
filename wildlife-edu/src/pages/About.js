// src/pages/About.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './About.css';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.about-fade-in-up, .about-fade-in-left, .about-fade-in-right');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add('show');
        } else {
          section.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Aboutus">
      <div className="about about-fade-in-up">
        <div className="background-section">
  <div className="content">
    <h1>
      Welcome to Wildlife EDU, a platform dedicated to educating and engaging individuals in the importance of wildlife conservation.
    </h1>
  </div>
  <Link to="/all-events" className="cta-button">Upcoming Events</Link>
</div>
<div> <h2>About Us</h2>
<p>Endangered Animals in Rwanda’s Akagera National Park is the particular focus of the study and it will be undertaken in partnership with local communities, nature care organizations as well as experts</p></div>
<img src="/elephants.jpg" alt="Mission" />
  <div className="about-images">
          <div className="about-image about-fade-in-left">
            <h3>Our Mission</h3>
            <p>We believe that education is the key to fostering a deeper understanding of wildlife.</p>
            <img src="/zebra.jpg" alt="Mission" />
          </div>
          <div className="about-image about-fade-in-right">
            <h3>Our Vision</h3>
            <p>Join our community today and start your journey toward making a difference!</p>
            <img src="/elephants.jpg" alt="Vision" />
          </div>
        </div>
      </div>

      {/* Educational Content Section */}
      <section className="educational-content about-fade-in-up">
        <h2>Study with us at WildlifeEDU!</h2>
        <div className="content-cards">
          <div className="content-card about-fade-in-left">
            <img src="/conservation.jpg" alt="Conservation 101" className="card-image" />
            <h3>Conservation 101</h3>
            <p>Learn the basics of wildlife conservation.</p>
          </div>
          <div className="content-card about-fade-in-up">
            <img src="/technology.jpg" alt="Innovative Technologies" className="card-image" />
            <h3>Innovative Technologies</h3>
            <p>Explore how technology is helping preserve wildlife.</p>
          </div>
          <div className="content-card about-fade-in-right">
            <img src="/local.jpg" alt="Local Wildlife" className="card-image" />
            <h3>Local Wildlife</h3>
            <p>Discover the wildlife in your area and how to protect it.</p>
          </div>
        </div>
      </section>

      {/* Contact Section (optional, can be added as needed) */}
      <section className="contact about-fade-in-up">
        <h2>Let’s Connect With Your Ideas!</h2>
        <div className="contact-content">
          <img src="/contact.jpg" alt="Contact Us" className="contact-image about-fade-in-right" />
          <form>
            <div className="form-group about-fade-in-up">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group about-fade-in-up">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group about-fade-in-up">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                required
                placeholder="Type your message here"
              />
            </div>
            <button type="submit" className="contact-button about-fade-in-up">Send Message</button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action about-fade-in-up">
        <h2>Join Our Community</h2>
        <p>Engage with other wildlife enthusiasts and experts.</p>
        <Link to="/Forum" className="cta-button">Join the Forum</Link>
      </section>

      {/* Footer Section */}
      <footer className="footer about-fade-in-up">
        <div className="footer-logo">
          <img src="/WildlifeEduLogo.jpg" alt="Wildlife EDU Logo" className="footer-logo-image about-fade-in-up" />
        </div>
        <div className="footer-links about-fade-in-up">
          <Link to="/Donate">Do you want to support us?</Link>
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Terms">Terms of Service</Link>
        </div>
        <div className="social-media about-fade-in-up">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.jpg" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.jpg" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
