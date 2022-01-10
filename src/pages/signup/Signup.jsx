import React, { Component } from "react";
import '../signup/Signup.scss'
import { TextField } from "@material-ui/core";
import logo from '../signup/googleLogo.png';


export class Signup extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="page">
                    <div className="left-part">
                        <div className="fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <br></br>
                        <p className="account">Create your fundoo account</p>
                        <br></br>
                        <div className="fl-line">
                            <div className="firstName">
                                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            </div>
                            <div className="lastName">
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                            </div>
                        </div>
                        <br></br>
                        <TextField id="outlined-basic" label="Your fundoo address" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods" />
                        <a className="google-account" href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">Create a new Fundoo address instead</a>
                        <br></br>
                        <br></br>

                        {/* <div className="passLine">
                            <div className="password">
                                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                            </div>
                            <div className="c-password">
                                <TextField id="outlined-basic" label="Confirm" type="password" variant="outlined" />
                            </div>
                        </div> */}

                        <div className="third-box">
                            <div className="first-box">
                            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                            </div>
                            <div className="second-box">
                            <TextField id="outlined-basic" label="Confirm" type="password" variant="outlined" />
                            </div>
                        </div>

                        <p className="pass-validation">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        <div className="showpassword">
                            <input className="check1" type="checkbox"></input>
                            <p className="showbox">Show Password</p>
                        </div>
                        <div className="last-part">
                            <p className="signin">Sign in Instead</p>
                            <p className="blue-box">
                                <button className="button1">Next</button>
                            </p>
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