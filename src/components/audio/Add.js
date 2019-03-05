import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://localhost:4000/api/audio/add'

export default class AddAudio extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      file: null
    }

    //thiuuthiuuthiuuthis.handleNameChange.bind(this);
    //this.handleFileChange.bind(this);
    //this.handleSubmit.bind(this);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
    })
  }

  handleGetList = (e) => {
    e.preventDefault();

    axios.get('http://localhost:4000/api/audio/list')
      .then(res => {
        console.log(res.statusText);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = new FormData();
    data.append('file', this.state.file);
    data.append('descr', this.state.name);

    axios
      .post(endpoint, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      });
  }

  render() {
    return (
      <div>
        <h3>Upload Audio File:</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                />
          </div>
          <div className="form-group">
            <label>Choose an audio file:</label>
            <input type="file"
              onChange={this.handleFileChange}
              />
          </div>
          <div className="form-group">
              <input type="submit"
                value="Upload"
                className="btn btn-primary"
              />
            <div> {Math.round(this.state.loaded, 2)} </div>
          </div>
        </form>
        <button type="button" onClick={this.handleGetList}>Click Me!</button>
      </div>
    )
  }
}

