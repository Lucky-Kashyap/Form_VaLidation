
import React, { Component } from 'react'

export default class CFucntionClick extends Component {

    constructor(props){
        super(props);
        this.state={
            roll:this.props.roll,
            number :this.props.numbers
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        console.log(this);
        console.log('handle change');
    }
  render() {
    return (
      <div>

      <h1>CFucntionClick</h1>
      <a href='https://youtube.com/' onClick={this.handleChange} target='_blank'>Link</a>

{
    this.state.number.map(item=>( <div key={item}><h1>{item}</h1></div>))
}
      {this.props.roll}
      {/* {this.state.roll} */}
        <button onClick={this.handleChange}>Click</button>
      </div>
    )
  }
}
