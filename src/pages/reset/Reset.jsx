import React, { Component } from "react";
import '../reset/Reset.scss'
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export class Reset extends Component {

    constructor(props) {
        super(props)


        this.state = {
            resetPassword: '',
            confirmResetPassword: '',
            resetPasswordErr: false,
            confirmResetPasswordErr: false,
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
        error.resetPasswordErr = this.state.resetPassword === '' ? true : false;
        error.confirmResetPasswordErr = this.state.confirmResetPassword === '' ? true : false;


        this.setState({
            ...error
        })
        return isError = error.resetPasswordErr || error.confirmResetPasswordErr;
    }




    next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("Success")
        }
    }


    render() {
        console.log(this.state)
        return (
            <div className="reset-main-page">
                <div className="reset-page">
                    <div className="first-part">
                        <div className="fundooR">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        < p className="find-Remail">Find your email</p>
                        <p className="enter-Rpassword">Enter password</p>
                    </div>
                    <div className="password">
                        <TextField name="resetPassword" id="outlined-basic" label="Password" variant="outlined" fullWidth
                            error={this.state.resetPasswordErr}
                            helperText={this.state.resetPasswordErr ? "Password Required" : " "}
                            onChange={e => this.checkData(e)}
                        />
                    </div>
                    <div className="confirm-password">
                        <TextField name="confirmResetPassword" id="outlined-basic" label="Confirm Password" type="password" variant="outlined" fullWidth
                            error={this.state.confirmResetPasswordErr}
                            helperText={this.state.confirmResetPasswordErr ? "Password Required" : " "}
                            onChange={e => this.checkData(e)}
                        />
                    </div>
                    <div className="rButton">
                        <Button style={{ backgroundColor: 'blue' }} className="bbox" variant="contained" size="small" onClick={this.next}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reset