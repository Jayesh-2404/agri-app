"use client"
import { useEffect } from "react";
import "../styles/GoogleTranslate.scss"

const GoogleTranslate = () => {
  useEffect(() => {
    // Check if the script is already added
    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script"; // Add an ID to the script
      addScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "hi,mr,bn,gu,kn,ml,pa,ta,te,ur",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div id="google_translate_element">
      {/* <span className="globe-icon">🌍</span> */}
    </div>
  );
};

export default GoogleTranslate;
