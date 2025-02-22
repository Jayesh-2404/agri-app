"use client"; // Required in Next.js for useRouter()

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../assets/image/logo.png"; // Ensure correct path
import "../styles/Header.scss"; // Ensure SCSS setup
import "../styles/Home.scss";

const Header = () => {
  const router = useRouter(); // Hook for navigation

  return (
    <nav aria-label="Main Navigation">
      <Image src={logo} alt="Logo" width={50} height={50} /> {/* Optimized Image */}
      <main>
        <Link href="/#home">Home</Link>
        <Link href="/#about">About Us</Link>
        <Link href="/#services">Services</Link>
        <Link href="/#contact">Contact me</Link>
      </main>
      <div className="btn-wrapper">
      {/* <button type="button">Login</button> */}
      
        <button type="button" onClick={() => router.push("/schemes")}>
          schemes ➜
        </button>
      </div>
    </nav>
  );
};

export default Header;
