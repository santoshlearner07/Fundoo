import React, { Component } from 'react';
import IconButton from "@mui/material/IconButton";
import { TextField, Button } from "@material-ui/core";
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';

import '../signOut/SignOut.scss'

export class SignOut extends Component {
  render() {
    return (
      <div className='signOutPageMain'>
        <div className='pageSignOut'>
          {/* <IconButton> */}
            {/* <AccountCircleOutlined /> </IconButton> */}
        </div>
      </div>
    );
  }
}

export default SignOut
