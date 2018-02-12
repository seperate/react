"use strict";

console.log("App.js is running!");

var template = React.createElement(
  "h1",
  null,
  "Indecision Application Hooray!"
);

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

var templateThree = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title,
    " "
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var user = {
  name: "Eyup",
  surname: "Cingel",
  age: 26,
  location: "Istanbul"
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "Unknown";
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name : ",
    user.name,
    " ",
    user.surname,
    " "
  ),
  React.createElement(
    "h2",
    null,
    "Age : ",
    user.age,
    " "
  ),
  React.createElement(
    "h2",
    null,
    "Location : ",
    getLocation(user.location),
    " "
  )
);

var count = 0;
var minusOne = function minusOne() {
  count--;
  renderApplication();
};

var reset = function reset() {
  count = 0;
  renderApplication();
};

var addOne = function addOne() {
  count++;
  renderApplication();
};

var appRoot = document.getElementById("app");

var renderApplication = function renderApplication() {
  var templateFour = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count : ",
      count
    ),
    React.createElement(
      "button",
      { id: "btnPlus", onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { id: "btnMinus", onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { id: "Reset", onClick: reset },
      "Reset"
    )
  );
  ReactDOM.render(templateFour, appRoot);
};

renderApplication();
