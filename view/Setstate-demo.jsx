class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'rangel',
            age: 14
        };
    }

    changeAllState() {
        this.setState({
            name: 'guoru',
            age: 22
        });
    }

    changeName() {
        this.setState({
            name: 'Lily'
        });
    }

    render() {
        return <div>
            <div>name: {this.state.name}</div>
            <div>age: {this.state.age}</div>
            <button onClick={this.changeAllState.bind(this)}>changeAllState</button>
            <button onClick={this.changeName.bind(this)}>changeName</button>
        </div>;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('content')
);