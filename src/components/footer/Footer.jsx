import React,{ Component } from "react";

export class Footer extends Component{

    constructor(props){
        super(props)

        this.message={
            first : "Where are you?"
        }
    }

    dataChange = ()=>{
        this.setState({
            first: "IN Pune"
        })
    }


    render(){
        return(
            <div>
                <h2> This is footer with mehnat</h2>

                <h1>Que:- {this.message.first}</h1>
                <h2>Ans  </h2>
                <button onClick={this.dataChange}>Click me</button>
            </div>
        )

    }
}

export default Footer