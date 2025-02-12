import React from "react";
import { useNavigate } from "react-router-dom";

const Bottom = () => {
  const navigate = useNavigate();

  const footerData = [
    {
      title: "Quick Slot",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Service", path: "/service" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "For Patients",
      links: [
        { name: "Ask For Health Questions", path: "/" },
        { name: "Search for Doctors", path: "/" },
        { name: "Search For Clinics", path: "/" },
        { name: "Search For Hospitals", path: "/" },
        { name: "Consult a Doctor", path: "/ConsultDoctar" },
        { name: "Order Medicine", path: "/ConsultDoctar" },
        { name: "Read Health Articles", path: "/blog" },
      ],
    },
    {
      title: "For Doctors",
      links: [
        { name: "Quick Consult", path: "/ConsultDoctar" },
        { name: "Quick Health Food", path: "#" },
        { name: "Quick Profile", path: "#" },
        { name: "Quick Prime", path: "#" },
        { name: "Quick Tab", path: "#" },
      ],
    },
    {
      title: "More",
      links: [
        { name: "Help", path: "#" },
        { name: "Developers", path: "#" },
        { name: "Terms & Conditions", path: "/company/terms" },
        { name: "HealthCare Dictionary", path: "#" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Facebook", path: "https://www.facebook.com" },
        { name: "Twitter", path: "https://www.twitter.com" },
        { name: "LinkedIn", path: "https://www.linkedin.com" },
        { name: "YouTube", path: "https://www.youtube.com" },
        { name: "GitHub", path: "https://github.com/" },
      ],
    },
  ];

  const handleNavigation = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="pt-0 absolute left-0 w-full">
      <div className="grid grid-cols-1 bg-blue-400 text-white font-sans sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center p-10">
        {footerData.map((section, index) => (
          <div key={index} className="space-y-4">
            <p className="font-semibold">{section.title}</p>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="hover:underline cursor-pointer"
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
