import React from 'react'
// importing image
import profileImage from "../../assets/images/profileimage.JPG";

// About component
function About() {
  return (
    <section className='profile'>
      <div className='aboutme' id="about">
        <h1>Hello, this is me !</h1>
      </div>
      <div>
        <img
          src={profileImage}
          alt="about-me"
          className="profile-image"
        />
      </div>
      <div className='left'>
        <p>
        Recently graduated as a Fullstack Web Developer from University of North Carolina, and gained hands on experience developing interactive applications using HTML, JavaScript, CSS,Node.js,Express.js,SQL/NOSQL(MongoDB), React.js, and responsive web design. I am an innovative problem solver and a passionate web application designer who works hard to make better user experience.
        </p>
      </div>
    </section>
  )
}

export default About;