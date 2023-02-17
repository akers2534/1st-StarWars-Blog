import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { faGenderless } from "@fortawesome/free-solid-svg-icons";

export const Single = (props) => {
  // const { store, actions } = useContext(Context);
  // const params = useParams();
  const style = {
    width: props.width ? props.width : "70%",
  };
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
  }, []);
  // Components must return valid HTML.
  return (
    <div className="parent">
      {store.people.map((person, i) => {
        return (
          <div className="card" style={style} key={i}>
            <img
              src="https://thumbs.dreamstime.com/b/yoda-star-wars-original-yoda-puppet-star-wars-movies-as-displayed-star-wars-identities-exposition-111919156.jpg"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">
                {/* You can put JS inline by using curly braces */}
                {person.name ? person.name : "Default Title"}
              </h5>
              <div className="row">
                <div className="col">{people.gender}</div>
                <div className="col">{people.height}</div>
                <div className="col">{people.eyecolor}</div>
                <div className="col">{people.weight}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
export default Single;
