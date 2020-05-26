import React, { Component } from "react";
import Search from "./Search";
import request from 'superagent';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: '',
    };
  }

searchBook = () => {
    request
        .get("http://www.googleapis.com/books/v1/volumes")
        .query({ q: this.seach })
        .then((data) => {
            console.log(data);
        })
}

  handleSearch = (e) => {
      console.log(e.target.value);
      this.setState({ search: e.target.value })
  };

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Books;
