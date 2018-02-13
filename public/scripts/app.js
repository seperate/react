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
  options: []
};

var removeAll = function removeAll() {
  app.options = [];
  renderForm();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log("Form submitted!");
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  renderForm();
};

var renderForm = function renderForm() {
  var appRoot = document.getElementById("app");

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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Kill Them All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          "Option : ",
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(templateThree, appRoot);
};

renderForm();
