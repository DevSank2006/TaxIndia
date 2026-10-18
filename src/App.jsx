import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Services from "./components/Services.jsx";
import Banking from "./components/Banking.jsx";
import Calculator from "./components/Calculator.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Reviews from "./components/Reviews.jsx";
import Advisor from "./components/Advisor.jsx";
import Contact from "./components/Contact.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ServiceApplyModal from "./components/ServiceApplyModal.jsx"

export default function App() {
  const [selectedService, setSelectedService] = useState("GST Registration");
  const[isSubmitted,setIsSubmitted]=useState(false)
  const[showForm,setShowForm]=useState(false)

const handleBankingApply = (title) => {
  setSelectedService(title);
  setShowForm(true);
};

  return (
    <>
      <Header  showForm={showForm} setShowForm={setShowForm}/>

      {showForm && (
  <ServiceApplyModal
    key={selectedService}
    service={{ name: selectedService }}
    onClose={() => setShowForm(false)}
  />
)}
      <main>
        <Hero onChooseService={setSelectedService} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} form={showForm} setShowForm={setShowForm}  />
        <Benefits />
        <Services onApply={setSelectedService} />
        <Banking onApply={handleBankingApply} />
        <Calculator />
        <WhyUs />
        <Reviews />
        <Advisor />
        <Contact selectedService={selectedService} />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
