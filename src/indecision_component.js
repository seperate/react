class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
     this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(anOption) {

    if(!anOption){
        return 'Enter valid option item'; 
    } else if(this.state.options.indexOf(anOption) > -1){
        return 'There is already an option with this item';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(anOption)
      };
    });
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
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2> {this.props.subtitle} </h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          Pick Random Option
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All </button>
        <ol>
          {" "}
          Here are your options
          {this.props.options.map(option => (
            <Option key={option} textValue={option} />
          ))}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li> {this.props.textValue} </li>;
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOptionAction = this.addOptionAction.bind(this);

    this.state = {
        error: undefined
    }
  }

  addOptionAction(e) {
    e.preventDefault();
    let optionValue = e.target.elements.txtOption.value;
    let error = this.props.handleAddOption(optionValue);
    this.setState(() => {
        return {error};
    })
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
