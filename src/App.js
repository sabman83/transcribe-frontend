import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


import AudioList from "./components/AudioList.js";
import AddAudio from "./components/AddAudio.js";


class App extends Component {
  render() {
    return (
     <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Transcribe your Audio</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Your List</Link>
              </li>
              <li className="navbar-item">
                <Link to="/add" className="nav-link">Upload Audio</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={AudioList} />
        <Route path="/add" exact component={AddAudio} />
      </div>

    </Router>
    );
  }
}

export default App;
