import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Home";
import { Github } from "./Github";
import Counter from "./Counter";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Github/:name" element={<Github />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Counter/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);




