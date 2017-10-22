class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return <div>
            {this.state.date.toLocaleTimeString()}
        </div>;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('content')
);