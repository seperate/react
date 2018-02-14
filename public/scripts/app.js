"use strict";

console.log("Visibility Toggle Loaded");

var appRoot = document.getElementById("app");

var isVisible = false;

var showData = function showData() {
  // bu satir degeri oldugunun tersine ceviriyor
  isVisible = !isVisible;
  renderApp();
};

// && operatoru ile tekil logic karsilastirmalarda faydalanmak daha dogru... 

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
    isVisible && React.createElement(
      "p",
      null,
      "Benden sana yar olmaz"
    )
  );
  ReactDOM.render(wicket, appRoot);
};

renderApp();
