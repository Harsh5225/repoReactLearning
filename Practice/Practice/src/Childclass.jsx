import React from 'react'

class Child extends React.Component {
  constructor() {
    super();
    console.log("child ctr is callled");
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("child set variable is called");
  };
  componentDidMount() {
    console.log("child componentDidMount is called");
  }
  render() {
    console.log("child render is called");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
export default Child;
