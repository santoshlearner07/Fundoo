import React, { Component } from "react";
import '../forgotPassword/Forgot.scss'
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserService from "../../services/userService";


const uService = new UserService();

export class Forgot extends Component {

    constructor(props) {
        super(props)


        this.state = {
            email: '',
            emailError: false
        }
    }
    changeHandle = (e) => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.emailError = this.state.email === '' ? true : false;



        this.setState({
            ...error
        })

        return isError = error.emailError;
    }


    next = () => {
        var validated = this.validation();
        if (!validated) {
            console.log("Validation successfull !!!")

            let data = {
                // "email": "santoshwalker719@gmail.com",
                "email" : this.state.email
            };

            uService.forgot(data)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })


        } else console.log("Something missing")
    }


    render() {
        console.log(this.state)
        return (
            <div className="forgot-main-page">
                <div className="forgot-page">
                    <div className="first-part-forgot">
                        <div className="fundooF">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        < p className="find-Femail">Find your email</p>
                        <p className="phoneNumberF">Enter your phone phone or recovery email</p>
                    </div>
                    <div className="enter-num-email">
                        <TextField name="email" id="outlined-basic" label="Phone number or email" variant="outlined" fullWidth
                            error={this.state.emailError}
                            helperText={this.state.emailError ? "Number or Email required" : " "}
                            onChange={e => this.changeHandle(e)}
                        />
                    </div>
                    <div className="nextButton">
                         <Button style={{ backgroundColor: 'blue' }} className="bbox" variant="contained" size="small" onClick={this.next}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forgot