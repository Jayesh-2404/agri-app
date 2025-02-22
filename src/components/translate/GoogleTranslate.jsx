"use client"
import { useEffect } from "react";
import "../styles/GoogleTranslate.scss"
const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

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

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
