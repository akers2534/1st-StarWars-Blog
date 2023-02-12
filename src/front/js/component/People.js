// First step: import react
import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


// React components are functions
// Props are parameters or arguments
 const People = (props) => {
  const style = {
    width: props.width ? props.width : "18rem"
  }
  const {store,actions} = useContext(Context)
  useEffect(()=>{
    actions.getPeople()
  },[])
  // Components must return valid HTML.
  return (
    <div className="parent">
      {store.people.map((person, i) => {
        return (
          <div className="card" style={style} key={i}>
      <img
        src="https://placeDog.com/526"
        className="card-img-top"
        alt="..."
        />
      
      <div className="card-body">
        <h5 className="card-title">
          {/* You can put JS inline by using curly braces */}
          {person.name ? person.name : "Default Title"}
        </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">gender: {person.gender}</li>
          <li className="list-group-item">height: {person.height}</li>
        </ul>
        <a href="#" className="btn btn-outline-primary">
          Learn More!
        </a>
        <button onClick={()=>actions.addFavorite(person.name)} className="btn btn-outline-warning float-end mt-3">
        <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
        )
      })}
    
    </div>
  );}; export default People