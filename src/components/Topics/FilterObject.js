import React, { Component } from 'react'

class FilterObject extends Component {
  constructor() {
    super()

    this.state = {
      employees : [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],
      userInput : '',
      filteredEmployees : []
    }
  }

  handleChange(value) {
    this.setState({userInput:value})
  }

  filterEmployees(prop) {
    let empArr = this.state.employees;
    let filtered = []
    for ( let i = 0; i < empArr.length; i++ ) {
      if ( empArr[i].hasOwnProperty(prop) ) {
        filtered.push(empArr[i]);
      }
    }
  
    this.setState({ filteredEmployees: filtered});
  }

  render(){
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => {this.handleChange(e.target.value) }}/>
        <button className="confirmationButton" onClick={ ()=> this.filterEmployees(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}

export default FilterObject;