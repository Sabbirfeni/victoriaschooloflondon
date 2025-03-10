import React from "react";

function FilterForm({
  countries,
  universities,
  campuses,
  levels,
  setSelectedCountry,
  setSelectedUni,
  setSelectedCampus,
  setSelectedLevel,
}) {
  return (
    <div className="bg-gray-100 p-6 shadow-lg">
      <form className="space-y-4 max-w-6xl mx-auto">
        {/* Search Field - Full width on mobile, flex row on larger screens */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
          />
        </div>

        {/* Other Dropdowns - All in one row on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <select
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setSelectedUni(e.target.value)}
            className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
          >
            <option value="">Select University</option>
            {universities.map((university) => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectedCampus(e.target.value)}
            className="w-full p-3 border border-gray-300 text-black outline-none rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
          >
            <option value="">Select Campus</option>
            {campuses.map((campus) => (
              <option key={campus} value={campus}>
                {campus}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none"
          >
            <option value="">Select Level</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
