import React from "react";
import { Link } from "react-router-dom";
import ErrorImage404 from "../assets/images/404.svg";

// COMPONENT
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0">
        <div className="block md:max-w-lg">
          <img src={ErrorImage404} alt="astronaut image" />
        </div>
        <div className="text-center xl:max-w-4xl">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Page not found</h1>
          <p className="mb-5 text-base font-normal text-gray-500 md:text-lg">Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>
          <Link to={"/"} className="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3"><svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path></svg>
            Go back home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
