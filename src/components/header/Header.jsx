import React, { Component } from "react";

export class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Good Morning",
            arr: [1, 2, 3, 4, 5]
        }
    }

    changeHandle = () => {
        this.setState({
            message: "Good Afternoon",
            arr: [56, 78, 89, 78]
        })
    }

    render() {
        return (
            <div>
                <h1>This is my Application {this.state.message}</h1>

                <h2>This is My Array {this.state.arr} </h2>
                <button onClick={this.changeHandle} onClick={this.changeHandle} >Click me</button>
            </div>
        )
    }
}

export default Header