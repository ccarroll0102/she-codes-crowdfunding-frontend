import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./NavBar.css";
import { useState, useEffect } from "react";

function NavBar() {
    const {auth, setAuth} = useAuth();

    const handleLogout = () => {
      window.localStorage.removeItem("token");
      setAuth({ token: null });
    };


  return (
    <div className="NavBar">
      <nav>

        <div className="nav-left">
          <Link to="/">Swimmerly</Link>
          </div> 

        <div className="nav-center">
          <Link to="/fundraisers">Fundraisers</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          {auth.token && (<Link to="/create">Create Fundraiser</Link>)}
        </div>

        <div className="nav-right">
        {auth.token ? (
            <Link to="/" onClick={handleLogout} className="btn-nav-secondary">
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="btn-nav-secondary">
              Login
            </Link>
          )}
        {!auth.token && (
            <Link to="/signup" className="btn-nav-primary">
              Sign Up
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;

