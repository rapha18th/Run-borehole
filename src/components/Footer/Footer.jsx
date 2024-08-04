import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="card about">
            <h6>About Us</h6>
            <div className="abt">
              <p>
                We specialize in groundwater and environmental investigations,
                geotechnical services, drilling management, borehole design,
                construction, and completion reporting for various clients.
              </p>
            </div>
            <p className="follow">Follow Us</p>
            <div className="social">
              <div>
                <Link
                  to="https://web.facebook.com/RunyararoConsult/?rc=p&_rdc=1&_rdr"
                  target="_blank"
                >
                  <img src="./icon/facebook.png" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  to=""
                >
                  <img src="./icon/linkedin.png" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  to=""
                >
                  <img src="./icon/instagram.png" />
                </Link>
              </div>
            </div>
          </div>
          <div className="card link">
            <h6>Links</h6>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/">Our Services</Link>
              <Link to="/contanct-us">Contact Us</Link>
              <Link to="/get-a-free-qoute">Get Free Quote</Link>
            </ul>
          </div>
          <div className="card services">
            <h6>Services</h6>
            <ul>
              <Link to="/ground-water-management-hydrogeology">
                Ground Water Management and Hydrogeology
              </Link>

              <Link to="/geotechinical-studies-gis">
                Geotechinical Studies & GIS
              </Link>

              <Link to="/esia-and-renewable-energy">
                Solar Power
              </Link>
            </ul>
          </div>
          <div className="card contancts">
            <h6>Contanct Info</h6>
            <ul>
              <Link target="_blank" to="tel:+263723985556">
                <img src="./icon/phone-cal.png" />
                +263 723 985 556
              </Link>
              <Link target="_blank" to="">
                <img src="./icon/whatsapp.png" />
                +263 723 985 556
              </Link>
              <Link target="_blank" to="mailto:info@Runyararoconsult.org">
                <img src="./icon/email.png" />
                info@Runyararoconsult.co.zw
              </Link>
              <Link
                to=""
                target="_blank"
              >
                <img src="./icon/placeholder.png" />
                Marlborough
              </Link>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <hr />
          <p>
            Copyright @ 2024 Runyararo Consult. <br /> Designed by{" "}
            <Link to="tel:+263777414925">Initium Labs</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
