import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import { Button } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="generalProject">
      <Header />
      <div className="heroSection">
        <div className="leftCol">
          <div className="aboutHero">
            {" "}
            {/*pageHeader*/}
            <h1>Projects</h1>
            <p className="aboutTxt">We have created some magic in the past.</p>
          </div>
        </div>

        <div className="rightCol">
          <img
            src={require("../images/projectHero.png")}
            alt="heroImage"
            className="heroImage"
          />
        </div>
      </div>

      <div className="titleDiv">
        <div className="projectTitle">
          <div className="projectDiv">
            <img
              src={require("../images/broadview3.png")}
              alt=""
              className="projectImg"
            />
          </div>
          <div className="projectDiv2">
            <h3>Broadview Capital</h3>
            <p className="projectTxt">
              Broadview Capital is a private equity firm concentrated on real
              estate acquisition, development, and management across the globe.
            </p>

            {/* <a href="/projectdetails">
            <Button className="buildCTA">View more</Button>
          </a> */}
          </div>
        </div>
        <div className="projectTitle">
          <div className="projectDiv">
            <img
              src={require("../images/su.png")}
              alt=""
              className="projectImg"
            />
          </div>
          <div className="projectDiv2">
            <h3>Service U</h3>
            <p className="projectTxt">
              Service U: A convenient mobile app for connecting with skilled
              artisans and domestic service providers in your neighborhood.
              Browse, book, and pay for services with ease. Verified
              professionals, real-time tracking, and hassle-free scheduling.
              Simplify your life with Service U.
            </p>
            {/* <a href="/projectdetails">
            <Button className="buildCTA">View more</Button>
          </a> */}
          </div>
        </div>
        <div className="projectTitle">
          <div className="projectDiv">
            <img
              src={require("../images/harborchurch.png")}
              alt=""
              className="projectImg"
            />
          </div>
          <div className="projectDiv2">
            <h3>The Harbor Church LA</h3>
            <p className="projectTxt">
              The Harbor Church LA: A sanctuary of home, healing, and hope,
              centered on Jesus Christ. It has a mission to provide a welcoming
              space where people can find solace, restoration, and faith
              Christ's love.
            </p>
            {/* <a href="/projectdetails">
            <Button className="buildCTA">View more</Button>
          </a> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
