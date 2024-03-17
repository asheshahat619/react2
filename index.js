import React from "react";
import ReactDOM from "react-dom";
const jsxHeading = < h1 className = "jsxHeadingclass" > This is Jsx heading < / h1 >
const HeadingComponent = () => < h1 > This is heading component < /h1>
const root = ReactDOM.createRoot(document.getElementById("root")) { /* root.render([heading, jsxHeading]) */ }
root.render( < HeadingComponent / > )