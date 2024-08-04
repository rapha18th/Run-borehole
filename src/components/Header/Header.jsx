import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [UlHeight, setUlHeight] = useState("none");

  const toggle = () => {
    if (UlHeight == "none") {
      setUlHeight("flex");
    } else {
      setUlHeight("none");
    }
  };
  const close = () => {
    setUlHeight("none");
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="./image/Runyararo.png" />
          </Link>
        </div>
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <p>
              Services <img src="./icon/plus.png" />
            </p>
            <ul className="services-child">
              <li>
                <Link to="/ground-water-management-hydrogeology">
                  Ground Water Management & Hydrogeology
                </Link>
              </li>
              <li>
                <Link to="/surface-water-mangemet">Surface Water Mangemet</Link>
              </li>
              <li>
                <Link to="/geotechinical-studies-gis">
                  Geotechinical Studies & GIS
                </Link>
              </li>

              <li>
                <Link to="/esia-and-renewable-energy">
                  Solar Power
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contanct-us">Contanct Us</Link>
          </li>
        </ul>
        <Link to="/get-a-free-qoute" className="get">
          Get a Free Quote
        </Link>
      </div>

      {/* Header Part */}
      <div className="header-phone">
        <div className="top">
          <div className="logo">
            <img className="geo" src="./image/Runyararo.png" />
          </div>
          <img className="menu" onClick={toggle} src="./icon/menu.png" />
        </div>
        <ul className="bottom" style={{ display: UlHeight }}>
          <li>
            <Link to="/" onClick={close}>
              Home
            </Link>
          </li>
          <li>
            <p>
              Services <img src="./icon/plus.png" />
            </p>
            <ul className="services-child">
              <li>
                <Link
                  to="/ground-water-management-hydrogeology"
                  onClick={close}
                >
                  Ground Water Management & Hydrogeology
                </Link>
              </li>
              <li>
                <Link to="/surface-water-mangemet" onClick={close}>
                  Surface Water Mangemet
                </Link>
              </li>
              <li>
                <Link to="/geotechinical-studies-gis" onClick={close}>
                  Geotechinical Studies & GIS
                </Link>
              </li>
              <li>

              </li>
              <li>
                <Link to="/esia-and-renewable-energy" onClick={close}>
                  Solar Power
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about-us" onClick={close}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contanct-us" onClick={close}>
              Contanct Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
