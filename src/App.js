import React, { Component } from "react";
import './App.css';

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component{

  constructor(){
    super();

    this.state = {
      robots : [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()) 
    );

    return(
      <div className="App">
        <h1> Robots Rolodex </h1>
        <SearchBox 
          placeholder="Search robots...."
          handleChange={this.handleChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
