import React, { Component } from "react";
import '../signup/Signup.scss'
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../signup/googleLogo.png';
import axios from "axios";
import UserService from "../../services/userService";

const uService = new UserService();

export class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            firstNameError: false,
            lastNameError: false,
            emailError: false,
            passwordError: false,
            confirmPasswordError: false
        }
    }

    changeHandle = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.firstNameError = this.state.firstName === '' ? true : false;
        error.lastNameError = this.state.lastName === '' ? true : false;
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirmPasswordError = this.state.confirmPassword === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.confirmPasswordError; // 
    }


    next = () => {
        var validated = this.validation();
        if (!validated) {
            console.log("Validation Completed")

            let data = {
                "firstName": this.state.firstName ,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "password": this.state.password,
                "service": "advance"
            };

            uService.registration(data)
                .then(res => {
                    // console.log(res)
                })
                .catch(err => {
                    // console.log(err)
                })

        } else {
            console.log("somethingmissing")
        }
    }


    render() {
        console.log(this.state)
        return (
            <div className="main-body">
                <div className="page">
                    <div className="left-part">
                        <div className="funWord">
                            <p style={{ color: 'blue' }}>F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <br></br>
                        <p className="c-account">Create your fundoo account</p>
                        <br></br>
                        <div className="fl-line">
                            <div className="firstName">
                                <TextField name="firstName" id="outlined-basic" label="First Name" variant="outlined"
                                    error={this.state.firstNameError}
                                    helperText={this.state.firstNameError ? "First Name required" : " "}
                                    onChange={e => this.changeHandle(e)}
                                />
                            </div>
                            <div className="lastName">
                                <TextField name="lastName" id="outlined-basic" label="Last Name" variant="outlined"
                                    error={this.state.lastNameError}
                                    helperText={this.state.lastNameError ? "Last Name required" : " "}
                                    onChange={e => this.changeHandle(e)}
                                />
                            </div>
                        </div>
                        <TextField name="email" id="outlined-basic" label="Your fundoo email" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods"
                            error={this.state.emailError}
                            helperText={this.state.emailError ? "Fundoo email required" : " "}
                            onChange={e => this.changeHandle(e)}
                        />
                        <a className="google-account" href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">Create a new Fundoo email instead</a>
                        <br></br>
                        <br></br>

                        <div className="third-box">
                            <div className="first-box">
                                <TextField name="password" id="outlined-basic" label="Password" type="password" variant="outlined"
                                    error={this.state.passwordError}
                                    helperText={this.state.passwordError ? "Password required" : " "}
                                    onChange={e => this.changeHandle(e)} />
                            </div>
                            <div className="second-box">
                                <TextField name="confirmPassword" id="outlined-basic" label="Confirm" type="password" variant="outlined"
                                    error={this.state.confirmPasswordError}
                                    helperText={this.state.confirmPasswordError ? "Confirm your password" : " "}
                                    onChange={e => this.changeHandle(e)}
                                />
                            </div>
                        </div>

                        <p className="pass-validation">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <div className="showpassword">
                            <input className="check1" type="checkbox"></input>
                            <p className="showbox">Show Password</p>
                        </div>
                        <div className="last-part">
                            <Link to="/signin"> <p className="signin">Sign in Instead</p> </Link>
                            {/* <p className="blue-box">
                                <button className="button1" onClick={this.next}>Next</button>
                            </p> */}
                            <Button style={{ backgroundColor: 'blue' }} className="bbox" variant="contained" size="small" onClick={this.next}>
                                Next
                            </Button>
                        </div>
                    </div>
                    <div className="right-part">
                        <img className="logo1" src={logo} alt="this is logo"></img>
                        < p className="logo-text">One account. All of Google working for you.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup