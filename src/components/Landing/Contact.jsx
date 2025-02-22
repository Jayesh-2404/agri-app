import React from "react";
import Image from "next/image";

import '../styles/Contact.scss';

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="title-text">
        <h1>Get in Touch</h1>
        <p className="subheading">Fill up the form to get in touch with us.</p>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <div className="container-left">
            <h3>Fill the Form*</h3>
            <form id="contactForm">
              <div className="input-row">
                <div className="input-group">
                  <label>Name*</label>
                  <input type="text" id="name" placeholder="Enter your Name" required />
                </div>
                <div className="input-group">
                  <label>Phone*</label>
                  <input type="text" id="phone" placeholder="+91 1234567890" required />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Email*</label>
                  <input type="email" id="email" placeholder="youremail@gmail.com" required />
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" id="subject" placeholder="Inquiry" />
                </div>
              </div>
              <label>Message*</label>
              <textarea rows="10" id="message" placeholder="Enter your Message" required></textarea>
              <button type="submit" className="submit-btn">Send Message ➜</button>
            </form>
          </div>
          <div className="container-right">
            <h3>Reach Us</h3>
            <table>
              <tr>
                <td>Email:</td>
                <td>contact@contactus.com</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>+91 011-45656183</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  Aissms Institute of Information Technology <br />Pune, <br />Maharashtra , India
                </td>
              </tr>
            </table>
            <div className="map">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3782.948130025841!2d73.86456117496323!3d18.53124598256436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x3bc2c0f55639f89f%3A0x22ed3d7c6b61cdf3!2sGVJ8%2BFVR%20All%20India%20Shri%20Shivaji%20Memorial%20Societys%2C%20RB%20Motilal%20Kennedy%20Rd%2C%20k%20near%20RTO%2C%20Sangamvadi%2C%20Pune%2C%20Maharashtra%20411001!3m2!1d18.531246!2d73.8671361!5e0!3m2!1sen!2sin!4v1739945966979!5m2!1sen!2sin" 
                width="800"
                height="275"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;