import "./App.css";
import { createContext, useState } from "react";
import Homescreen from "./Pages/Homescreen";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="container App" id={theme}>
          <Homescreen />
          <div className="switch">
            <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
