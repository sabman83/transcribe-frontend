import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Transcribe your Audio</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/list" className="nav-link">Your List</Link>
              </li>
              <li className="navbar-item">
                <Link to="/add" className="nav-link">Upload Audio</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
   );
  }
}
export default Navbar;
