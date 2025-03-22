"use client";
import { courses } from "@/database";

import Image from "next/image";
import FilterForm from "./forms/filter-form";
import { useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedUni, setSelectedUni] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const countries = [...new Set(courses.map((course) => course.country))];
  const universities = [];
  const campuses = [];
  const levels = [];

  let searchedCourses = courses;

  if (query.trim() !== "") {
    const courses = searchedCourses.filter(
      (course) =>
        course.courseName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    searchedCourses = courses;
  }

  if (selectedCountry) {
    searchedCourses = courses.filter(
      (course) => course.country == selectedCountry
    );
    searchedCourses.forEach((course) => {
      if (course.country == selectedCountry) {
        if (!universities.includes(course.university)) {
          universities.push(course.university);
        }
      }
    });
  }
  if (selectedUni) {
    searchedCourses = searchedCourses.filter(
      (course) => course.university == selectedUni
    );
    searchedCourses.forEach((course) => {
      if (course.university == selectedUni) {
        if (!campuses.includes(course.campus)) {
          campuses.push(course.campus);
        }
      }
    });
  }
  if (selectedCampus) {
    searchedCourses = searchedCourses.filter(
      (course) => course.campus == selectedCampus
    );
    searchedCourses.forEach((course) => {
      if (course.campus == selectedCampus) {
        if (!levels.includes(course.level)) {
          levels.push(course.level);
        }
      }
    });
  }
  if (selectedLevel) {
    searchedCourses = searchedCourses.filter(
      (course) => course.level == selectedLevel
    );
  }

  useEffect(() => {
    setSelectedUni(null);
    setSelectedCampus(null);
    setSelectedLevel(null);
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedCampus(null);
    setSelectedLevel(null);
  }, [selectedUni]);

  useEffect(() => {
    setSelectedLevel(null);
  }, [selectedCampus]);

  return (
    <>
      <header className="relative h-[100px] sm:h-[150px] bg-cover bg-center bg-[#fd9800] flex items-center justify-center text-white">
        {/* Overlay for better text readability */}
        <h1 className="relative text-3xl sm:text-4xl font-bold text-center px-4">
          Courses
        </h1>
      </header>

      {/* Form */}
      <FilterForm
        query={query}
        setQuery={setQuery}
        countries={countries}
        universities={universities}
        campuses={campuses}
        levels={levels}
        setSelectedCountry={setSelectedCountry}
        setSelectedUni={setSelectedUni}
        setSelectedCampus={setSelectedCampus}
        setSelectedLevel={setSelectedLevel}
      />
      {/* Course list */}
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {searchedCourses.length == 0 && (
            <p
              className="not-found-text"
              style={{ color: "black", textAlign: "center" }}
            >
              No courses found.
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {searchedCourses.map((course, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-2xl">
                <h2 className="text-xl text-black font-semibold">
                  {course.courseName}
                </h2>
                <p className="text-black">
                  <span className="font-bold">University:</span>{" "}
                  {course.university}
                </p>
                <p className="text-sm text-black">
                  <span className="font-bold">Campus:</span> {course.campus}
                </p>
                <p className="text-sm font-medium text-black">
                  <span className="font-bold">Level:</span> {course.level}
                </p>
                <p className="text-sm text-black">
                  <span className="font-bold">Scholarship:</span>{" "}
                  {course.scholarship}
                </p>

                <div className="flex gap-2 items-center">
                  <button className="mt-4 disable text-sm w-full bg-[#fd9800] border-[#fd9800] border-1 cursor-pointer text-white py-2 font-bold rounded-full hover:text-[#fd9800] hover:bg-white transition">
                    <span className="font-bold">Tution Fee:</span>
                    {course.tuitionFees}
                  </button>
                  <a
                    href={`/apply/${course.courseId}`}
                    className="mt-4 w-full text-center cursor-pointer  text-[#fd9800] py-2 font-bold rounded-lg"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
