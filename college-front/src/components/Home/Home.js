import React from 'react';
import { Link } from 'react-router-dom';
import Highlights from './Highlights';
import './Home.css';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <section className="hero-section">
          <div className="hero-content">
            <h1>NRK College of Engineering and Technology</h1>
            <p>Where excellence meets opportunity</p>
            <Link to="/admission" className="cta-button">Apply Now</Link>
          </div>
        </section>
        <section className="achievements-section">
          <h2>Our Achievements</h2>
          <ul>
            <li>Top-ranked college in the region for the last 5 years.</li>
            <li>Highest student satisfaction rate in the country.</li>
            <li>Awarded for best innovative teaching practices.</li>
            <li>Successful alumni including leaders in various industries.</li>
          </ul>
        </section>
        <section className="highlights-section">
          <h2>College Highlights</h2>
          <Highlights />
        </section>
        <section className="about-us-section">
          <h2>About Us</h2>
          <p>
            NRK College is committed to providing top-quality education and fostering an environment of growth and success. With state-of-the-art facilities and a team of dedicated professionals, we strive to prepare our students for a successful future.
          </p>
          <Link to="/about" className="cta-button">Learn More</Link>
        </section>
        <section className="upcoming-events-section">
          <h2>Upcoming Events</h2>
          <ul>
            <li>Open House: August 15, 2024</li>
            <li>Fall Semester Starts: September 1, 2024</li>
            <li>Annual Alumni Meet: December 10, 2024</li>
          </ul>
        </section>
        <section className="call-to-action-section">
          <h2>Get in Touch</h2>
          <p>Have any questions or need more information? Feel free to reach out to us.</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
