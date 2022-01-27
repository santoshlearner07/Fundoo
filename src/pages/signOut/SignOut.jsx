import React, { Component } from 'react';
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export class SignOut extends Component {
  render() {
    return ( 
    <div>
        <div>
        <IconButton> <AccountCircleOutlinedIcon /></IconButton>
        </div>
        <div>Name</div>
        <div>Email</div>
        <div>Manage Ur google account</div>
        <div></div>
    </div>
    );
  }
}

export default SignOut
