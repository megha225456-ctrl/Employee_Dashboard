import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function for active link styling
  const navLinkClass = ({ isActive }) =>
    `inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">
                Emp<span className="text-blue-600">Portal</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={navLinkClass} end>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home / Dashboard
            </NavLink>

            <NavLink to="/employee-form" className={navLinkClass}>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Employee Form
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 px-4 pt-2 pb-4 space-y-1 bg-white">
          <NavLink
            to="/"
            end
            onClick={() => setIsMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Home / Dashboard
          </NavLink>
          <NavLink
            to="/employee-form"
            onClick={() => setIsMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Employee Form
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
