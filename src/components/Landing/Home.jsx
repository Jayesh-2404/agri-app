"use client"; // Required for client-side packages
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import img1 from '../assets/image/hero-image.png';
import img2 from '../assets/image/hero-image2.png';
import img3 from '../assets/image/hero-image3.png';
import digitalFarmer from '../assets/image/digital-farmer.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Home.scss';
import { useRouter } from "next/navigation";


const Home = () => {
  const router = useRouter();

  return (
    <div className='home' id='home'>
      <Carousel
        infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} showIndicators={false} interval={3000}
      >
        <div className='carousel-item'>
          <Image src={img1} alt="img1" width={1920} height={1080} priority />
          <div className='carousel-caption'>
            <h2>AGRO APP</h2>
            <p>Discover Government Aided Schemes , Subsidies and Financial Support  supporting farmers</p>
          </div>
        </div>
        <div className='carousel-item'>
          <Image src={img2} alt="img2" width={1920} height={1080} />
          <div className='carousel-caption'>
            <h2>AGRO APP</h2>
            <p>Discover Government Aided Schemes supporting farmers</p>
          </div>
        </div>
        <div className='carousel-item'>
          <Image src={img3} alt="img3" width={1920} height={1080} />
          <div className='carousel-caption'>
            <h2>AGRO APP</h2>
            <p>Discover Government Aided Schemes supporting farmers</p>
          </div>
        </div>
      </Carousel>
      <section id="scheme-section">
        <div className="text-wrapper">
          <div className="title-text">
            <h1>Personalize Assistance for Farmers!</h1>
            <p className="subheading">
            Smart Farming, Smarter Choices: AI-Powered Access to Government Schemes, Subsidies, and Financial Support!
              <br />
            </p>
          </div>
          <div className="btn-wrapper">
          <button type="button" onClick={() => router.push("/chat")}>
          Ai Aisstant ➜
          </button>
          </div>
        </div>
        <section className="scheme-section">
          <div className="scheme-container">
            <div className="scheme-item">
              <span className="scheme-count">100+</span>
              <div className="scheme-info">
                <span className="scheme-title">Total Schemes →</span>
              </div>
            </div>
            <div className="scheme-item">
              <span className="scheme-count">50+</span>
              <div className="scheme-info">
                <span className="scheme-title">Central Schemes →</span>
              </div>
            </div>
            <div className="scheme-item">
              <span className="scheme-count">100+</span>
              <div className="scheme-info">
                <span className="scheme-title">States/UTs Schemes →</span>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="about">
        <div className="about-container">
          <div className="content">
            <h3>About Project</h3>
            <p>
              Welcome to Agro App, a pioneering National Platform developed as
              part of our  project for the subject of Web-Based
              Programming. Our platform serves as a comprehensive solution, offering
              a single point of access for citizens to explore and discover various
              Government schemes related to agriculture.

            </p>
            <p>
            Our platform is designed to help farmers easily access government schemes, subsidies, and financial support 
            in a simple and user-friendly manner. With a smart chatbot featuring voice input, farmers can search for 
            relevant schemes without needing to type, making it accessible even for those unfamiliar with technology. 
            The website supports multiple languages, ensuring farmers across India can use it in their preferred language.
             Additionally, the bookmark feature allows users to save important schemes for future reference. 
             
            </p>
            
            <a href="/about" className="view-more">View More →</a>
          </div>
          <div className="image-container">
            <Image
              src={digitalFarmer}
              alt="Video about myScheme"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home;