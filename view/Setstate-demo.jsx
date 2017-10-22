class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'rangel',
            age: 14
        };
    }

    changeState() {
        this.setState({
            name: 'guoru',
            age: 22
        });
    }

    render() {
        return <div>
            <div>name: {this.state.name}</div>
            <div>name: {this.state.age}</div>
            <button onClick={this.changeState.bind(this)}>button</button>
        </div>;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('content')
);