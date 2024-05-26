import React from "react";
import { Link } from "react-router-dom";
import logo from "./img.png";
import google from "./google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function Section() {
  return (
    <>
      <div className="py-2 bg-white mb-8">         
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-6/12">
            <h1 style={{color: "#b24020"}} className="text-6xl  font-extralight ml-48 mt-4 mb-6">
            Welcome to your <br /> professional community
          </h1>
              <form className="bg-white rounded px-8 pt-6 pb-4 ml-40 mr-20 mb-2">
                <div className="mb-4">
                  <label className="block text-gray-700 text-base font-semibold mb-2">
                    Email or phone
                  </label>
                  <input
                    className="shadow appearance-none border border-black rounded w-full py-6 px-2 hover:bg-gray-100 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-base font-semibold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="shadow appearance-none border border-black rounded w-full py-6 px-2 text-gray-700 hover:bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                    />
                    <label
                      for="password"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                      <span
                        id="showPassword"
                        className="text-lg font-semibold text-blue-700"
                      >
                        Show
                      </span>
                    </label>
                  </div>
                </div>
                <div className=" flex items-center justify-between">
                  <Link
                    to="#"
                    className="inline-block align-baseline font-semibold text-lg text-blue-700 hover:text-blue-800 hover:underline mb-6"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </form>
              <div className="flex items-center justify-center ml-40 mr-20 mt-2 mb-8">
                <div className="w-2/5 h-0.5 font-light bg-gray-500"></div>
                <span className="mx-4 text-black">or</span>
                <div className="w-2/5 h-0.5 bg-gray-500"></div>
              </div>
              <p className="text-gray-500 text-l ml-52 mb-6">
                By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
                <Link
                  to="#"
                  className="inline-block align-baseline font-medium text-base text-blue-500 hover:text-blue-800"
                >
                  User Agreement, Privacy Policy,
                </Link>
                {""} and{" "}
                <Link
                  to="#"
                  className="inline-block align-baseline font-medium text-base text-blue-500 hover:text-blue-800"
                >
                  Cookie Policy.
                </Link>
              </p>
              <div className="flex flex-col items-center justify-center ml-44 mr-20 px-4 py-4">
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 mb-4 border border-black rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  <img src= {google} alt="google" height="20" width="20" className="inline-block"/> {""} Continue with Google
                </button>

                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-black rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  New to LinkedIn? Join Now
                </button>
              </div>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <img
                src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png"
                alt=""
                className="w-full h-auto md:max-w-full md:h-auto lg:max-h-full lg:w-full"
              />
            </div>
          </div>
      </div>

      <div className="bg-white space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <h1 className="text-5xl text-Black text-justify font-light text-justify px-20 ml-20 mt-4">
            {" "}
            Explore <br />
            collaborative
            <br /> articles{" "}
          </h1>
          <h2 className="text-2xl text-Black text-justify font-light text-justify px-20 ml-20 mt-4">
            We’re unlocking community knowledge in a new way. Experts add
            insights directly into each article, started with the help of AI.
          </h2>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Marketing
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            IT Services
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Healthcare
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Engineering
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full  mr-2 mt-2"
            type="button"
          >
            Buisness Administrations
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            HR Management
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Telecommuncations
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Sustainability
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Public Administrations
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-blue-100 text-blue-800 font-normal py-2 px-2 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Show All
          </button>
        </div>
      </div>
      <div className="bg-white space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <h1 className="text-5xl text-Black text-justify font-light text-justify px-20 ml-20 mt-4">
            Find the right job or internship for you
          </h1>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="mt-36 mb-3 text-gray-500 font-bold">
            SUGGESTED SEARCHES
          </h2>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Engineering
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Buisness Development
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Finance
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Marketing
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full  mr-2 mt-2"
            type="button"
          >
            Operations
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Human Resources
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Operations
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Customer Services
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Real Associate
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Administrative Assistant
          </button>
          <button
            className="text-2xl block font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-2 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Show more
          </button>
        </div>
      </div>

      <div style={{backgroundColor: "#F1ECE5"}} className=" mt-20 mb-10 md:flex md:gap-6 lg:items-center lg:gap-12 w-full h-full">
        <div className="w-full md:w-5/12 lg:w-5/12">
          <h1 style={{color: "#b24020"}} className="text-5xl text-amber-800 font-normal font-amber-500 px-20 ml-20 mt-4">
            {"                    "} <br />
            <br />
            Post your job for millions of people to see <br />
            <br />
            <br />
          </h1>
        </div>
        <div className="w-full md:w-7/12 lg:w-6/12">
          <button
          style={{backgroundColor: "#F1ECE5", hover: "sky-400"}}
            className="text-xl px-4 py-4 block font-normal text-sky-700 font-normal py-2 px-2 border border-sky-700 rounded-full mr-2 mt-2"
            type="button"
          >
            Post a job
          </button>
          {"                      "}
          <br />
          <br />
        </div>
      </div>
      <div className="bg-white space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <h1 className="text-5xl text-Black font-light px-20 ml-20 mt-4">
            Discover the best software tools
          </h1>
          <h2 className="text-2xl text-Black text-justify font-light text-justify px-20 ml-20 mt-4">
            Connect with buyers who have first-hand experience to find the best
            products for you.
          </h2>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="mt-36 mb-3 text-gray-500 font-bold">
            SUGGESTED TOOLS
          </h2>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            E-Commerce Platforms
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            CRM Software
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Human Resources Management Systems
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Sales Intelligent Software
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full  mr-2 mt-2"
            type="button"
          >
            Project Management software
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Help Desk Software
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Social Networking Software
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Desktop Publishing Software
          </button>
          <button
            className="text-2xl font-normal bg-white hover:bg-blue-100 text-blue-800 font-normal py-2 px-2 border border-black rounded-full mr-2 mt-2"
            type="button"
          >
            Show All
          </button>
        </div>
      </div>
      <div style={{backgroundColor:"#F3F2F0"}} className="bg-neutral-200 mt-20 mb-20 space-y-10 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <br />
        <br />
        <br />
        <br />
        <div className="md:w-5/12 lg:w-5/12">
          <br />
          <h1 style={{color: "#b24020"}} className="text-5xl text-amber-800 text-justify font-normal font-amber-500 px-20 ml-20 mt-10">
            Let the right people know you’re open to work
          </h1>
          <h2 className="text-2xl text-Black text-justify font-light text-justify px-20 ml-20 mt-4">
            With the Open To Work feature, you can privately tell recruiters or
            publicly share with the LinkedIn community that you are looking for
            new job opportunities.
          </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="md:w-7/12 lg:w-6/12 flex items-center justify-center">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own"
            alt="linkedin"
            className="my-4 h-96 w-96"
          />
          <button
            type="button"
            className="inline-block text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ml-2"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className=" bg-white mt-20 mb-10 md:flex md:gap-6 lg:items-center lg:gap-12 w-full h-full">
        <div className="md:w-5/12 lg:w-5/12">
          <div className="flex justify-center">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/b1fxwht7hdbeusleja7ciftsj"
              alt="linkedin"
              className="ml-15 h-80 w-80"
            />
          </div>
          <h1 className="text-5xl text-Black text-justify font-light px-20 ml-24 mt-4 mb-5">
            Connect with people who can help
            <br />
          </h1>
          <div className="flex justify-center">
            <button
              className="text-2xl px-5 py-3 font-normal bg-white hover:bg-gray-100 text-gray-800 font-normal border border-black rounded-full ml-0 mr-2 mt-2"
              type="button"
            >
              Find people you may know
            </button>
          </div>
        </div>
        <div className="md:w-5/12 lg:w-5/12">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv"
            alt="linkedin"
            className="ml-8 h-80 w-80"
          />
          <h1 className="text-5xl text-Black font-light mt-4 mb-5">
            Learn the skills you need to succeed
          </h1>
          <div >
            <select className="text-2xl text-black py-3 bg-white border border-gray-400 rounded-lg mr-2 mt-2 font-normal hover:bg-gray-200 text-center inline-flex items-justify ">
              <option value="a" className="text-black" hidden>Choose a topic to learn about</option>
              <option value="b" className="text-lg text-left px-4 py-4 bg-white hover:underline focus:bg-white hover:bg-gray-100 ">Business Analysis and Strategy 1,370+ course</option>
              <option value="c" className="text-lg text-left px-4 py-4 bg-white hover:underline focus:bg-white hover:bg-gray-100">Business Software and Tools 2,350+ courses</option>
              <option value="d" className="text-lg text-left px-4 py-4 bg-white hover:underline focus:bg-white hover:bg-gray-100">Career Development 570+ courses</option>
              <option value="e" className="text-lg text-left px-4 py-4 bg-white hover:underline focus:bg-white hover:bg-gray-100">Finance and Accounting 350+ courses</option>
              <option value="f" className="text-lg text-left px-4 py-4 bg-white hover:underline focus:bg-white hover:bg-gray-100">Customer Service 210+ courses</option>
              <option value="g" className="text-lg text-left px-4 py-4 bg-white hover:underline focus:bg-white hover:bg-gray-100">Language Courses 100+ Courses</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#F3F2F0"}} className="bg-neutral-200 mt-20 mb-20 space-y-10 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-8/12">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 style={{color: "#b24020"}}  className="text-5xl text-amber-800 text-justify font-normal font-amber-500 pl-40 ml-20 mt-4">
            Who is LinkedIn for?
          </h1>
          <h2 className="text-5xl text-Black font-light pl-40 ml-20 mt-4 mb-10">
            Anyone looking to navigate their professional life.
          </h2>
          <div className="ml-60 mb-4">
            <button
              type="button"
              size="xl"
              style={{backgroundColor: "#EBE7DF"}}
              className="max-w-full text-black text-xl text-left font-normal bg-neutral-300 hover:bg-neutral-400 pl-4 pr-8 py-5 "
            >
              Find a co-worker or classmate
              <FontAwesomeIcon style={{color:"gray"}} icon={faChevronRight} className="ml-4"/>
            </button>
          </div>
          <div className="flex justify-left ml-60 mb-4">
            <button
              type="button"
              size="xl"
              style={{backgroundColor: "#EBE7DF"}}
              className="max-w-full text-black text-left text-xl font-normal bg-neutral-300 hover:bg-neutral-400 pl-4 pr-8 py-5"
            >
              Find a job
              <FontAwesomeIcon style={{color:"gray"}} icon={faChevronRight} className="ml-48" />
            </button>
          </div>
          <div className="flex justify-left ml-60 mb-4">
            <button
              type="button"
              size="xl"
              style={{backgroundColor: "#EBE7DF"}}
              className="max-w-full text-black text-left text-xl font-normal bg-neutral-300 hover:bg-neutral-400 pl-4 pr-8 py-5 text-left "
            >
              Find a course or training
              <FontAwesomeIcon style={{color:"gray"}} icon={faChevronRight} className="ml-16"/>
            </button>
          </div>
        </div>

        <div className="md:7/12 lg:w-7/12">
          <div className="flex justify-right">
            <img
              src="https://static.licdn.com/aero-v1/sc/h/eghb2zc0p5s2x42wbi80w4v8a"
              alt="linkedin"
              className="size-50"
            />
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#F4FBFE"}} className="mb-40 space-y-10 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="bg-white pt-20 pb-40 md:w-6/12 lg:w-5/12">
          <div className="aspect-auto ml-60">
            <br />
            <br />
            <br />
            <br />
            <br />
            <iframe
              width="620"
              height="420"
              src="https://www.youtube.com/embed/IlYUUN8rL_Y?si=dOSleF5nJ7E7QC8b"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="md:w-7/12 lg:w-9/12">
          <h1 style={{color: "#b24020"}} className="text-5xl text-amber-800 text-justify font-normal font-amber-500 px-20 ml-20 mt-4">
            In it to chase my dream
          </h1>
          <h2 className="text-4xl text-Black text-justify font-light px-20 ml-20 mt-4">
            Check out Gayatri’s story of finding a new job on LinkedIn
          </h2>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div style={{backgroundColor:"#E8F5FF"}} className="relative bg-sky-100 mt-20">
        <h1 className="text-6xl text-black bg-ima text-justify font-light py-10 px-40 mt-4">
          Join your colleagues, classmates, and friends on LinkedIn.
        </h1>
        <button
          type="button"
          className="text-white text-lg font-normal bg-sky-700 hover:bg-sky-800 font-lg rounded-full text-normal ml-40 px-5 py-2.5 me-2 mb-2"
        >
          Get Started
        </button>
        <img src={logo} alt="LinkedIn Logo" />
      </div>
    </>
  );
}

export default Section;
