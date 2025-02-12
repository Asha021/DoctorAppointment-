import React from "react";
import { SiTicktick } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { PiCertificateLight } from "react-icons/pi";
import Gauranted from "./Gauranted";

const Safety = () => {
  return (
    <div className="h-screen">
    <div className="h-auto bg-gray-100 p-10">
      {/* Safety Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="">
          <p className="font-sans animate-slideDown text-4xl sm:text-left font-medium mt-12 text-gray-700">
            Safety of your data is our
          </p>
          <p className="text-4xl animate-slideDown sm:text-left font-semibold text-gray-800 mt-2">
            top priority.
          </p>
          <div className="mt-14">
          <p className="flex text-lg text-gray-600 py-1">
            <SiTicktick color="dodgerblue" size={20} />
            <span className="ml-3 text-left">Multi-level security checks</span>
          </p>
          <p className="flex text-lg text-gray-600 py-1">
            <SiTicktick color="dodgerblue" size={20} />
            <span className="ml-3">Multiple-level data backups</span>
          </p>
          <p className="flex text-lg text-gray-600 py-1">
            <SiTicktick color="dodgerblue" size={20} />
            <span className="ml-3">Stringent data privacy policies</span>
          </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img src="Doctar1.png" alt="Doctor" className="w-64 h-64 object-cover mt-14" />
        </div>
      </div>

      {/* Security Certifications Section */}
      <div className="grid grid-cols-2 py-10 md:grid-cols-4 gap-8 mt-10">
        <div className="text-center flex flex-col items-center">
          <FaFileDownload size={50} className="text-gray-800 mb-2" />
          <p className="text-sm">256-bit encryption</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <FaDatabase size={50} className="text-gray-800 mb-2" />
          <p className="text-sm">256-bit ISO 27001 certified</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <FaAward size={50} className="text-gray-800 mb-2" />
          <p className="text-sm">HIPAA compliant data centers</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <PiCertificateLight size={50} className="text-gray-800 mb-2" />
          <p className="text-sm">DSCI member</p>
        </div>
      </div>

      {/* Guaranteed Section */}
    </div>
      <Gauranted />
    </div>
  );
};

export default Safety;
