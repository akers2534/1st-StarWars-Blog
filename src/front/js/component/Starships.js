import React from "react";
import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// React components are functions
// Props are parameters or arguments
const vehicles = (props) => {
  const style = {
    width: props.width ? props.width : "18rem",
  };
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getVehicles()
  }, []);
  // Components must return valid HTML.
  return (
    <div className="parent">
      {store.vehicles.map((vehicles, i) => {
        return (
          <div className="card" style={style} key={i}>
            <img
              src="https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {/* You can put JS inline by using curly braces */}
                {vehicles.name ? vehicles.name : "Default Title"}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  manufacturer: {vehicles.manufacturer}
                </li>
                <li className="list-group-item">
                  passengers: {vehicles.passengers}
                </li>
              </ul>

              <div className="row d-flex justify-content-between">
                <button className="btn btn-outline-primary mt-3 col-6">
                  <Link to={`/starship-details/${i}`}>Learn More!</Link>
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
export default vehicles;
