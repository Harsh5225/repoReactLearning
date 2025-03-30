import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./Slicer1";
export default function CustomCounter() {
  const [num, setNum] = useState("");
  const dispatch=useDispatch()

  function handleClick(num){
    dispatch(CustomIncreaser(Number(num)))
    setNum("")
  }
  return (
    <div style={{ margin: "10px" }}>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button style={{ display: "block", margin: "10px" }} onClick={()=>handleClick(num)}>Submit</button>
    </div>
  );
}
