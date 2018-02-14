"use strict";

console.log("Visibility Toggle Loaded");

var appRoot = document.getElementById("app");

var isVisible = false;

var showData = function showData() {
  if (isVisible) {
    isVisible = false;
  } else {
    console.log(isVisible);
    isVisible = true;
  }
  renderApp();
};

var renderApp = function renderApp() {
  var wicket = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Toggle Visibility App"
    ),
    React.createElement(
      "button",
      { name: "btnVisibility", onClick: showData },
      isVisible ? "Hide Visibility" : "Show Visibility"
    ),
    isVisible ? React.createElement(
      "p",
      null,
      "Benden sana yar olmaz"
    ) : ""
  );
  ReactDOM.render(wicket, appRoot);
};

renderApp();
