"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import experts from "@/database/experts";

export default function OurExpert() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const formData = {
      fullname,
      email,
      phone,
      message,
      emailTo: selectedProfile.email,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/sendCallBackRequest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Your request has been sent successfully!");
        setFullname("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setErrorMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setErrorMessage("Failed to send the request");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <header className="relative h-[260px] sm:h-[200px] bg-cover bg-center px-6 text-center bg-[#fd9800] flex flex-col items-center justify-center text-white">
        {/* Overlay for better text readability */}
        <h1 className="relative text-3xl sm:text-4xl font-bold text-center px-4">
          Meet Our Top Experts
        </h1>
        <p className="mt-3 text-sm md:text-md">
          Welcome to Victoria School Of London. Book your FREE 30-minutes
          Profile Evaluation with Our Experts. Take the first step to make your
          study abroad dream a reality. Get end-to-end assistance with
          university shortlisting, application, scholarship, visa and finance.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {experts.map((profile) => (
          <div
            key={profile.id}
            className="p-4 border rounded-lg shadow-md flex flex-col items-center text-center bg-white"
          >
            <div className="w-40 h-40">
              <Image
                src={`/images${profile.image}`}
                alt={profile.name}
                width={160} // Optional, Next.js optimizations
                height={160} // Optional, Next.js optimizations
                className="w-full h-full object-cover rounded-full mb-2"
              />
            </div>

            <h2 className="text-lg text-black font-semibold">{profile.name}</h2>
            <p className="text-md text-black font-semibold">{profile.title}</p>
            <p className="text-md text-black font-semibold">
              {profile.country}
            </p>
            <button className="mt-2 w-full bg-[#fd9800] text-white py-2 rounded-lg">
              <Link href={profile.profile ? profile.profile : "#"}>
                View Profile
              </Link>
            </button>
            <button
              className="mt-2 w-full border text-black border-gray-300 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => {
                setSelectedProfile(profile);
                setIsOpen(true);
              }}
            >
              Request for Callback
            </button>
          </div>
        ))}

        {isOpen && selectedProfile && (
          <div className="fixed inset-0 bg-[#0000007e] bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Request Callback for {selectedProfile.name}
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>

                {successMessage && (
                  <p className="text-green-500">{successMessage}</p>
                )}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                <button
                  type="submit"
                  className={`w-full bg-[#fd9800] text-white py-2 rounded-lg hover:bg-[#fd9800] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
              <button
                className="mt-4 w-full border py-2 border-gray-300 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
