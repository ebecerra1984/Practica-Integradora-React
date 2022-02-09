import React from "react";
import Card from "./Card";

let moviesInDb = {
  title: "Movies in Data Base",
  color: "primary",
  icon: "fa-film",
  quantity: 21,
};

let totalAwards = {
  title: "Total awards",
  color: "success",
  icon: "fa-award",
  quantity: 79,
};

let actorsQuantity = {
  title: "Actors quantity",
  color: "warning",
  icon: "fa-user",
  quantity: 49,
};

let cartProps = [moviesInDb, totalAwards, actorsQuantity];

function ContentRowMovies() {
  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <Card {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
