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
    <div className='home w-full overflow-x-hidden' id='home'>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        interval={3000}
        className="w-full"
      >
        <div className='carousel-item relative'>
          <Image 
            src={img1} 
            alt="img1" 
            width={1920} 
            height={1080} 
            priority 
            className="w-full h-auto object-cover"
          />
          <div className='carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 md:px-0'>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">AGRO APP</h2>
            <p className="text-sm md:text-lg max-w-2xl mx-auto">Discover Government Aided Schemes, Subsidies and Financial Support supporting farmers</p>
          </div>
        </div>
        <div className='carousel-item relative'>
          <Image 
            src={img2} 
            alt="img2" 
            width={1920} 
            height={1080}
            className="w-full h-auto object-cover"
          />
          <div className='carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 md:px-0'>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">AGRO APP</h2>
            <p className="text-sm md:text-lg max-w-2xl mx-auto">Discover Government Aided Schemes supporting farmers</p>
          </div>
        </div>
        <div className='carousel-item relative'>
          <Image 
            src={img3} 
            alt="img3" 
            width={1920} 
            height={1080}
            className="w-full h-auto object-cover"
          />
          <div className='carousel-caption absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 md:px-0'>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">AGRO APP</h2>
            <p className="text-sm md:text-lg max-w-2xl mx-auto">Discover Government Aided Schemes supporting farmers</p>
          </div>
        </div>
      </Carousel>

      <section id="scheme-section" className="py-12 px-4 md:px-8">
        <div className="text-wrapper max-w-6xl mx-auto">
          <div className="title-text text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Personalize Assistance for Farmers!</h1>
            <p className="subheading text-sm md:text-lg text-gray-600">
              Smart Farming, Smarter Choices: AI-Powered Access to Government Schemes, Subsidies, and Financial Support!
            </p>
          </div>
          <div className="btn-wrapper text-center">
            <button 
              type="button" 
              onClick={() => router.push("/chat")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              Ai Assistant ➜
            </button>
          </div>
        </div>

        <section className="scheme-section mt-12">
          <div className="scheme-container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="scheme-item bg-white p-6 rounded-lg shadow-md">
              <span className="scheme-count text-3xl md:text-4xl font-bold text-blue-600 block mb-2">100+</span>
              <div className="scheme-info">
                <span className="scheme-title text-gray-700">Total Schemes →</span>
              </div>
            </div>
            <div className="scheme-item bg-white p-6 rounded-lg shadow-md">
              <span className="scheme-count text-3xl md:text-4xl font-bold text-blue-600 block mb-2">50+</span>
              <div className="scheme-info">
                <span className="scheme-title text-gray-700">Central Schemes →</span>
              </div>
            </div>
            <div className="scheme-item bg-white p-6 rounded-lg shadow-md">
              <span className="scheme-count text-3xl md:text-4xl font-bold text-blue-600 block mb-2">100+</span>
              <div className="scheme-info">
                <span className="scheme-title text-gray-700">States/UTs Schemes →</span>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="about" className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="about-container max-w-6xl mx-auto">
          <div className="content md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">About Project</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Welcome to Agro App, a pioneering National Platform developed as
              part of our project for the subject of Web-Based
              Programming. Our platform serves as a comprehensive solution, offering
              a single point of access for citizens to explore and discover various
              Government schemes related to agriculture.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Our platform is designed to help farmers easily access government schemes, subsidies, and financial support 
              in a simple and user-friendly manner. With a smart chatbot featuring voice input, farmers can search for 
              relevant schemes without needing to type, making it accessible even for those unfamiliar with technology. 
              The website supports multiple languages, ensuring farmers across India can use it in their preferred language.
              Additionally, the bookmark feature allows users to save important schemes for future reference.
            </p>
            <a href="/about" className="view-more text-blue-600 hover:text-blue-700 font-medium">
              View More →
            </a>
          </div>
          <div className="image-container md:w-1/2">
            <Image
              src={digitalFarmer}
              alt="Video about myScheme"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;