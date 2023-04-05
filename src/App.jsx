import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Modal from "./Modal.jsx";
import TryMapInComponent from "./TryMapInComponent";
import MovieRow from "./MovieRow.jsx";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    let token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNjNzgwYTI2OTJmMDY2ZTFmNDRmZDE0MDk0OWZjMyIsInN1YiI6IjY0MjgwODM3OGRlMGFlMDBkNWYyZTQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfuZxZ3HeVCWihkkBfM8sAgPJWT_ujyJh1pjy4XUGoM";

    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    let promise1 = fetch("https://api.themoviedb.org/3/list/1", options);
    let promise2 = fetch("https://api.themoviedb.org/3/list/2", options);
    let promise3 = fetch("https://api.themoviedb.org/3/list/3", options);

    Promise.all([promise1, promise2, promise3]).then((responses) => {
      // let promise1 = responses[0].json();
      // let promise2 = responses[1].json();
      // let promise3 = responses[2].json();
      let promises = responses.map((response) => response.json());

      Promise.all(promises).then((allData) => {
        console.log("allData", allData);
        setRowData(allData);
      });
    });
  }, []);

  return (
    <div className="app">
      <Header setOpenModal={setOpenModal} />
      <main>
        <TryMapInComponent listOfNums={[5, 6, 3, 6, 76]} />
        {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
        {rowData.map((rowDataObject) => (
          <MovieRow key={rowDataObject.id} data={rowDataObject} />
        ))}
      </main>
    </div>
  );
}

export default App;
