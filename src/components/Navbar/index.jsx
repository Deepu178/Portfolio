import React, { useState } from "react";

const navigation = [
  { id: 1, label: "Home", href: "/" },
  { id: 1, label: "Projects", href: "/projects" },
  { id: 1, label: "About", href: "/about" },
  { id: 1, label: "Contact", href: "/contacts" },
];

export const Navbar = () => {
    const [expanded, setExpanded] = useState(false); // Add state variable

  return (
    <div>
      {/* Header */}
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a
                href="/"
                title=""
                className="flex text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-500 hover:to-yellow-500"
              >
                Portfolio
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                <span
                  style={{ display: !expanded ? "block" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span
                  style={{ display: expanded ? "block" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <nav
              className={`hidden md:flex md:items-center md:justify-end md:space-x-12 {
                expanded ? "expanded" : ""
              }`}
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-base font-normal transition-all duration-200 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-800 hover:from-yellow-500 hover:to-purple-500 hover:pb-1 hover:border-b-2 hover:borer-purple-500 "
                >{item.label}
                </a>
              ))}
            </nav>
          </div>

          <nav style={{ display: expanded ? "block" : "none" }}>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              {navigation.map((item) => (
                <a
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                  key={item.id}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Section */}
     
    </div>
  );
};

