import React from "react";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: "red"};
    }

    static getDerivedStateFromProps(props, state) {
      return {color: props.color };
    }

    changeColor = () => {
        console.log('change');
      this.setState({color: "blue"});
    }

    render() {
      return (
        <div>
        <h1>Your Color is {this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>Change this color</button>
        </div>
      );
    }
  }

  export default Header;