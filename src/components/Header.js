import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faUsers,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
function Header() {
    return (
    <header >
      <nav className="bg-white px-2 lg:px-6">
        <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png"
              className="mr-6 h-25 w-40"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-semibold rounded-full text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Join Now
            </Link>
            <Link
              to="#"
              className="decoration-4 text-sky-600 rounded-full border-2 border-sky-600 bg-white-700 hover:bg-sky-50 focus:ring-4 focus:ring-sky-300 font-semibold rounded text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign In
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row list-none lg:ml-auto  justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="justify-between items-center flex flex-col font-medium lg:flex-row lg:space-x-12 lg:mt-0">
              <li className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  size="lg"
                  style={{ color: 'Gray'}}
                />
                <NavLink to="/articles"  className="font-normal">Articles
                </NavLink>
              </li>
              <li className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="lg"
                  style={{ color: 'Gray'}}
                />
                <NavLink to="/people" className="font-normal">People</NavLink>
              </li>
              <li className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  size="lg"
                  style={{ color: 'Gray'}}
                  
                />
                <NavLink to="/learning" className="font-normal">Learning</NavLink>
              </li>
              <li className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faSuitcase}
                  size="lg"
                  style={{ color: 'Gray'}}
                
                />
                <NavLink to="/jobs"  className="font-normal">Jobs</NavLink>
              </li >
              <li className="border-x  border-slate-300 p-x-10 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faLaptop}
                  size="lg"
                  style={{ color: 'Gray'}}
                  
                />
                <NavLink to="/getTheApp" className="mx-4 font-normal">Get the app</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
