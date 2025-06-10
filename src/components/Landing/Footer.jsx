import React from 'react'
import Image from "next/image";

import Logo from  '../assets/image/logo_black.png'
import {AiFillYoutube,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <section className="footer-section bg-gray-50 py-8 px-4 md:px-8">
      <footer className="footer max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="footer-left">
          <Image 
            src={Logo} 
            alt="Company Logo" 
            width={50} 
            height={50}
            className="w-12 h-12 md:w-14 md:h-14" 
          />
        </div>
        <div className="footer-right">
          <ul className="social-links flex items-center space-x-6">
            <li>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors text-2xl md:text-3xl"
              >
                <AiFillYoutube />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/sanket-jagtap-b03238312/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors text-2xl md:text-3xl"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a 
                href="https://www.github.com/ItzSanket99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors text-2xl md:text-3xl"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  )
}

export default Footer