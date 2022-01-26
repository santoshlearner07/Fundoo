import React, { Component } from "react";
import '../signin/Signin.scss'
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserService from "../../services/userService";
import axios from "axios";

const uService = new UserService();

export class Signin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false
        }
    }

    checkData = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailError || error.passwordError;
    }
    next = () => {
        var validated = this.validation();
        if (!validated) {
            console.log("Validation Successfulll!!!")

            let data = {
                // "email": "santoshwalker719@gmail.com",
                // "password": "santosh@W23"
                    "email" : this.state.email,
                    "password" : this.state.password
            };

            // if(this.state.email && this.state.password){

            uService.signin(data)
                .then(res => {
                    console.log(res)
                    localStorage.setItem('token', res.data.id)
                    // localStorage.setItem('token', res.data.email)
                    // this.props.history.push("/dashboard")
                })
                .catch(err => {
                    console.log(err)
                })
            // }
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
                        <p className="sign-inS">Sign in</p>
                        < p className="accountS">Use your Fundoo Account</p>
                    </div>
                    <div className="email">
                        <TextField name="email" id="outlined-basic" label="Email or phone" variant="outlined" helperText="Forgot Email?" fullWidth
                            error={this.state.emailError}
                            helperText={this.state.emailError ? "Email or number required" : " "}
                            onChange={e => this.checkData(e)}
                        />
                    </div>
                    <div className="Password">
                        <TextField name="password" id="outlined-basic" label="Password" type="password" variant="outlined" helperText="Forgot Password" fullWidth
                            error={this.state.passwordError}
                            helperText={this.state.passwordError ? "Password required" : " "}
                            onChange={e => this.checkData(e)}
                        />
                        <Link to="/forgot"> <p className="forgotPassword"> Forgot Password ? </p> </Link>
                    </div>
                    <div className="else-computer">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <Link to="/"> <p className="c-text" >Create account ?</p> </Link>
                        <div className="box">
                        <Link to="/dashboard">  <Button style={{ backgroundColor: 'blue' }} className="bbox" variant="contained" size="small" onClick={this.next}>
                                Next
                            </Button></Link>
                            {/* <Button style={{ backgroundColor: 'blue' }} className="bbox" variant="contained" size="small" onClick={this.next}>
                                Next
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin