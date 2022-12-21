import axios from 'axios';
import React, { Component } from 'react'

export default class Data extends Component {
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{this.setState({posts:res.data})
            console.log(res)}
        ).catch(err => console.log('error'))

        // https://myproduct-28508.web.app/stock.json

        // axios.get('https://myproduct-28508.web.app/stock.json')
        // .then(res=>{this.setState({posts:res.data})
        //     console.log(res)}
        // ).catch(err => console.log('error'))

        // fetch('https://myproduct-28508.web.app/stock.json')
        // .then(res => res.json()).then(item => this.setState({posts:item}))


    }
  render() {
    return (
      <div>
        <h1>Data</h1>
        {
            this.state.posts.map(item=>(
              <div key={item.id}>
              <p>{item.title}</p>
                {/* <p >{item.name}</p> */}
                {/* <p>{item.price}</p> */}
                {/* <img src={item.image}/> */}
                </div>
            ))
        }
      </div>
    )
  }
}
