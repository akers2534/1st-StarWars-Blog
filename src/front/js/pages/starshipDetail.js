import React from "react";
import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const StarshipDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.starships[params.theid], "starship");
  console.log(store.starships[params.theid].diameter, "diameter");
  useEffect(() => {
    actions.getStarships();
  }, []);
  return (
    <div className="container w-75 m-auto">
      <div className="row">
        <div className="col">
          <img src="https://picsum.photos/600/300"></img>
        </div>
        <div className="col">
          <h1>{store.starships[params.theid].name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi
            dolor, semper vel gravida sed, sodales ac quam. Nunc at erat ac
            mauris auctor facilisis quis ac ex. Mauris ultrices neque non ante
            venenatis dignissim. Praesent ut nisi lectus. Praesent ac tortor
            eleifend, posuere enim non, porttitor justo. Vivamus viverra elit ut
            imperdiet convallis. Etiam sed tincidunt purus. Etiam et lacus
            purus. Proin dignissim pellentesque velit in lacinia. Nulla congue
            arcu turpis, et sodales neque facilisis sed. Mauris pharetra dui ut
            odio luctus, a luctus ligula facilisis. Nunc eget vehicula nisi,
            eget commodo mauris. Nunc porttitor vitae turpis in varius.
          </p>
        </div>
      </div>
      <hr className="red"></hr>
      <div className="row red">
        <div className="col">
          <strong>Model:</strong>
          {store.starships[params.theid].model}
        </div>
        <div className="col">
          <strong>Manufacturer:</strong>
          {store.starships[params.theid].manufacturer}
        </div>
        <div className="col">
          <strong>Length:</strong>
          {store.starships[params.theid].length}
        </div>
        <div className="col">
          <strong>Price:</strong>
          {store.starships[params.theid].cost_in_credits}
        </div>
        <div className="col">
          <strong>Crew:</strong>
          {store.starships[params.theid].crew}
        </div>
        <div className="col">
          <strong>Cargo Capacity:</strong>
          {store.starships[params.theid].cargo_capacity}
        </div>
      </div>
    </div>
  );
};

export default StarshipDetails;
