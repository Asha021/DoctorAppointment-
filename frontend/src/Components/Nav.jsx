import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileBoxOpen, setProfileBoxOpen] = useState(false); // Profile box state
  const profileBoxRef = useRef(null); // Reference to the profile box
  const auth = localStorage.getItem("users"); // Get authentication data from localStorage
  const navigate = useNavigate();

  // Function to toggle the profile box visibility
  const clickProfile = () => {
    setProfileBoxOpen(!profileBoxOpen); // Toggle profile box open/close
  };

  // Function to close the profile box when clicking outside of it
  const handleClickOutside = (e) => {
    if (profileBoxRef.current && !profileBoxRef.current.contains(e.target)) {
      setProfileBoxOpen(false); // Close profile box if clicked outside
    }
  };

  // Close the profile box when clicking on any navigation link
  const handleCloseProfileBox = () => {
    setProfileBoxOpen(false); // Close the profile box
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add event listener to close the profile box when clicking outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white fixed z-50 top-0 w-full text-gray-700 border-b-2 text-lg">
      <div className="container flex mx-7 justify-between items-center   py-2 w-full">
        {/* Logo and Branding */}
        <div className="flex  items-center  m-0">
          <img src="logo.png" alt="logo" className="w-12 h-12" />
          <div className="text-2xl font-sans  font-semibold text-blue-900 ml-2">
            QUICK SLOT
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-evenly" ref={profileBoxRef}>
          <div
          
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:gap-3 left-auto text-left absolute md:static bg-blue-500  md:bg-white w-96 md:w-auto top-16 md:top-auto  md:left-auto shadow md:shadow-none`}
          >
            <Link
              className="nav"
              to="/"
              onClick={handleClickOutside} // Close the profile box when clicking any link
            >
              HOME
            </Link>
            <Link
              className="nav"
              to="/About"
              onClick={handleCloseProfileBox} // Close the profile box when clicking any link
            >
              ABOUT US
            </Link>
            <Link
              className="nav"
              to="/Blog"
              onClick={handleCloseProfileBox} // Close the profile box when clicking any link
            >
              BLOG
            </Link>
            <Link
              className="nav"
              to="/Service"
              onClick={handleCloseProfileBox} // Close the profile box when clicking any link
            >
              SERVICES
            </Link>
            <Link
              className="nav"
              to="/Contact"
              onClick={handleCloseProfileBox} // Close the profile box when clicking any link
            >
              CONTACT
            </Link>

            {/* Profile Icon */}
            <CgProfile
              onClick={clickProfile}
              className="cursor-pointer ml-5 mb-2 md:m-0 md:mt-2  lg:w-fit text-white md:text-gray-600 text-3xl"
            />
          </div>

          {/* Profile Box */}
          {profileBoxOpen && (
            <div
              ref={profileBoxRef}
              className="absolute right-4 top-16 bg-gray-50 shadow-lg rounded-lg p-4 w-56"
            >
              <h3 className="text-xl py-2 font-semibold">
                {auth ? JSON.parse(auth).name : "User_Name"}
              </h3>
              <h2 className="text-lg font-medium">
                {auth ? JSON.parse(auth).email : "Email"}
              </h2>

              {!auth ? (
                <>
                  <Link
                    to="signup"
                    onClick={handleCloseProfileBox} // Close the profile box on click
                    className="nav pl-1 hover:text-red-800 text-red-700"
                  >
                    SIGN UP
                  </Link>
                  <Link
                    to="login"
                    onClick={handleCloseProfileBox} // Close the profile box on click
                    className="nav pl-1 hover:text-red-800 text-red-700"
                  >
                    Log in
                  </Link>
                </>
              ) : (
                <Link
                  to="logout"
                  onClick={() => {
                    handleCloseProfileBox();
                  }}
                  className="nav pl-1 text-red-700"
                >
                  Log Out
                </Link>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden lg:flex-0">
            <button
              onClick={toggleMenu}
              className="text-blue-900 w-fit  items-end text-end size-10 font-extrabold text-3xl focus:outline-none"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
