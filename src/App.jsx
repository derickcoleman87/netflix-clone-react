import React, { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Modal from "./Modal.jsx";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="app">
      <Header setOpenModal={setOpenModal} />
      <Main />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : null}
    </div>
  );
}

export default App;
