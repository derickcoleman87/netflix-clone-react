import React, { useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  const [count, add1ToCount] = useState(0);
  return (
    <div className="modal">
      <h1>modal</h1>
      <button onClick={() => setOpenModal(false)}>X</button>
      <h2>Counter: {count}</h2>
      <button onClick={() => add1ToCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default Modal;
