import React from 'react'
import Image from "next/image";

import Logo from  '../assets/image/logo_black.png'
import {AiFillYoutube,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <section className="footer-section">
        <footer className="footer">
            <div className="footer-left">
                <Image src={Logo} alt="Company Logo" width={50} height={50} />
            </div>
            <div className='footer-right' >
                <ul className="social-links">
                    <li><a href="https://youtube.com" target={'blank'}><AiFillYoutube /></a></li>
                    <li><a href='https://www.linkedin.com/in/sanket-jagtap-b03238312/' target={'blank'}><AiFillLinkedin/></a></li>
                    <li><a href='https://www.github.com/ItzSanket99' target={'blank'}><AiFillGithub/></a></li>
                </ul>
            </div>
        </footer>
    </section>
  )
}

export default Footer