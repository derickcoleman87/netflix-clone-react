import React from "react";

function TryMapInComponent(props) {
  let arr = [];

  // for (let i = 0; i < props.listOfNums.length; i++) {
  //   let num = props.listOfNums[i];
  //   arr.push(<li>{num}</li>);
  // }
  return (
    <ul>
      {props.listOfNums.map((num) => (
        <li key={Math.random()}>{num}</li>
      ))}
    </ul>
  );
}

export default TryMapInComponent;
