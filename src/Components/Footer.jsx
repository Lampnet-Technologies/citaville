import React from "react";
import { LiaLinkedin, LiaInstagram, LiaTwitter } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Helper to render homepage section links
  const renderHomepageLink = (sectionId, label) => {
    if (isHome) {
      return (
        <a
          href={`#${sectionId}`}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:underline"
        >
          {label}
        </a>
      );
    }
    return (
      <Link to={`/#${sectionId}`} className="hover:underline">
        {label}
      </Link>
    );
  };

  return (
    <footer className="text-white py-10 bg-green-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between flex-col-1">
        {/* First column: Logo + Button */}
        <div className="flex flex-col gap-6 w-full sm:w-1/3 md:w-1/4">
          <img
            src="https://res.cloudinary.com/dnoycjq2q/image/upload/v1753979990/LCI_Logo_1_vrw1pj.png"
            alt="LCI Logo"
            className="w-30 h-30"
          ></img>
          <div className="font-bold">Your Learning Partner</div>

          {/* Added social media links here */}
          <div className="flex gap-4 mt-2 text-2xl">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <LiaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors duration-300"
            >
              <LiaInstagram />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              <LiaTwitter />
            </a>
          </div>
        </div>

        {/* Second column: Quick Access */}
        <div className="flex flex-col gap-3 w-full sm:w-1/3 md:w-1/4 mt-8 sm:mt-0">
          <h4 className="font-semibold text-lg mb-2">Quick Access</h4>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Third column: Courses (anchors on homepage) */}
        <div className="flex flex-col gap-3 w-full sm:w-1/3 md:w-1/4 mt-8 sm:mt-0">
          <h4 className="font-semibold text-lg mb-2">Courses</h4>
          {renderHomepageLink("our-school", "Design & Digital Marketing")}
          {renderHomepageLink("our-school", "Software & Cloud Engineering")}
          {renderHomepageLink("our-school", "Networking & Hardware")}
          {renderHomepageLink("our-school", "Data Science & AI")}
        </div>

        {/* Fourth column: Contact info on far right */}
        <div className="flex flex-col gap-3 w-full sm:w-auto mt-8 sm:mt-0 text-right">
          <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
          <Link href="tel:+1234567890" className="hover:underline">
            📞 +1 (234) 567-890
          </Link>
          <Link
            href="mailto:info.laptopcityonline@gmail.com"
            className="hover:underline"
          >
            📧 Info.laptopcityonline@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
