import React from "react";
import Child from "./Childclass";

class App extends React.Component {
  constructor() {
    super();
    console.log("parent is callled");
  }
  componentDidMount() {
    console.log("Parent componentDidMount is called");
  }
 
  render() {
   console.log("parent render is called");
    return (
      <div>
        <Child/>
      </div>
    );
  }
}

export default App;
