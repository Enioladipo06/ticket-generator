import TicketForm from "./components/TicketForm";
import TicketPreview from "./components/TicketPreview";
import { useState } from "react";
import patternTop from "./assets/images/pattern-squiggly-line-top.svg";
import patternBottom from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternBottomMobile from "./assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [formData, setFormData] = useState({
    avatar: "",
    fullName: "",
    email: "",
    github: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative min-h-screen bg-bg-desktop bg-cover bg-center flex items-center justify-center text-white md:bg-bg-tablet lg:bg-bg-desktop overflow-hidden">
  
      <img
        src={patternTop}
        alt=""
        className="absolute top-6 right-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] pointer-events-none z-0"
      />
  
      <picture>
        <source media="(max-width: 767px)" srcSet={patternBottomMobile} />
        <source media="(min-width: 768px)" srcSet={patternBottom} />
        <img
          src={patternBottom}
          alt=""
          className="absolute bottom-[-50px] sm:bottom-[-20pxs] left-0 
                     w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] xl:w-[600px]
                     opacity-90 pointer-events-none z-0"
        />
      </picture>

      <div className="relative z-20 w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 lg:px-20">
        {isLoading ? (
          <LoadingScreen />
        ) : !isSubmitted ? (
          <div className="w-full flex justify-center">
               <TicketForm
            formData={formData}
            setFormData={setFormData}
            setIsSubmitted={setIsSubmitted}
            setIsLoading={setIsLoading}
          />
          </div>
        ) : (
          <div className="w-full flex justify-center">
             <TicketPreview formData={formData} />
          </div>
        )}
      </div>
    </div>
  );
  
}
