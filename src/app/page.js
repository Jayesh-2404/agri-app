import Home from "@/components/Landing/Home";
import Footer from "@/components/Landing/Footer";
import Header from "@/components/Landing/Header";
import Contact from "@/components/Landing/Contact";
import GoogleTranslate from "@/components/translate/GoogleTranslate";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Home/>
      <Contact/>
      <Footer />
    </div>
  );
}