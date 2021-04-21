import React, { Component } from 'react'

class Sum extends Component {
  constructor() {
    super()

    this.state = {
      number1 : 0,
      number2 : 0,
      sum: null
    }
  }

  handleChange1(value) {
    this.setState({number1 : value * 1})
  }
  
  handleChange2(value) {
    this.setState({number2 : value * 1 })
  }

  sumNums() {
    let num1 = this.state.number1
    let num2 = this.state.number2
    let result = num1+num2;

    this.setState({sum: result})
  }
  
  render ()  {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={(e) => this.handleChange1(e.target.value)}></input>
        <input className="inputLine" type="number" onChange={(e) => this.handleChange2(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.sumNums()}> Add Up </button>
        <span className="resultsBox"> Sum: { this.state.sum }</span>
      </div>
    )
  }
}

export default Sum;