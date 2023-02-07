// First step: import react
import React from "react";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

// React components are functions
// Props are parameters or arguments
 const Planets = (props) => {
  const style = {
    width: props.width ? props.width : "18rem"
  }
  const {store,actions} = useContext(Context)
  useEffect(()=>{
    actions.getPlanets()
  },[])
  // Components must return valid HTML.
  return (
    <div className="parent">
      {store.planets.map((planets, i) => {
        return (
          <div className="card" style={style} key={i}>
      <img
        src="https://placekitten.com/526"
        className="card-img-top"
        alt="..."
        />
      <div className="card-body">
        <h5 className="card-title">
          {/* You can put JS inline by using curly braces */}
          {planets.name ? planets.name : "Default Title"}
        </h5>
        <p className="card-text">
          {props.children}
        </p>
        <a href="#" className="btn btn-primary">
          {props.btnText ? props.btnText : "Learn More"}
        </a>
      </div>
    </div>
        )
      })}
    
    </div>
  );}; export default Planets