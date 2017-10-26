class App extends React.Component {

    constructor() {
        super();
        this.state = {
            date: new Date(),
            year: 2017
        };
    }

    render() {
        return <div>
            <div>{this.state.date.toLocaleTimeString()}</div>
            <div>{this.state.year}</div>
        </div>;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('content')
);