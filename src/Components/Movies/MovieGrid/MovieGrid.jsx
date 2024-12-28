import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router";

export default function MovieGrid() {
  const moviesItem = JSON.parse(localStorage.getItem("moviinfo-list"));

  return (
    <div className="w-full h-fit">
      <div className="w-full h-32 flex justify-start items-center pl-5">
        <h1 className="text-4xl font-semibold dark:text-white">Top Movies</h1>
      </div>

      {moviesItem.length > 0 ? (
        <div className="grid grid-flow-row auto-rows-auto gap-8 w-full px-6 justify-center sm:grid-cols-4 sm:gap-8 md:px-6">
          {moviesItem.slice(0, 60).map((movie, index) => (
            <Card
              key={index}
              className="max-w-sm sm:max-w-xs"
              imgAlt={movie.title}
              imgSrc={movie.primaryImage}
            >
              <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>

              <div className="flex items-center justify-center">
                <Link to={movie.url}>
                  <button className="bg-primary-800 dark:hover:bg-primary-700 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    View More
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
