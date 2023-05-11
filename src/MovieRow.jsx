import React, { useState, useEffect } from "react";
import "./MovieRow.css";
import Movie from "./Movie";

function MovieRow({ data }) {
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
          }}
        >
          {"<"}
        </div>
        {data.items.map((movie) => (
          <Movie
            data={movie}
            key={`${Math.random()}-${movie.id}`}
            translate={-numOfMoviesPerPage * page * 229}
          />
        ))}
        <div
          className="right-arrow"
          onClick={() => {
            if (page !== lastPageNumber) setPage(page + 1);
          }}
        >
          {">"}
        </div>
      </div>
    </div>

    // <div className="movie-row">
    //   <h4>{props.title}</h4>
    //   <div className="images-container">
    //     <img src={Encanto} alt="encanto" />
    //     <img src={GlassOnion} alt="The movie glass onion" />
    //     <img src={StrangeWorld} alt="The movie strange world" />
    //     <img src={Zombieland} alt="The movie zombieland" />
    //     <img src={Up} alt="The movie up" />
    //   </div>
    // </div>
  );
}

export default MovieRow;
