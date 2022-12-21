import axios from 'axios';
import React, { Component } from 'react'

export default class PostData extends Component {
    constructor(){
        super();
        this.state={
            userid:'',
            title:'',
            body:''
        }
        // this.state={
        //     username:'',
        //     address:''
        // }
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleUsername = (e)=>{
        this.setState({username:e.target
        .value})
    }
    handleAddress = (e)=>{
        this.setState({address:e.target
        .value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res =>{
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    }

  render() {
    const {userid,title,body} = this.state;
    return (
      <div>
      <h1>PostData</h1>

      <form onSubmit={this.handleSubmit}>

        <div>
            <label>userid</label>
            <input type="text" value={userid} name = "userid" onChange={this.changeHandler}/>
        </div>
        <div>
            <label>title</label>
            <input type="text" value={title} name = "title" onChange={this.changeHandler}/>
        </div>
        <div>
            <label>Bodyy</label>
            <input type="text" value={body} name = "body" onChange={this.changeHandler}/>
        </div>
        <button type='submit'>Submmit</button>
      </form>
      
      
      </div>
    )
  }
}
