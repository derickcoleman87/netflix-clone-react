import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Modal from "./Modal.jsx";
import MovieRow from "./MovieRow.jsx";
import MovieModal from "./MovieModal";
import { BottomScrollListener } from "react-bottom-scroll-listener";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [movieModalData, setMovieModalData] = useState({});
  const [movieModalPosition, setMovieModalPosition] = useState({});
  const [apiListPage, setApiListPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    let token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNjNzgwYTI2OTJmMDY2ZTFmNDRmZDE0MDk0OWZjMyIsInN1YiI6IjY0MjgwODM3OGRlMGFlMDBkNWYyZTQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfuZxZ3HeVCWihkkBfM8sAgPJWT_ujyJh1pjy4XUGoM";

    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    let promise1 = fetch(
      `https://api.themoviedb.org/3/list/${apiListPage}`,
      options
    );
    let promise2 = fetch(
      `https://api.themoviedb.org/3/list/${apiListPage + 1}`,
      options
    );
    let promise3 = fetch(
      `https://api.themoviedb.org/3/list/${apiListPage + 2}`,
      options
    );

    Promise.all([promise1, promise2, promise3])
      .then((responses) => {
        let promises = responses.map((response) => response.json());

        Promise.all(promises)
          .then((newRowData) => {
            let allRowData = Array.from(rowData).concat(newRowData);
            setRowData(allRowData);
            setApiListPage(apiListPage + 3);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="app">
      <Header setOpenModal={setOpenModal} />
      <main>
        <MovieModal
          data={movieModalData}
          setMovieModalData={setMovieModalData}
          position={movieModalPosition}
        />
        {openModal && <Modal setOpenModal={setOpenModal} />}

        {rowData.map((rowDataObject, index) =>
          rowDataObject.items.length ? (
            <MovieRow
              index={index}
              key={rowDataObject.id}
              data={rowDataObject}
              setMovieModalData={setMovieModalData}
              setMovieModalPosition={setMovieModalPosition}
            />
          ) : null
        )}
      </main>
      <BottomScrollListener onBottom={fetchData} debounce={1000} />
    </div>
  );
}

export default App;
