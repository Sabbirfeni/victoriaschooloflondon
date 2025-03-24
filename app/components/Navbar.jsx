import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

  return (
    <nav
      className={`w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "fixed top-0 shadow-lg" : "relative"
      }`}
    >
      <div className="flex md:hidden justify-center space-x-4 py-1 text-black bg-[#fd9800]">
        <a
          href="https://www.facebook.com/victoriaschooloflondon"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faFacebook} size="md" />
        </a>
        <a
          href="https://www.instagram.com/victoria_school_of_london"
          className="hover:text-pink-500"
        >
          <FontAwesomeIcon icon={faInstagram} size="md" />
        </a>
        <a
          href="https://www.youtube.com/@Victoria-school-of-london"
          className="hover:text-red-500"
        >
          <FontAwesomeIcon icon={faYoutube} size="md" />
        </a>
        <a
          href="https://www.linkedin.com/company/victoria-school-of-london/"
          className="hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faLinkedin} size="md" />
        </a>
      </div>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href={`https://victoriaschooloflondon.co.uk/`}>
          <Image
            src="/images/logo.jpg"
            width={150} // Adjust size as needed
            height={40} // Adjust size as needed
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-md text-black">
          {[
            {
              title: "Home",
              link: "https://victoriaschooloflondon.co.uk/",
            },
            {
              title: "Courses",
              link: "https://victoriaschooloflondon.vercel.app/",
            },
            {
              title: "Our Experts",
              link: "#",
            },
            {
              title: "Services",
              link: "https://victoriaschooloflondon.co.uk/services/",
            },

            {
              title: "Blogs",
              link: "https://victoriaschooloflondon.co.uk/blogs-news/",
            },
            {
              title: "Contact Us",
              link: "https://victoriaschooloflondon.co.uk/contact/",
            },
          ].map((item) => (
            <li key={item.title} className="hover:text-blue-500 cursor-pointer">
              <Link href={item.link}> {item.title} </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4 text-black">
          <a
            href="https://www.facebook.com/victoriaschooloflondon"
            className="hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/victoria_school_of_london"
            className="hover:text-pink-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.youtube.com/@Victoria-school-of-london"
            className="hover:text-red-500"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/company/victoria-school-of-london/"
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#fd9800]" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md p-4 space-y-4 text-center text-black">
          {[
            {
              title: "Home",
              link: "https://victoriaschooloflondon.co.uk/",
            },
            {
              title: "Courses",
              link: "https://victoriaschooloflondon.vercel.app/",
            },
            {
              title: "Our Experts",
              link: "#",
            },
            {
              title: "Services",
              link: "https://victoriaschooloflondon.co.uk/services/",
            },

            {
              title: "Blogs",
              link: "https://victoriaschooloflondon.co.uk/blogs-news/",
            },
            {
              title: "Contact Us",
              link: "https://victoriaschooloflondon.co.uk/contact/",
            },
          ].map((item) => (
            <li key={item.title} className="hover:[#fd9800] cursor-pointer">
              <Link href={item.link}> {item.title} </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
