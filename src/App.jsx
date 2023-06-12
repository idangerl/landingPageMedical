import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const OtorrinolaringologoPage = () => {
  return (
    <div className="container mx-auto pt-8" id="hero">
      <Header />
      <main className="container my-4">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default OtorrinolaringologoPage;
