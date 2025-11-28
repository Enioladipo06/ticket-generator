import ticketPattern from "../assets/images/pattern-ticket.svg";
import logoFull from "../assets/images/logo-full.svg";
import logoMark from "../assets/images/logo-mark.svg";
import githubIcon from "../assets/images/icon-github.svg";

function TicketPreview({ formData }) {
  return (
    <div className="relative flex flex-col items-center gap-8 px-6">
      <section className="text-center max-w-[900px]">
        <div>
          <img
            src={logoFull}
            alt="Coding Conf Logo"
            className="mx-auto mb-6 w-32"
          />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Congrats, <span className="text-rose-400">{formData.fullName}!</span>
          <br /> Your ticket is ready.
        </h1>
        <p className="text-sm text-gray-300 max-w-[300px] mx-auto mt-3">
          We've emailed your ticket to{" "}
          <span className="text-rose-400">{formData.email}</span> and will send
          updates in the run up to the event.
        </p>
      </section>

      <div className="relative mt-10 shadow-[0_0_25px_rgba(255,255,255,0.1)]">
        <img src={ticketPattern} alt="Ticket Pattern" className="w-[520px] mx-auto" />
        <p className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-xs sm:text-sm text-gray-400 tracking-[0.3em]">#01609</p>

        <div className="absolute inset-0 flex flex-col justify-center px-6 pt-2 gap-8">
          <div className="flex flex-row items-center gap-3">
            <img src={logoMark} alt="" className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Coding Conf</h3>
              <p className="text-sm text-gray-400">Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={formData.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-md object-cover"
            />
            <div>
              <h3 className="text-base font-semibold">{formData.fullName}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <img src={githubIcon} alt="" className="w-4 h-4" />
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
