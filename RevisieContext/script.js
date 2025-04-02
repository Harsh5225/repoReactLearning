import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import GlobalContext from "./Globalcontext";
import Bg from "./Bg";
import "./styles.css"; // Import CSS file
const root = createRoot(document.getElementById("root"));
const App = () => {
  const [theme, setTheme] = React.useState("light");
   useEffect(()=>{
    document.body.className = theme;
   },[theme])
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <div className="container">
        <div className={`box ${theme}`}>
          <Bg />
        </div>
      </div>
    </GlobalContext.Provider>
  );
};


root.render(<App />);
