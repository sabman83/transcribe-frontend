import React, { Component } from "react";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="text-center">
            <h4>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p>
            <br />
            <a
              style={{
                color: "white",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-primary"
            >
              Register
            </a>
            <a
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
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
