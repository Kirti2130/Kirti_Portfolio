import React from 'react'
import './About.css'
import heroimg from '../../assets/heroimg.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
       
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={heroimg} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Bootstrap</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React js</p><hr style={{width:"45%"}} /></div>
                <div className="about-skill"><p>Wordpress</p><hr style={{width:"50%"}} /></div>
           
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
        <h1>2+</h1>
        <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
        <h1>Certificate</h1>
        <p>FullStack certifiend</p>
        </div>
        <hr />
        <div className="about-achievement">
        <h1>Rewards</h1>
        <p>Best Employee of the year</p>
        </div>
      </div>
    </div>
  )
}

export default About
