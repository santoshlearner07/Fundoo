import React, { Component } from "react";
import '../reset/Reset.scss'
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserService from "../../services/userService";

const uService = new UserService();

export class Reset extends Component {

    constructor(props) {
        super(props)


        this.state = {
            newPassword: '',
            confirmnewPassword: '',
            newPasswordErr: false,
            confirmnewPasswordErr: false,
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
        error.newPasswordErr = this.state.newPassword === '' ? true : false;
        error.confirmnewPasswordErr = this.state.confirmnewPassword === '' ? true : false;


        this.setState({
            ...error
        })
        return isError = error.newPasswordErr || error.confirmnewPasswordErr;
    }


    next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("Success")
            let data = {
                // "newPassword": "Santosh@jkl",
                // "confirmnewPassword": "Santosh@jkl"
                "newPassword" : this.state.newPassword,
                "confirmnewPassword" : this.state.confirmnewPassword
            };

            uService.reset(data)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })


        } else console.log("Something mssing");
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
                        <TextField name="newPassword" id="outlined-basic" label="Password" variant="outlined" fullWidth
                            error={this.state.newPasswordErr}
                            helperText={this.state.newPasswordErr ? "Password Required" : " "}
                            onChange={e => this.checkData(e)}
                        />
                    </div>
                    <div className="confirm-password">
                        <TextField name="confirmnewPassword" id="outlined-basic" label="Confirm Password" type="password" variant="outlined" fullWidth
                            error={this.state.confirmnewPasswordErr}
                            helperText={this.state.confirmnewPasswordErr ? "Password Required" : " "}
                            onChange={e => this.checkData(e)}
                        />
                    </div>
                    <div className="rButton">
                    <Link to="/signin">   <Button style={{ backgroundColor: 'blue' }} className="bbox" variant="contained" size="small" onClick={this.next}>
                            Next
                        </Button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reset