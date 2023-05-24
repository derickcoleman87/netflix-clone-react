import React, { useState, useEffect } from "react";
import "./MovieRow.css";
import Movie from "./Movie";

function MovieRow({ data, setMovieModalData, setMovieModalPosition }) {
  const [page, setPage] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  let movieWidth = 225;
  let leftMargin = 2;
  let rightMargin = 2;
  let totalMovieWidth = movieWidth + leftMargin + rightMargin;

  //get number of movies we can fit on screen
  function getNumberOfMoviesPerPage() {
    return Math.floor(screenWidth / totalMovieWidth);
  }

  // get number of pages
  function getLastPageNumber() {
    let numOfMoviesTotal = data.items.length;
    let numOfMoviesPerPage = getNumberOfMoviesPerPage();
    let offsetDueToPageStartingAtZeroIndex = 1;
    return (
      Math.ceil(numOfMoviesTotal / numOfMoviesPerPage) -
      offsetDueToPageStartingAtZeroIndex
    );
  }

  // function getArrayOfMovies() {
  //   let allMovies = data.items;
  //   let numOfMoviesPerPage = getNumberOfMoviesPerPage();
  //   let beginning = page * numOfMoviesPerPage;
  //   let end = page * numOfMoviesPerPage + numOfMoviesPerPage;
  //   return allMovies.slice(beginning, end);
  // }

  // let arrayOfMoviesForCurrentPage = getArrayOfMovies();
  let numOfMoviesPerPage = getNumberOfMoviesPerPage();
  let lastPageNumber = getLastPageNumber();

  return (
    <div className="movie-row">
      <h4>{data.name}</h4>
      <div className="images-container">
        <div
          className="left-arrow"
          onClick={() => {
            if (page !== 0) setPage(page - 1);
            console.log(page);
          }}
        >
          {"<"}
        </div>
        {data.items.map((movie) => (
          <Movie
            data={movie}
            key={`${movie.id}`}
            translate={-numOfMoviesPerPage * page * 229}
            setMovieModalData={setMovieModalData}
            setMovieModalPosition={setMovieModalPosition}
          />
        ))}
        <div
          className="right-arrow"
          onClick={() => {
            console.log("click");
            if (page !== lastPageNumber) setPage(page + 1);
            console.log(lastPageNumber);
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
