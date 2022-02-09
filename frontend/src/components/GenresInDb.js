import React, { Component } from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
    };
  }

  componentDidMount() {
    fetch("/api/genres");
  }

  render() {
    return (
      <div>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="m-0 font-weight-bold text-gray-800">
              <Genre />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenresInDb;
