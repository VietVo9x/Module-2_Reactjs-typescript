import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import React, { Component } from "react";
import FormStudent from "./components/FormStudent";
import CreateStudent from "./components/CreateStudent";
import ListStudent from "./components/ListStudent";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <CreateStudent />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent />
            {/* END LIST STUDENT */}
          </div>
        </div>
        <FormStudent />
      </div>
    );
  }
}
