import { Component } from "react";


const subjects = (STUDENT) =>{
    class Subject extends Component{

        state = {
            marks:0
        }
    
        marksChanged = ()=>{
            this.setState({marks:this.state.marks + 1})
        }

        render(){
            return (
                <STUDENT hocsub = "JAVA" hocm={this.state.marks} hocf = {this.marksChanged}></STUDENT>
            )
        }
    }

    return Subject;
}

export default subjects;