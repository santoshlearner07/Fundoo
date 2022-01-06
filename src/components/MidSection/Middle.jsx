import React, { Component } from "react";

export class Middle extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Santosh",
            adDress: "Anand Park",
            book:"Revolution 2020"
        }
    }

infoChange = () =>{
    this.setState({
        adDress: "NoAddress",
        name : "Noname",
        book:"Author-ChetanBhagat"
    })
}

    render() {
        return (
            <div>
                <h2>My name is {this.state.name} and I live in {this.state.adDress} </h2>
                <h1>Who wrote {this.state.book} book? </h1>
                <h2>Click to know</h2>
                <button onClick={this.infoChange} onClick={this.infoChange} onClick={this.infoChange}> Click me </button>
            </div>
        )
    }
}

export default Middle