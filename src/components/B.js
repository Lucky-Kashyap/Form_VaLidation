import React, { Component } from 'react'
// import C from './C';
// import { myContext } from './A';
import { Consumer } from './context'

export default class B extends Component {
    
  render() {
    return (
      <div>
        <h1>B</h1>
        <Consumer>
            {({data,handlecheck}) =>(
              <div>
                  <h3>{data.roll}</h3>
                  <button onClick={handlecheck}>Change Roll</button>

              </div>)}
        </Consumer>
        {/* <C name={this.props.name}/> */}
      </div>
    )
  }
}
