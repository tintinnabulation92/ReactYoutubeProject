import React, { Component } from 'react';


class SearchBar extends Component {

  //state - plain javascript object
  //state react to user events
  //each class has it
  //state changes - render re renders the components
  //komponent ma konstruktor
  //wzywamy ten konstruktor - metode

    constructor(prop){
      super(prop);
      this.state = {term: 'null'};
    }

    render(){
      return (
        <div>
          <input //controlled component
            value = {this.state.term}
            onChange = {event => this.setState({term: event.target.value})}/>
        </div>
      );
    }

  }


export default SearchBar;
