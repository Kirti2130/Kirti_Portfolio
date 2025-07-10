import React from 'react'
import './Hero.css'
import heroimg from '../../assets/heroimg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={heroimg} alt="" className='profile-img' />
      <h1>Hii,I am Kirti.</h1>
    <p>I am React Developer</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        {/* <div className="hero-resume">My resume</div> */}
        <a href ="ReactFrontEnd_Developer_Kirti Malap.pdf" download="Resume.pdf" className="hero-resume">My Resume</a>
      </div>
    </div>
  )
}

export default Hero
