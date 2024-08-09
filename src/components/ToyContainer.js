import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {

  const toyCards = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} />;
  });



  return (
    <div id="toy-collection">
      <ul>{toyCards}</ul></div>
  );
}

export default ToyContainer;
