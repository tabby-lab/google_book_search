import React, { Component } from "react";
import Search from "./Search";
 import axios from 'axios';
import Cards from './Cards'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: '',
    };
  }

searchBook = (event) => {
    event.preventDefault()
    console.log(this.state.search,"search")
   axios
        .get("https://www.googleapis.com/books/v1/volumes?q="+ this.state.search)
        
        .then((results) => {
            console.log(results);
            this.setState({ 
                books:results.data.items
            })

        })
}

  handleSearch = (e) => {
      console.log(e.target.value);
      this.setState({ search: e.target.value })
  };

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}  searchBook={this.searchBook}/>
        
        {console.log(this.state.books)}
        <Cards books={this.state.books} />
      </div>
    );
  }
}

export default Books;
