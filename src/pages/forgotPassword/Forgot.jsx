import React, { Component } from "react";
import '../forgotPassword/Forgot.scss'
import { TextField, Button } from "@material-ui/core";

export class Forgot extends Component {

    constructor(props) {
        super(props)


        this.state = {
            numEmail: '',
            numEmailError: false
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
        error.numEmailError = this.state.numEmail === '' ? true : false;



        this.setState({
            ...error
        })

        return isError = error.numEmailError;
    }


    next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("Validation successfull !!!")
        }
    }


    render() {
        console.log(this.state)
        return (
            <div className="forgot-main-page">
                <div className="forgot-page">
                    <div className="first-part">
                        <div className="fundoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        < p className="find-email">Find your email</p>
                        <p className="phoneNumber">Enter your phone phone or recovery email</p>
                    </div>
                    <div className="enter-num-email">
                        <TextField name="numEmail" id="outlined-basic" label="Phone number or email" variant="outlined" fullWidth
                            error={this.state.numEmailError}
                            helperText={this.state.numEmailError ? "Number or Email required" : ""}
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