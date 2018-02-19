class IndecisionApp extends React.Component {
    render() {

        const title = 'Indecision App';
        const subtitle = 'Put your life into the hands of a computer!';
        const options = ['Option One', 'Option Two', 'Option Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption /> 
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

    handleClick() {
        alert('HandleClick Alert')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What should I do here?</button>
            </div>
        );
    }
}


class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All </button>
                <ol> Here are your options  
                {
                    this.props.options.map((option) => <Option key={option} textValue={option} />
                    )

                }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {

    render() {
        return (
           
                <li> {this.props.textValue} </li>
        );
    }
}

class AddOption extends React.Component {

    addOptionAction(e){
        e.preventDefault();
        let optionValue = e.target.elements.txtOption.value;
        if(optionValue){
            alert(optionValue)
        }
    }

    render() {
        return (
        <div>
            <form onSubmit={this.addOptionAction}>
            <input type='text' name='txtOption'/>
            <button>Add Option </button>
            </form>
        </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));