import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import './Contact.css';

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
      {/* Existing About Us content */}
      <div className="about about-fade-in-up">
        {/* About Us Section */}
        {/* Mission and Vision */}
      </div>

      {/* Call to Action Section */}
      <section className="call-to-action about-fade-in-up">
        <h2>Join Our Community</h2>
        <p>Engage with other wildlife enthusiasts and experts.</p>
        <Link to="/login" className="cta-button">Join the Forum</Link>
      </section>

      {/* Partnerships Section */}
      <section className="partnerships about-fade-in-left">
        <h2>Our Partnerships</h2>
        <p>Collaborating with like-minded organizations to make a difference.</p>
        <div className="partners">
          <div className="partner">
            <img src="/partner1.jpg" alt="Partner 1" />
            <Link to="/blog/1" className="read-more">Diana Fosel</Link>
          </div>
          <div className="partner">
            <img src="/partner2.jpg" alt="Partner 2" />
            <Link to="/RDB" className="read-more">RDB</Link>
          </div>
          {/* Add more partner elements as needed */}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs about-fade-in-right">
        <h2>Our Blog</h2>
        <p>Stay updated with our latest posts and wildlife stories.</p>
        <div className="blog-posts">
          <div className="blog-post">
            <img src="/blog1.jpg" alt="Blog Post 1" />
            <h3>Blog Post Title 1</h3>
            <p>Summary of the blog post goes here...</p>
            <Link to="/blog/1" className="read-more">Read More</Link>
          </div>
          <div className="blog-post">
            <img src="/blog2.jpg" alt="Blog Post 2" />
            <h3>Blog Post Title 2</h3>
            <p>Summary of the blog post goes here...</p>
            <Link to="/blog/2" className="read-more">Read More</Link>
          </div>
          {/* Add more blog post elements as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
