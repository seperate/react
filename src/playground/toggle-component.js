class ToggleVisibility extends React.Component {

    constructor(props) {
        super(props);
        this.handleVisibility = this
            .handleVisibility
            .bind(this);
        this.state = {
            visible: false
        }
    }

    handleVisibility() {
        console.log("Test");
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>
                    Visibility Toggle
                </h1>
                <button onClick={this.handleVisibility}>
                    {this.state.visible
                        ? "Hide Info "
                        : "Show Info"}
                </button>
                {this.state.visible && (
                    <div>
                        <p>
                            Here is some text for the underground
                        </p>
                    </div>
                )
}
            </div>
        )
    }
}

ReactDOM.render(
    <ToggleVisibility/>, document.getElementById('app'));