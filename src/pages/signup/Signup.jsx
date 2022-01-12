import React, { Component } from "react";
import '../signup/Signup.scss'
import { TextField, Button } from "@material-ui/core";
import logo from '../signup/googleLogo.png';


export class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            address: '',
            firstPassword: '',
            confirmPassword: '',
            first_nameError: false,
            last_nameError: false,
            addressError: false,
            firstPasswordError: false,
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
        error.first_nameError = this.state.first_name === '' ? true : false;
        error.last_nameError = this.state.last_name === '' ? true : false;
        error.addressError = this.state.address === '' ? true : false;
        error.firstPasswordError = this.state.firstPassword === '' ? true : false;
        error.confirmPasswordError = this.state.confirmPassword === '' ? true : false;


        this.setState({
            ...error
        })

        return isError = error.first_nameError || error.last_nameError || error.addressError || error.firstPasswordError || error.confirmPasswordError;
    }


    next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("Validation Completed")
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
                                <TextField name="first_name" id="outlined-basic" label="First Name" variant="outlined"
                                    error={this.state.first_nameError}
                                    helperText={this.state.first_nameError ? "First Name required" : " "}
                                    onChange={e => this.changeHandle(e)}
                                />
                            </div>
                            <div className="lastName">
                                <TextField name="last_name" id="outlined-basic" label="Last Name" variant="outlined"
                                    error={this.state.last_nameError}
                                    helperText={this.state.last_nameError ? "Last Name required" : " "}
                                    onChange={e => this.changeHandle(e)}
                                />
                            </div>
                        </div>
                        <br></br>
                        <TextField name="address" id="outlined-basic" label="Your fundoo address" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods"
                            error={this.state.addressError}
                            helperText={this.state.addressError ? "Fundoo address required" : " "}
                            onChange={e => this.changeHandle(e)}
                        />
                        <a className="google-account" href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">Create a new Fundoo address instead</a>
                        <br></br>
                        <br></br>

                        <div className="third-box">
                            <div className="first-box">
                                <TextField name="firstPassword" id="outlined-basic" label="Password" type="password" variant="outlined"
                                    error={this.state.firstPasswordError}
                                    helperText={this.state.firstPasswordError ? "Password required" : " "}
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
                            <p className="signin">Sign in Instead</p>
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