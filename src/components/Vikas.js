
import React, { Component } from 'react'
import subjects from './HOC';

class Vikas extends Component {
    // state = {
    //     marks:0
    // }
    // marksIncremented = ()=>{
    //     this.setState({marks:this.state.marks+1});
    // }
  render() {
    return (
      <div>
        <h1>Vikas , {this.props.hocsub}</h1>
        <h2 onMouseOver={this.props.hocf}>{this.props.hocm}</h2>
      </div>
    )
  }
}

export default subjects(Vikas);