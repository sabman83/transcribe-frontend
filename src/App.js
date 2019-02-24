import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";


//import AudioList from "./components/AudioList.js";
//import AddAudio from "./components/AddAudio.js";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Router>
        <div className="container">
          <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </div>

       </Router>
      </Provider>
    );
  }
}

export default App;
