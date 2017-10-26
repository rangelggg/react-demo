class Father extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: ''
        };
    }

    getChild1Value(name, age) {
        this.setState({name, age});
    }

    render() {
        return <div>
            <Child1 getChild1Value={this.getChild1Value.bind(this)}/>
            <Child2 name={this.state.name} age={this.state.age}/>
        </div>;

    }
}

class Child1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'rangel',
            age: 22
        };
    }

    setParentValue() {
        this.props.getChild1Value(this.state.name, this.state.age);
    }

    render() {
        return <div>
            <button onClick={this.setParentValue.bind(this)}>sendValueToFather</button>
        </div>;
    }

}

class Child2 extends React.Component {

    render() {
        return <div>
            <div>
                <span>name:</span>
                <input type='text' value={this.props.name}/>
            </div>
            <div>
                <span>age:</span>
                <input type='text' value={this.props.age}/>
            </div>
        </div>;
    }
}

ReactDOM.render(
    <Father/>, document.getElementById('content')
);