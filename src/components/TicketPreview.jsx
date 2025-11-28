import ticketPattern from "../assets/images/pattern-ticket.svg";
import logoFull from "../assets/images/logo-full.svg";
import logoMark from "../assets/images/logo-mark.svg";
import githubIcon from "../assets/images/icon-github.svg";

function TicketPreview({ formData }) {
  return (
    <div className="w-full flex flex-col items-center px-5 sm:px-8 my-16 animate-fadeUp">

      {/* HEADER AREA */}
      <section className="text-center max-w-[700px] space-y-3">
        <img 
          src={logoFull} 
          alt="Coding Conf Logo" 
          className="mx-auto mb-4 w-32 opacity-95"
        />

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Congrats, <span className="text-rose-400">{formData.fullName}!</span>
          <br /> Your ticket is ready 
        </h1>

        <p className="text-gray-300 text-sm md:text-[15px] mx-auto max-w-[350px] leading-relaxed">
          We've emailed your ticket to {" "}
          <span className="text-rose-400 font-medium">{formData.email}</span> and will send updates in the run up to the event.
        </p>
      </section>

      {/* TICKET SECTION */}
      <div className="relative mt-12">
        
        {/* Ticket Background */}
        <img 
          src={ticketPattern} 
          alt="Ticket Background"
          className="w-[550px] md:w-[650px] mx-auto drop-shadow-lg"
        />

        {/* Ticket Number — rotated cleanly */}
        <p className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 
          text-[10px] sm:text-[11px] tracking-[0.35em] text-gray-400 font-medium">
          #01609
        </p>

        {/* Content layered over ticket */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 py-4 gap-10">

          {/* Event Row */}
          <div className="flex items-center gap-4">
            <img src={logoMark} alt="Logo mark" className="w-9 h-9" />
            <div>
              <h3 className="text-lg font-semibold">Coding Conf</h3>
              <p className="text-xs text-gray-400">Jan 31, 2025 — Austin, TX</p>
            </div>
          </div>

          {/* USER SECTION */}
          <div className="flex items-center gap-4">
            <img 
              src={formData.avatar} 
              alt="Attendee Avatar"
              className="w-14 h-14 rounded-lg object-cover shadow-sm"
            />

            <div className="leading-tight">
              <h3 className="text-[17px] font-semibold">{formData.fullName}</h3>

              <div className="flex items-center gap-2 text-sm text-gray-400 mt-[2px]">
                <img src={githubIcon} className="w-4 h-4 opacity-70" />
                <span>@{formData.github}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TicketPreview;
