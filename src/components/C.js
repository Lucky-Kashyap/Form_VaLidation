import React, { Component } from 'react'
import { Consumer } from './context'
// import {myContext} from './A'
export default class C extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         name:props.name
    //     }
    // }
  render() {
    return (
      <div>
        <h1>C</h1>
        <Consumer>
          {({data,handle}) =>(
            
            <div>
             <h2>{data.name}</h2>
             <button onClick={handle}>Change Name</button>
             
             </div>
             )
             
             }
        </Consumer>
        {/* <p>{this.props.name}</p> */}
      </div>
    )
  }
}
