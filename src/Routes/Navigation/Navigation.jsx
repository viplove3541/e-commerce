import { Fragment } from "react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Navigation/Navigation.scss";
import { ReactComponent as CrownLogo } from "../../assets/007 crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/SignIn">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
