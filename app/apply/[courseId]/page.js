"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import countries from "@/all-countries";
import courses from "@/database/courses";
import Navbar from "@/app/components/Navbar";

function ApplyPage() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.courseId == courseId);
  const [formData, setFormData] = useState({
    name: "",
    nationality: "Bangladesh",
    phone: "",
    address: "",
    email: "",
    qualification: "",
    message: "",
    files: [],
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // actual File objects

    setFormData((prevData) => ({
      ...prevData,
      files: [...prevData.files, ...files], // Append to existing files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const allData = new FormData();
    allData.append("name", formData.name);
    allData.append("nationality", formData.nationality);
    allData.append("phone", formData.phone);
    allData.append("address", formData.address);
    allData.append("email", formData.email);
    allData.append("qualification", formData.qualification);
    allData.append("message", formData.message);

    // Append course data
    allData.append("courseName", course.courseName);
    allData.append("university", course.university);
    allData.append("campus", course.campus);
    allData.append("tuitionFees", course.tuitionFees);
    allData.append("scholarship", course.scholarship);

    // ✅ Append all files using the same field name ("file")
    formData.files.forEach((file) => {
      allData.append("file", file); // important: use "file" as field name
    });

    // The endpoint should match your API file name

    try {
      const response = await fetch("/api/send-application-email", {
        method: "POST",
        body: allData,
        // Don't set Content-Type header - browser will set it with boundary
      });
      const result = await response.json();
      if (result.success) {
        setSuccessMessage("Your application has been sent successfully!");
        setFormData({
          name: "",
          nationality: "Bangladesh",
          phone: "",
          address: "",
          email: "",
          qualification: "",
          message: "",
          files: [],
        });
      } else {
        setErrorMessage(result.error);
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Failed to send the request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <header className="relative h-[100px] sm:h-[150px] bg-cover bg-center bg-[#fd9800] flex items-center justify-center text-black">
        {/* Overlay for better text readability */}
        <h1 className="relative text-3xl sm:text-4xl font-bold text-center px-4">
          Apply
        </h1>
      </header>

      <div className="p-4 md:p-6 bg-gray-100 min-h-screen text-black font-bold">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Cards */}
          <div className="space-y-1 md:space-y-3">
            <div className="bg-white p-4 rounded-xl shadow-md text-xl">
              {course.courseName}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
              <div className="bg-white p-4 w-full rounded-xl shadow-md flex-1">
                {course.university}
              </div>
              <div className="bg-white p-4 w-full rounded-xl shadow-md flex-1">
                Campus: {course.campus}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
              <div className="bg-white p-4 w-full rounded-xl shadow-md flex-1">
                Tuition Fees: {course.tuitionFees}
              </div>
              <div className="bg-white p-4 w-full rounded-xl shadow-md flex-1">
                Scholarship: {course.scholarship}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-center font-semibold mb-4 text-2xl">
              Course Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Course</label>
                <input
                  type="text"
                  value={course.courseName}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none bg-gray-100"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700">University</label>
                <input
                  type="text"
                  value={course.university}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none bg-gray-100"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700">Campus</label>
                <input
                  type="text"
                  value={course.campus}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none bg-gray-100"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-700">Name*</label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Nationality*</label>
                <select
                  required
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none bg-gray-100"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Phone*</label>
                <input
                  required
                  type="tel"
                  placeholder="Your Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Your Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email*</label>
                <input
                  required
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Qualification</label>
                <input
                  type="text"
                  placeholder="Your Last Qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>

              {/* File Uploads in Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "CV",
                  "SOP",
                  "Passport",
                  "IELTS Certificate",
                  "Academic Transcript",
                  "Academic Certificate",
                ].map((fileType) => (
                  <div key={fileType}>
                    <label className="block text-gray-700">
                      Upload your {fileType} (Max 1MB)
                    </label>
                    <input
                      type="file"
                      name="files"
                      onChange={handleFileChange}
                      className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none h-24"
                ></textarea>
              </div>
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <button
                disabled={loading}
                type="submit"
                className={`w-full  ${
                  loading ? "bg-[#fd8b00]" : "bg-[#fd9800]"
                } text-white p-3 rounded-lg hover:bg-[#fd8b00] cursor-pointer`}
              >
                {loading ? "Application processing..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyPage;
