// const React = require('react')
// const ReactDOM = require('react-dom')

import React from "react";
import ReactDOM from "react-dom";

// Importing a stylesheet
import "./stylesheet.css";

const name = "Andre";

const add = (a, b) => a + b;

const nestedElement = <p>Random Number: {parseInt(Math.random() * 10)}</p>;

const rome = {
  imgUrl: "https://i.imgur.com/FI12gfD.jpg",
  name: "Rome"
};

const styles = {
  height: "400px"
};

// You can have any JavaScript expression in JSX
const element = (
  <div>
    {/* Be sure to use className instead of class when targeting elements */}
    <h1 className="heading">
      Hello {name.toUpperCase()}! {6 * 7}
    </h1>
    <p
      style={{
        color: "deepskyblue",
        textAlign: "center" // camelCase for properties with more than one word
      }}
    >
      Sum of 4 and 5 is:
      {add(4, 5)}
    </p>
    {nestedElement}
    <img src={rome.imgUrl} style={styles} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
