"use client";

import countries from "@/all-countries";
import { courses } from "@/database";
import { useParams } from "next/navigation";
import React from "react";

function ApplyPage() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.courseId == courseId);
  return (
    <>
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
                Tution Fees: {course.tuitionFees}
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
            <form className="space-y-4">
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
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Nationality*</label>
                <select className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none bg-gray-100">
                  <option key="bangladesh" value="Bangladesh">
                    Bangladesh
                  </option>
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
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email*</label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Qualification</label>
                <input
                  type="text"
                  placeholder="Your Last Qualification"
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
                      className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none h-24"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#fd9800] text-white p-3 rounded-lg hover:bg-[#fd8b00] cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyPage;
