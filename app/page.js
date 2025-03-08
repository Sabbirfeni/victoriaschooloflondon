import Image from "next/image";

export default function Home() {
  const courses = Array(6).fill({
    courseName: "Placeholder Course",
    university: "Placeholder University",
    campus: "Main Campus",
    level: "Bachelor's",
    scholarship: "Up to 50%",
    tuitionFees: "10,000",
  });

  return (
    <>
      <header className="relative h-[100px] sm:h-[150px] bg-cover bg-center bg-[#fd9800] flex items-center justify-center text-white">
        {/* Overlay for better text readability */}
        <h1 className="relative text-3xl sm:text-4xl font-bold text-center px-4">
          Courses
        </h1>
      </header>

      {/* Form */}
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
            <select className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none">
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
            <select className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none">
              <option value="">Select University</option>
              <option value="Harvard">Harvard</option>
              <option value="Oxford">Oxford</option>
              <option value="Stanford">Stanford</option>
            </select>

            <select className="w-full p-3 border border-gray-300 text-black outline-none rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none">
              <option value="">Select Campus</option>
              <option value="Main">Main Campus</option>
              <option value="Downtown">Downtown Campus</option>
            </select>

            <select className="w-full p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:border-[#fd9800] focus:text-[#fd9800] focus:outline-none">
              <option value="">Select Level</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
        </form>
      </div>
      {/* Course list */}
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
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
                    href="#"
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
