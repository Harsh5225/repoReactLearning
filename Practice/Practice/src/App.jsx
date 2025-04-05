import React from "react";
import Child from "./Childclass";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userDeatails: null,
    };
    console.log(" constructor is called");
  }
  // api call in class based component
  async componentDidMount() {
    console.log("Parent componentDidMount is called");
    const response = await fetch("https://api.github.com/users/Harsh52");
    const data = await response.json();
    // console.log()
    this.setState({ userDeatails: data });
    console.log("componentDidMount is called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }
  // when we leave the page componentWillUNMOUNT is called

  render() {
    console.log("render is called");

    return this.state.userDeatails === null ? (
      <h1>Data is Loading</h1>
    ) : (
      <div>
        {/* <Child />
          <Child /> */}
        <h1>Profile class based component</h1>
        {/* // <h3>Name:{this.state.userDeatails.id}</h3> */
        /* <h3>Address:{this.state.userDeatails.address}</h3>
        <h3>Email:{this.state.userDeatails.email}</h3> */}
      </div>
    );
  }
}

export default App;


// Output flow
// App.jsx:10  constructor is called
// App.jsx:27 render is called
// App.jsx:14 Parent componentDidMount is called
// 2App.jsx:19 componentDidMount is called
// App.jsx:27 render is called
// App.jsx:23 componentDidUpdate is called
