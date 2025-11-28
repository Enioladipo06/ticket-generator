import { useState, useRef } from "react";
import uploadIcon from "../assets/images/icon-upload.svg";
import logoFull from "../assets/images/logo-full.svg"

function TicketForm({ formData, setFormData, setIsSubmitted }) {
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");

  const fileInputRef = useRef(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
      const maxSize = 2 * 1024 * 1024;

      if (!validTypes.includes(file.type)) {
        setFileError("Invalid file type. Please upload a JPG or PNG image.");
        return;
      }

      if (file.size > maxSize) {
        setFileError("File is too large. Please upload an image under 2MB.");
        return;
      }

      setFileError("");
    
      setFormData({
        ...formData, 
        avatar: URL.createObjectURL(file)
      })
  }


  function handleSubmit(e) {
    e.preventDefault();
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

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    }
  }

  console.log(formData);

  return (
    <div className="w-full max-w-lg">
      <div>
      <img
          src={logoFull}
          alt="Coding Conf Logo"
          className="mx-auto mb-10 mt-10 w-30 h-50"
        />
      </div>
      <h1 className="text-4xl font-semibold mb-6 text-center">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>

      <p className="text-gray tracking-wide text-lg mb-10 text-center">Secure your spot at next year's biggest coding conference.</p>

      <form action="" className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Upload Avatar
          </label>
          <div className="upload-box w-full h-40 p-5 rounded-lg bg-transparent flex items-center justify-center">
            {formData.avatar ? (
              <img src={formData.avatar} alt="" className="w-24 h-24 object-cover rounded-lg" />
            ) : (
              <>
                <img src={uploadIcon} alt="" className="w-12 h-12 mb-2 opacity-80" onClick={() => fileInputRef.current.click()}/>
                <p className="text-white/70 text-sm">Click to upload image</p>
              </>
            )}

            <input
              type="file"
              name="avatar"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              placeholder="Drag and drop or click to upload"
              className="w-full h-40 p-r rounded-lg bg-transparent hidden text-white text-center placeholder-white/70 focus:outline-none"
            />
          </div>
          {fileError && <p className="text-red-400 text-sm mt-1">{fileError}</p>}
        </div>

        <div>
          <label htmlFor="" className="block mb-1 text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 rounded-lg border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full p-2 rounded-lg bg-transparent border border-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            GitHub Username
          </label>
          <input
            name="github"
            value={formData.github}
            type="text"
            placeholder="@yourusername"
            onChange={handleChange}
            className="w-full p-2 border border-white rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.github && (
            <p className="text-red-500 text-sm mt-1">{errors.github}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 text-white font-semibold py-2 px-6 rounded-md 
          hover:bg-amber-700 focus:ring-2 focus:ring-rose-400 transition-all"
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}

export default TicketForm;
