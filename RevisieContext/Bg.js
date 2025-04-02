

import React, { useContext } from "react";
import GlobalContext from "./Globalcontext";

const Bg = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default Bg;
