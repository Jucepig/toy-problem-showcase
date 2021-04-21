import React, { Component } from 'react'

class FilterString extends Component {
  constructor(){
    super()

    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput : '',
      filteredNames: []
    }
  }

  handleChange(value) {
    this.setState({
      userInput : value
    })
  }

  filterNames(str) {
    let nameArr = this.state.names;
    let filtered = []

    for( let i = 0; i < nameArr.length; i++ ) {
      if (nameArr[i].includes(str)) {
        filtered.push(nameArr[i]);
      }
    }
    
    this.setState({
      filteredNames : filtered
    })
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine" onChange={(e)=> {this.handleChange(e.target.value)}}/>
        <button className="confirmationButton"onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  } 
}

export default FilterString;