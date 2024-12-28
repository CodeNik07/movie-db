import React from "react";
import MovieGrid from "./MovieGrid/MovieGrid";

export default function MoviesLayout() {
  return (
    <div className="w-full h-full bg-primary-100 dark:bg-primary-900">
      <MovieGrid />
    </div>
  );
}
