import { useState, useRef } from "react";
import uploadIcon from "../assets/images/icon-upload.svg";
import logoFull from "../assets/images/logo-full.svg";

function TicketForm({ formData, setFormData, setIsSubmitted, setIsLoading}) {
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");

  const fileInputRef = useRef(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    const maxSize = 2 * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      setFileError("Invalid file type. Upload PNG or JPG only.");
      return;
    }

    if (file.size > maxSize) {
      setFileError("Image too large — must be under 2MB.");
      return;
    }

    setFileError("");
    setFormData({ ...formData, avatar: URL.createObjectURL(file) });
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    // Reset errors
    const newErrors = {};
  
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }
  
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  
    if (!formData.github) {
      newErrors.github = "Github username is required";
    }
  
    if (!formData.avatar) {
      newErrors.avatar = "Profile image is required";
    }
  
    setErrors(newErrors);
  
    // If no errors, show loading screen then ticket
    if (Object.keys(newErrors).length === 0) {
      // Show loading
      setIsLoading(true);
  
      // Simulate processing delay
      setTimeout(() => {
        setIsLoading(false);     // Hide loading
        setIsSubmitted(true);    // Show ticket preview
      }, 1500); // 1.5 seconds delay
    }
  }
  

  return (
    <div className="w-full max-w-lg px-6 md:px-10 lg:px-0"> {/* MOBILE SPACING FIX */}
      {/* Logo */}
      <div className="flex justify-center">
        <img src={logoFull} alt="CodingConf Logo" className="w-32 mt-10 mb-6" />
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        Your Journey Starts Here 🚀
      </h1>

      <p className="text-gray-300 text-sm md:text-base text-center max-w-[400px] mx-auto mb-10">
        Secure your spot at 2025’s biggest coding event.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* UPLOAD SECTION — now keyboard accessible */}
        <label htmlFor="avatar" className="block font-medium text-sm">
          Upload Avatar
        </label>

        <div 
          tabIndex="0"
          onKeyDown={(e)=> e.key === "Enter" && fileInputRef.current.click()}
          onClick={()=> fileInputRef.current.click()}
          className="flex flex-col items-center justify-center gap-2 rounded-lg h-40 
                     border border-white/30 cursor-pointer transition
                     hover:border-rose-400 focus-visible:ring-2 focus-visible:ring-rose-400"
        >
          {formData.avatar ? 
            <img src={formData.avatar} className="w-24 h-24 rounded-lg object-cover" /> :
            <>
              <img src={uploadIcon} className="w-10 opacity-80" />
              <p className="text-white/50 text-xs">Click or press Enter to upload</p>
            </>
          }

          <input
            type="file"
            id="avatar"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <p className="text-red-400 text-xs" aria-live="polite">{fileError}</p>

        {/* FULL NAME */}
        <label className="text-sm">Full Name</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="input-field"
          placeholder="Your full name"
        />
        <p className="error">{errors.fullName}</p>

        {/* EMAIL */}
        <label className="text-sm">Email Address</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="email@example.com"
        />
        <p className="error">{errors.email}</p>

        {/* GITHUB */}
        <label className="text-sm">GitHub Username</label>
        <input
          name="github"
          value={formData.github}
          onChange={handleChange}
          className="input-field"
          placeholder="@username"
        />
        <p className="error">{errors.github}</p>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-rose-500 py-3 rounded-md font-semibold 
                     hover:bg-rose-600 active:scale-[.98]
                     focus-visible:ring-4 focus-visible:ring-rose-300 transition"
        >
          Generate Ticket
        </button>
      </form>
    </div>
  );
}

export default TicketForm;
