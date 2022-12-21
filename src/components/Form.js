import React, { Component } from 'react'

export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            address:''
        }
    }

    handleUsername= (e)=>{
        // console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    }
    handleAddress= (e)=>{
        // console.log(e.target.value);
        this.setState({
            address:e.target.value
        })
    }

    handleSubmit = (e)=>{
        // e.preventDefault();
        console.log(`User name is ${this.state.username} and address is ${this.state.address}`);
        e.preventDefault();
    }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.handleUsername}/>

            <label>Address</label>
            <input type="text" value={this.state.address} onChange={this.handleAddress}/>

            <br/>
            <button type='submit' >Submit</button>
            {/* onClick={this.handleSubmit} */}
        </form>
      </div>
    )
  }
}
