// import { createContext } from "react"
import React from "react";

// It is more like hooks as first value and second gives power like set [value, setValue]
const ThemeContext = React.createContext(["green", () => {}]);
export default ThemeContext;
