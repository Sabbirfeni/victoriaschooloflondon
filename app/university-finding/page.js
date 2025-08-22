"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import universities from "@/database/universities";

const universityCountries = [
  ...new Set(universities.map((university) => university.country)),
];

const UniversitiesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUniversities, setFilteredUniversities] =
    useState(universities);
  const rowsPerPage = 17;

  // Display table
  const displayTable = (universitiesArray) => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return universitiesArray.slice(start, end);
  };

  // Setup pagination
  const setupPagination = (universitiesArray) => {
    const pageCount = Math.ceil(universitiesArray.length / rowsPerPage);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return pages;
  };

  const filterUniversities = (searchInput, countryFilter) => {
    const lowerCaseInput = searchInput.toLowerCase();
    const filtered = universities.filter((uni) => {
      const matchesCountry = !countryFilter || uni.country === countryFilter;
      const matchesSearch =
        uni.name.toLowerCase().includes(lowerCaseInput) ||
        uni.country.toLowerCase().includes(lowerCaseInput);
      return matchesCountry && matchesSearch;
    });
    setFilteredUniversities(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Pagination buttons handler
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Filters
  const handleCountryChange = (e) => {
    const countryFilter = e.target.value;
    filterUniversities("", countryFilter);
  };

  const handleSearchInputChange = (e) => {
    const searchInput = e.target.value;
    filterUniversities(searchInput, "");
  };

  useEffect(() => {
    // Initial display of universities
    filterUniversities("", "");
  }, []);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paginatedItems = displayTable(filteredUniversities);
  const pages = setupPagination(filteredUniversities);

  return (
    <div className="text-black">
      <Navbar />
      <div className="container relative">
        <div
          className={`filters w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
            isSticky
              ? "fixed top-24 md:top-16 left-0 shadow-lg w-full"
              : "relative"
          }`}
        >
          <select id="countryFilter" onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {universityCountries.map((country) => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </select>
          <input
            type="text"
            id="searchInput"
            placeholder="Search"
            onChange={handleSearchInputChange}
          />
          {/* <button id="searchBtn">🔍</button> */}
        </div>

        <table>
          <thead></thead>
          <tbody>
            {paginatedItems.map((uni, index) => (
              <tr key={index}>
                <td>{uni.country}</td>
                <td>{uni.name}</td>
                <td>
                  <Image
                    src={uni?.logo ? `/images${uni?.logo}` : "/images/logo.jpg"}
                    alt={uni.name}
                    width={100}
                    height={80}
                  />
                </td>
                <td>
                  <button className="view-btn">
                    <Link href={uni?.profile ? uni?.profile : "#"}>
                      View Profile
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === pages.length}
          >
            »
          </button>
        </div>
      </div>
      <style jsx>{`
        /* (Your original CSS here - unchanged for brevity) */
        * {
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          margin: 0;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar .logo {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
        }

        .navbar ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
          gap: 20px;
        }

        .navbar ul li a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 4px;
          transition: background-color 0.3s, color 0.3s;
        }

        .navbar ul li a:hover {
          background-color: #fd9800;
          color: #fff;
        }

        .container {
          width: 96%;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
          .container {
            margin: 10px auto;
            padding: 5px;
          }
        }

        .filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 10px;
          background-color: #f1f5f9;
          border-radius: 8px;
        }

        @media (max-width: 600px) {
          .filters {
            flex-direction: column;
            gap: 10px;
          }
          .filters select,
          .filters input {
            width: 100%;
          }
        }

        .filters select,
        .filters input {
          width: 300px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
        }

        .filters button {
          padding: 10px 15px;
          background-color: #3d3d3d9f;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background-color: transparent;
        }

        th,
        td {
          padding: 12px 15px;
          text-align: left;
        }

        @media (max-width: 600px) {
          td {
            padding: 8px 5px;
            font-size: 12px;
          }
          .filters select,
          .filters input {
            padding: 5px 10px;
            width: 100%;
            font-size: 12px;
          }
        }

        thead tr {
          background-color: transparent;
          color: #333;
          font-weight: bold;
        }

        tbody tr {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        tbody tr:hover {
          background-color: #f1f5f9;
        }

        tbody tr td {
          vertical-align: middle;
          border-bottom: 1px solid #ddd;
        }

        tbody tr td img {
          width: 150px;
          max-height: 60px;
          object-fit: contain;
        }

        .view-btn {
          padding: 8px 15px;
          color: #fd9800;
          border: 1px solid #fd9800;
          background-color: #fff;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (max-width: 600px) {
          .view-btn {
            padding: 4px 5px; /* Even smaller for very small screens */
            font-size: 8px;
          }
        }

        .view-btn:hover {
          background-color: #fd9800;
          color: #fff;
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .pagination button {
          padding: 8px 12px;
          margin: 0 3px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
        }

        .pagination button.active {
          background-color: #fd9800;
          color: #fff;
          border-color: #fd9800;
        }

        .pagination button:disabled {
          color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default UniversitiesPage;
