import React, { Component } from 'react'
import subjects from './HOC'

class Ajay extends Component {
    // state = {
    //     marks:0
    // }

    // marksChanged = ()=>{
    //     this.setState({marks:this.state.marks + 1})
    // }
  render() {
    return (
      <div>
        <h1>Ajay {this.props.hocm}</h1>
        <h3 onMouseOver={this.props.hocf}>Ajay's Marks , {this.props.hocsub}</h3>
      </div>
    )
  }
}

export default subjects(Ajay);
