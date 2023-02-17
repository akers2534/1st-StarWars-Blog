import React from "react";
import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const PlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.planets[params.theid], "planet");
  console.log(store.planets[params.theid].diameter, "diameter");
  useEffect(() => {
    actions.getPlanets();
  }, []);
  return (
    <div className="container w-75 m-auto">
      <div className="row">
        <div className="col">
          <img src="https://picsum.photos/600/300"></img>
        </div>
        <div className="col">
          <h1>{store.planets[params.theid].name}</h1>
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
          <strong>Name:</strong>
          {store.planets[params.theid].name}
        </div>
        <div className="col">
          <strong>climate:</strong>
          {store.planets[params.theid].climate}
        </div>
        <div className="col">
          <strong>rotation:</strong>
          {store.planets[params.theid].rotation_period}
        </div>
        <div className="col">
          <strong>terrain:</strong>
          {store.planets[params.theid].terrain}
        </div>
        <div className="col">
          <strong>population:</strong>
          {store.planets[params.theid].population}
        </div>
        <div className="col">
          <strong>diameter:</strong>
          {store.planets[params.theid].diameter}
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
