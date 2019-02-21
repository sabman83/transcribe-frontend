import React, { Component } from 'react';

export default class AddAudio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      file: ''
    }

    this.handleNameChange.bind(this);
    this.handleFileChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleFileChange(e) {
  }

  handleSubmit(e) {
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
            <input type="file" />
          </div>
          <div className="form-group">
                        <input type="submit" value="Upload" className="btn btn-primary" />
                    </div>
        </form>
      </div>
    )
  }
}
