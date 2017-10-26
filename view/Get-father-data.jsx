class Father extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'rangel',
            age: 22
        };
    }

    changeUserName() {
        this.setState({name: 'guoru'});
    }

    render() {
        return <div>
            <span>userInformation</span>
            <Child name={this.state.name} age={this.state.age}/>
            <button onClick={this.changeUserName.bind(this)}>changeUsername</button>
        </div>;
    }
}

class Child extends React.Component {

    render() {
        return <div>
            <div>name: {this.props.name}</div>
            <div>age: {this.props.age}</div>
        </div>;
    }
}

ReactDOM.render(
    <Father/>, document.getElementById('content')
);