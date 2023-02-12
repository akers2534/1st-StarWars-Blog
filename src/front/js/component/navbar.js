import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Icons

export const Navbar = () => {
  const {store,actions} = useContext(Context)

  return (
    <div className="container">
      <header className="blog-header 1h-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center bg-dark">
          <div className="col-4 pt-1">
            <Link
              to="/"
              className="nav-link text-dark text-uppercase fw-bold fs-6"
            >
              StarWars
            </Link>
          </div>
          <div className="col-4 text-center">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              height="80"
              width="185"
            />
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center dropstart">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorite
            </button>
            <ul class="dropdown-menu">
                {store.favorites.map((item,index)=><li className="d-flex justify-content-between">{item}<FontAwesomeIcon role = "button" icon = {faTrashCan} onClick={()=>actions.removeFavorite(index)}/></li>)}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
