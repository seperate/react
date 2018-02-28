"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      console.log("HBO", optionToRemove);

      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNumber];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(anOption) {
      if (!anOption) {
        return "Enter valid option item";
      } else if (this.state.options.indexOf(anOption) > -1) {
        return "There is already an option with this item";
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat(anOption) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Put your life into the hands of a computer!";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

// Class olarak yaratılmayan componentler Stateless component olarak adlandırılıyor.
// Stateless componentler normal render fonksiyonlarını kullanmak zorunda kalmıyorlar

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      props.title,
      " "
    ),
    React.createElement(
      "h2",
      null,
      " ",
      props.subtitle,
      " "
    )
  );
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> {this.props.title} </h1>
//         <h2> {this.props.subtitle} </h2>
//       </div>
//     );
//   }
// }

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handlePick },
      "Pick Random Option"
    )
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlePick}
//         >
//           Pick Random Option
//         </button>
//       </div>
//     );
//   }
// }

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All "
    ),
    React.createElement(
      "ol",
      null,
      " ",
      "Here are your options",
      props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          textValue: option,
          handleDeleteOption: props.handleDeleteOption });
      })
    )
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All </button>
//         <ol>
//           {" "}
//           Here are your options
//           {this.props.options.map(option => (
//             <Option key={option} textValue={option} />
//           ))}
//         </ol>
//       </div>
//     );
//   }
// }

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.textValue,
    React.createElement(
      "button",
      { onClick: function onClick(e) {
          props.handleDeleteOption(props.textValue);
        } },
      " Remove Item"
    )
  );
};

// class Option extends React.Component {
//   render() {
//     return <li> {this.props.textValue} </li>;
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.addOptionAction = _this2.addOptionAction.bind(_this2);

    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "addOptionAction",
    value: function addOptionAction(e) {
      e.preventDefault();
      var optionValue = e.target.elements.txtOption.value;
      var error = this.props.handleAddOption(optionValue);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.addOptionAction },
          React.createElement("input", { type: "text", name: "txtOption" }),
          React.createElement(
            "button",
            null,
            "Add Option "
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
