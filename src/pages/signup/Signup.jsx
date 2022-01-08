import React, { Component } from "react";
import '../signup/Signup.css'
import { TextField } from "@material-ui/core";
import logo from '../signup/googleLogo.png';



export class Signup extends Component {
    render() {
        return (
            <div class="main-body">
                <div class="page">
                    <div class="left-part">
                        <p class="google">Google</p>
                        <br></br>
                        <p class="account">Create your google account</p>
                        <br></br>
                        <div class="fl-line">
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            <br></br><br></br>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        </div>
                        <br></br>
                        <TextField id="outlined-basic" label="Your email address" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods" />
                        <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">Create a new Gmail address instead</a>
                        <br></br>
                        <br></br>
                        <div class="password">
                            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                            <TextField id="outlined-basic" label="Confirm" type="password" variant="outlined" />
                        </div>
                        <div class="showpassword">
                            <input class="check1" type="checkbox"></input>
                            <p class="showbox">Show Password</p>
                        </div>
                        <div class="last-part">
                            <p class="signin">Sign in Instead</p>
                            <p class="blue-box">
                                <button class="button1">Next</button>
                            </p>
                        </div>
                    </div>
                    <div class="right-part">
                        <img class="logo1" src={logo} alt="this is logo"></img>
                        < p class="logo-text">One account. All of Google working for you.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup