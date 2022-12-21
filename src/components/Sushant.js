import React, { Component } from 'react'
import subjects from './HOC';

class Sushant extends Component {

    // state = {
    //     marks:0
    // }
    // marksIncrement = ()=>{
    //     this.setState({marks:this.state.marks+1});
    // }
  render() {
    return (
      <div>
        <h1>Sushant {this.props.hocm} , {this.props.hocsub}</h1>
        <h2 onMouseOver={this.props.hocf}>Sushant marks</h2>
      </div>
    )
  }
}

export default subjects(Sushant);