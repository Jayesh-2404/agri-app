"use client"; // Required in Next.js for useRouter()

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../assets/image/logo.png"; // Ensure correct path
import "../styles/Header.scss"; // Ensure SCSS setup
import "../styles/Home.scss";
import GoogleTranslate from "../translate/GoogleTranslate";

const Header = () => {
  const router = useRouter(); // Hook for navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav aria-label="Main Navigation">
      <Image src={logo} alt="Logo" width={50} height={50} /> {/* Optimized Image */}
      
      {/* Desktop Navigation */}
      <main>
        <Link href="/#home">Home</Link>
        <Link href="/#about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/#contact">Contact me</Link>
      </main>

      <div className="btn-wrapper">
        {/* <button type="button">Login</button> */}
        
        <button type="button" onClick={() => router.push("/schemes")}>
          schemes ➜
        </button>
        <div className="google-translate-container">
          <GoogleTranslate/>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link href="/#home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact me</Link>
          <button 
            type="button" 
            onClick={() => {
              router.push("/schemes");
              setIsMenuOpen(false);
            }}
          >
            schemes ➜
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
