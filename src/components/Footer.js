import React from "react";
import { Link } from "react-router-dom";
import logo from "./Linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="bg-neutral-200 mt-6 border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-16" alt="Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-20 sm:gap-24 sm:grid-cols-4">
            <div>
              <h2 className="mb-2 text-l font-semibold text-gray-900">
                General
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Sign Up
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Press
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Developers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-l font-semibold text-gray-900">
                Browse LinkedIn
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Learnings
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Jobs
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Salary
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Mobile
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Top Companies Hub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-l font-semibold text-gray-900">
                Business Solutions
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Talent
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Marketing
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Sales
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Learning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-l font-semibold text-gray-900">
                Directories
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-1">
                  <Link to="/" className="hover:underline">
                    Members
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Jobs
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Companies
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Featured
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Learnings
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Posts
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Articles
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Schools
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    News
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    News Letter
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    Advice
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about" className="hover:underline">
                    People Search
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-40 py-4 bg-white flex w-full md:flex md:items-center md:justify-between">
        <span className="ml-72 text-base text-gray-900 sm:text-center ">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} /> © 2024
        </span>
        <ul class="flex flex-wrap items-start mt-2 text-sm font-medium text-gray-900">
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              Accessibility
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              User Agreement
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              Copyright Policy
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              Brand
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              Guest Controls
            </Link>
          </li>
          <li>
            <Link to="#" class="hover:underline me-4 md:me-6">
              Community Guidelines
            </Link>
          </li>
          <li >
            <select className="bg-transparent border-none text-gray-800 ">
              <option value="">Language</option>
              <option value="english">English</option>
              <option value="english">Hindi</option>
              <option value="english">Japanese</option>
              <option value="english">Chinese</option>
              <option value="english">Portugese</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </li>
        </ul>
      </div>
    </footer>
  );
}
