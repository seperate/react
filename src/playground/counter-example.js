class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        let lastValue = parseInt(JSON.parse(localStorage.getItem('lastCount')),10);
        console.log('Component Mount : ' + lastValue)
        this.setState(() => {
           return{
            count : lastValue
           } 
        })
    }

    componentDidUpdate(prevProps, prevState){
        let countValue = parseInt(JSON.stringify(this.state.count),10);
        console.log('Storing Value : ' + countValue);
        localStorage.setItem("lastCount",countValue);
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        }
        );
    }

    handleReset() {
        this.setState(() => {
            return {
                count : 0 
            };
        });
    }

    render() {
        return (
            <div>
                <h1> Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1 </button>
                <button onClick={this.handleMinusOne}> -1 </button>
                <button onClick={this.handleReset}> reset </button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));