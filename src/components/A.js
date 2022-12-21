import React, { Component } from 'react'
import { Provider } from './context';
import B from './B';
import C from './C';
// export const myContext = React.createContext();

export default class A extends Component {
    state={
        name:'Lucky',
        roll:27
    }
    handleClickContext = ()=>{
        this.setState({roll:this.state.roll +1})
    }
    handleClick = ()=>{
        this.setState({name:this.state.name + " Kashyap"})
    }
  render() {
    const contextValue = {
        data:this.state,
        handlecheck:this.handleClickContext,
        handle:this.handleClick
    }
    return (
      <div>
        <h1>A</h1>
        <Provider value={contextValue}>
            <B/>
            <C/>
        </Provider>
        {/* <B name={this.state.name}/> */}
      </div>
    )
  }
}
