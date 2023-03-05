// First step: import react
import React from "react";
import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// React components are functions
// Props are parameters or arguments
const Planets = (props) => {
  console.log(props, "planetprops");
  const style = {
    width: props.width ? props.width : "18rem",
  };
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPlanets()
  }, []);
  // Components must return valid HTML.
  return (
    <div className="parent">
      {store.planets.map((planets, i) => {
        console.log(planets, i + 1, "planetsmap");
        return (
          <div className="card" style={style} key={i}>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/1005/822/563/star-wars-death-star-at-at-space-wallpaper-preview.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {/* You can put JS inline by using curly braces */}
                {planets.name ? planets.name : "Default Title"}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  population: {planets.population}
                </li>
                <li className="list-group-item">terrain: {planets.terrain}</li>
              </ul>

              <div className="row d-flex justify-content-between">
                <button className="btn btn-outline-primary mt-3 col-6">
                  <Link to={`/planet-details/${i}`}>Learn More!</Link>
                </button>
                <button
                  onClick={() => actions.addFavorite(person.name)}
                  className="btn btn-outline-warning float-end mt-3 col-4"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Planets;
