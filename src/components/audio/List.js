import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    wrap: true
  },
  {
    name: 'Text',
    selector: 'text',
    wrap: true
  },
  {
    name: 'Status',
    selector: 'status',
    wrap: true
  }
];

export default class AudioList extends Component {
  constructor() {
    super();

    this.state = {
      columns: columns,
      data: []
    }
  }

 componentDidMount() {
    axios.get('http://localhost:4000/api/audio/list')
      .then(res => {
        console.log("FETCHED", res);
        this.setState({
          data: res.data
        });
      });
 }
  render() {
    return (
      <DataTable
        title="Your Audio List"
        columns={this.state.columns}
        data={this.state.data}
      />
    )
  }
}
