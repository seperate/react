class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: []
    };
  }

  // Component ilk yüklendiğinde çağırılıyor
  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    if (options) {
      // return eden element in name i ile assign edilen parametrenin name i eşitse direk element in adını yazabiliyoruz. 
      // options : options yerine
      this.setState(() => ({ options }));
    }
  }

  // Component update olduğunda çağırılıyor
  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.options);
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {}

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    console.log("HBO", optionToRemove);

    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(anOption) {
    if (!anOption) {
      return "Enter valid option item";
    } else if (this.state.options.indexOf(anOption) > -1) {
      return "There is already an option with this item";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(anOption)
    }));
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life into the hands of a computer!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// Class olarak yaratılmayan componentler Stateless component olarak adlandırılıyor.
// Stateless componentler normal render fonksiyonlarını kullanmak zorunda kalmıyorlar

const Header = props => {
  return (
    <div>
      <h1> {props.title} </h1>
      <h2> {props.subtitle} </h2>
    </div>
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

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        Pick Random Option
      </button>
    </div>
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

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All </button>
      <ol>
        {props.options.length == 0 && <p>Please add an option to begin </p>}
        {props.options.map(option => (
          <Option
            key={option}
            textValue={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
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

const Option = props => {
  return (
    <div>
      {props.textValue}
      <button
        onClick={e => {
          props.handleDeleteOption(props.textValue);
        }}
      >
        {" "}
        Remove Item
      </button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return <li> {this.props.textValue} </li>;
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    // Form ile ilgili işlemleri component in kendisinde yapmak daha mantıklıymış.
    // Bundan dolayı addOptionAction methodunu constructor da çağırıyoruz
    this.addOptionAction = this.addOptionAction.bind(this);

    this.state = {
      error: undefined
    };
  }

  addOptionAction(e) {
    e.preventDefault();
    let optionValue = e.target.elements.txtOption.value;
    let error = this.props.handleAddOption(optionValue);
    this.setState(() => ({ error }));
   
   // Eğer componentde herhangi bir hata yoksa, txtOption text kutusunun iceriğini otomatik olarak boşalt
    if (!error) {
      e.target.elements.txtOption.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOptionAction}>
          <input type="text" name="txtOption" />
          <button>Add Option </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
