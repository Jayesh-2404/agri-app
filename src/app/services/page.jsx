import React from 'react';
import "../../components/styles/Services.scss";

function Services() {
    return ( 
        <>
        <h1 className="" style={{ 
  fontSize: "2.5rem", 
  fontWeight: "bold", 
  color: "#2F855A", 
  textAlign: "center", 
  marginBottom: "24px" 
}}>
  Services
</h1>

 

        <div className="services-container">
            <div className="service">
                <h2>🚀 AI Assistant</h2>
                <p>Get expert farming advice anytime with our smart AI chatbot. Whether you need help with crop selection, pest control, or weather updates, our AI assistant is here to support you.</p>
            </div>
            <div className="service">
                <h2>🌍 Regional Language Support</h2>
                <p>Language should never be a barrier! Our platform is available in multiple regional languages, ensuring accessibility for all farmers.</p>
            </div>
            <div className="service">
                <h2>🔍 Bookmark Important Schemes</h2>
                <p>Easily save and access government schemes that matter to you. Stay informed about subsidies, grants, and other beneficial programs..</p>
            </div>
            <div className="service">
                <h2>📰 Latest Agriculture News</h2>
                <p>Stay ahead with real-time updates on market trends, new policies, and agricultural innovations. Get the latest news tailored for farmers.</p>
            </div>
            <div className="service">
                <h2>💡 User-Friendly Interface</h2>
                <p>Our website is designed with simplicity in mind, ensuring smooth navigation for users of all technical backgrounds.</p>
            </div>
            <div className="service">
                <h2>🔎 Advanced Search Option</h2>
                <p>Find exactly what you’re looking for! Our powerful search feature helps farmers discover valuable agricultural resources, schemes, and websites effortlessly.</p>
            </div>
        </div>
        </>
     );
}

export default Services;