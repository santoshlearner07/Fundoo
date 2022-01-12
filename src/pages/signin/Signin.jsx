import React, { Component } from "react";
import '../signin/Signin.scss'
import { TextField,Button } from "@material-ui/core";

export class Signin extends Component {

    constructor(props){
        super(props)

        this.state={
            emailCheck : '',
            passCheck :'',
            emailCheckError : false,
            passCheckError:false
        }

    }

    checkData =(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    validation = () =>{
        let isError = false;
        const error = this.state;
        error.emailCheckError = this.state.emailCheck === '' ? true : false;
        error.passCheckError = this.state.passCheck === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailCheckError || error.passCheckError;
    }


    next =() =>{
        var validated = this.validation();
        if(validated){
            console.log("Validation Successfulll!!!")
        } else console.log("OOPS!!! You missed something")
    }

    render() {
        console.log(this.state)
        return (
            <div className="login-main-page">
                <div className="login-content">
                    <div className="first-content">
                        <div className="Fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <p className="sign-in">Sign in</p>
                        < p className="account">Use your Fundoo Account</p>
                    </div>
                    <div className="email">
                        <TextField name="emailCheck" id="outlined-basic" label="Email or phone" variant="outlined" helperText="Forgot Email?" fullWidth 
                        error = {this.state.emailCheckError}
                        helperText = {this.state.emailCheckError ? "Email or number required" : " "}
                        onChange={e=>this.checkData(e)}
                        />
                    </div>
                    {/* <div className="password">
                        <TextField id="outlined-basic" label="Password" variant="outlined" helperText="Forgot Password" fullWidth />
                    </div> */}
                    <div className="Password">
                    <TextField name="passCheck" id="outlined-basic" label="Password" type="password" variant="outlined" helperText="Forgot Password" fullWidth 
                    error={this.state.passCheckError}
                    helperText = {this.state.passCheckError ? "Password required" : " "}
                    onChange={e=>this.checkData(e)}
                    />
                    </div>
                    <div className="else-computer">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <p className="c-text" >Create account ?</p>
                        <div className="box">
                        <Button style={{ backgroundColor: 'blue' }} className="bbox" variant="contained" size="small" onClick={this.next}>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin