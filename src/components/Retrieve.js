import React, { Component } from 'react'

export default class Retrieve extends Component {
    constructor(){
        super();
        this.state={
            x:0,
            y:0
        }
    }

    logMousePosition = (e)=>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        console.log('Component Did Mount');
        window.addEventListener('mousemove',this.logMousePosition)
    }
  render() {
    return (
      <div>Retrieve
      
        <p>{this.state.x}</p>
        <p>{this.state.y}</p>
      </div>

    )
  }
}
