import React from "react";
import Header from "../Components/Header";

import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <Header />
      <div className="aboutHero">
        <h1>Error</h1>
        <p className="aboutTxt">
          This page does not exist. Go back{" "}
          <Link to="/home" className="hearderTxt">
            Home
          </Link>
        </p>
      </div>
    </>
  );
}
