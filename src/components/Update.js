// import React, { Component } from 'react'

// export default class Update extends Component {
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }

//     static getDerivedStateFromProps(prevProps,prevState){
//         if(prevProps.count != prevState){
//             return {
//                 count:prevProps.count
//             }
//         }
//         return null
//     }

//     getSnapshotBeforeUpdate(prev,get){
//         console.log(prev.count,get.count);
//     }
//   render() {
//     return (
//       <div>
//       <h1>Update</h1>
      
//         <p>{this.state.count}</p>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>Cart</button>
//       </div>
//     )
//   }
// }


import React from 'react';
class Update extends React.Component {

// Initializing the state
state = {
	name: 'GFG',
};

componentDidMount() {

	// Changing the state after 1 sec
	setTimeout(() => {
	this.setState({ name: 'GeeksForGeeks' });
	}, 1000);
}

getSnapshotBeforeUpdate(prevProps, prevState) {

	// Displaying the previous value of the state
	document.getElementById('prev').innerHTML =
	'Previous Name: ' + prevState.name;

    return null
}

componentDidUpdate() {

	// Displaying the current value of the state
	document.getElementById('new').innerHTML =
	'Current Name: ' + this.state.name;
}

render() {
	return (
	<div>
		<div id="prev"></div>
		<div id="new"></div>
	</div>
	);
}
}

export default Update;

