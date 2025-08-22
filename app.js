import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent, { jsxheading } from "./Some";

const heading = React.createElement("h1", {}, "hello world!");
// console.log(heading);
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeadingComponent());
// root.render(<HeadingComponent />);
root.render(<HeadingComponent></HeadingComponent>);
