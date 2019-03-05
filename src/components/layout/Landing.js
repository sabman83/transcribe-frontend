import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="text-center">
            <h4>
              <b>Transcribe</b>
            </h4>
            <p className="">
              Register and login to strat transcribing your audios
            </p>
            <br />
            <Link
              to="/register"
              style={{
                color: "white",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-primary"
            >
              Register
            </Link>
            <Link
              to="login"
              style={{
                color: "white",
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-primary"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
