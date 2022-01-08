import React, { Component } from "react";
import '../signin/Signin.css'
import { TextField } from "@material-ui/core";

export class Signin extends Component {
    render() {
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
                        <TextField id="outlined-basic" label="Email or phone" variant="outlined" helperText="Forgot Email?" fullWidth />
                    </div>
                    <br></br>
                    <div className="password">
                        <TextField id="outlined-basic" label="Password" variant="outlined" helperText="Forgot Password" fullWidth />

                    </div>
                    <div className="else-computer">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <p className="c-text" >Create account ?</p>
                        <div className="box">
                            <button className="c-next">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin