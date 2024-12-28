import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-primary-100 dark:bg-primary-900">
      <div className="w-full h-screen dark:bg-primary-900 flex justify-center items-center">
        <div className="flex flex-col justify-start items-start gap-8 w-full h-1/2 p-4 sm:justify-center sm:items-center">
          <h1 className="text-primary-800 font-bold dark:text-primary-100 text-4xl sm:text-5xl">
            Movies-DB: Information about 10k+ Movies
          </h1>
          <p className="text-primary-700 dark:text-primary-300 text-lg w-full sm:w-1/2 sm:text-xl sm:text-center">
            Welcome to Movies-DB | it is site where you can view information
            about your favourite movies. Movies-DB are best known for excellent
            information for each and every released and not released movies.
          </p>
          <button
            className="bg-primary-800 dark:bg-primary-600 w-80 p-4 text-xl text-primary-100 font-semibold border-white border rounded-md sm:hover:bg-primary-700 sm:p-2 sm:w-72"
            onClick={() => navigate("/movies")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
