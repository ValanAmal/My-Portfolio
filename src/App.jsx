import React from 'react';

const PhiloPortfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>PHILO SANJAY CHAMBERLINE P</h1>
      <h2>STUDENT</h2>

      <div className="profile">
        <h2>PROFILE</h2>
        <p>
          Eager and diligent student with a strong foundation in Python, MongoDB, and Dart, supplemented by exposure to Java and C.
          Passionate about leveraging programming expertise to develop innovative solutions and seeking opportunities to apply theoretical knowledge to practical projects.
        </p>
      </div>

      <div className="contact">
        <h2>CONTACT</h2>
        <p>PHONE: +91 9342015579</p>
        <p>GITHUB: <a href="https://github.com/Philotheephilix">https://github.com/Philotheephilix</a></p>
        <p>LINKEDIN: <a href="https://www.linkedin.com/in/philotheephilix/">https://www.linkedin.com/in/philotheephilix/</a></p>
        <p>EMAIL: <a href="mailto:Philosanjaychamberline.26csb@licet.ac.in">Philosanjaychamberline.26csb@licet.ac.in</a></p>
      </div>

      <div className="hobbies">
        <h2>HOBBIES</h2>
        <ul>
          <li>Music</li>
          <li>Games</li>
        </ul>
      </div>


      <div className="skills">
        <h2>KEY SKILLS</h2>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
          <li>Arduino</li>
          <li>Bash</li>
          <li>Selenium</li>
          <li>Flutter</li>
          <li>Dart</li>
          <li>Linux</li>
          <li>Git</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      <div className="education">
        <h2>EDUCATION</h2>
        <p>BMC Matric Higher Secondary School</p>
        <p>SSLC and HSC</p>
        <p>LICET : Loyola-ICAM College of Engineering and Technology</p>
        <p>2022 - 2026</p>
        <p>Bachelor of Engineering [Computer Science Department]</p>
      </div>

      <div className="projects">
        <h2>PROJECTS</h2>
        <div className="project">
          <h3>Multi-functional-telegram-bot [PYTHON]</h3>
          <p>This Bot is the multifunctional bot. Use it to check weather, convert JPG to PDF, check emails, tell jokes, download Instagram reels and posts and much more</p>
        </div>
        <div className="project">
          <h3>CheckMate: Attendance Tracker [HTML, CSS, PYTHON(Flask)]</h3>
          <p>This comprehensive tool is designed to simplify attendance management for educational institutions, providing powerful features and a user-friendly interface.</p>
        </div>
        <div className="project">
          <h3>Carbonites - Android App to Reduce Carbon Footprint [FLUTTER]</h3>
          <p>It is an Android app to calculate the amount of carbon footprint emitted by an individual by monitoring their expenses. When a person purchases food items, travel tickets or everyday essentials, the amount they spent using their card and UPI payment methods will be tracked and the system will estimate the amount of carbon footprint left by them</p>
        </div>
        <div className="project">
          <h3>Universal Bruteforcer to bypass login [PYTHON]</h3>
          <p>Python utility to bruteforce any web site by providing credential field position and wordlist</p>
        </div>
        <div className="project">
          <h3>Small-Scale-Business-incubator-FLUTTER</h3>
          <p>This app is a platform designed to empower small businesses by providing them with an opportunity to showcase their products or services to potential customers.</p>
        </div>
        <div className="project">
          <h3>oracle-bot</h3>
          <p>An Automated bot to complete oracle academy courses with one click.</p>
        </div>
        <div className="project">
          <h3>pattarai-website-resolved</h3>
          <p>Pattarai Website Official Deployment.</p>
        </div>
        <div className="project">
          <h3>Quiz-Solver-Using-LLM-api-s</h3>
          <p>This Repo Gets the question and option from a http request and returns the response to the client.</p>
        </div>
        <div className="project">
          <h3>My-Portfolio</h3>
          <p>Personal portfolio site built with react.</p>
        </div>
        <div className="project">
          <h3>Universal_bruteforcer_for_all_web_pages</h3>
          <p>This python utility contains a script to bruteforce any website by providing credential field position and wordlist.</p>
        </div>
        <div className="project">
          <h3>Dell-fan-control-config-system-service</h3>
          <p>This repo combines the use of fancontrol,i8kutils and dell-fan-control modules to create a startup service for dell laptops whose processor fan doesn't work on linux.</p>
        </div>
        <div className="project">
          <h3>IoT-Blueprint</h3>
          <p>IoT Blueprint: Project Navigator" is a comprehensive online platform designed to assist users in generating innovative With a user-friendly interface, IoT Blueprint guides users through a series of…</p>
        </div>
      </div>
    </div>
  );
};

export default PhiloPortfolio;
