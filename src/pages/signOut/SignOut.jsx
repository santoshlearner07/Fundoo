import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../signOut/SignOut'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function SignOut() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

const signOut =() =>{
    localStorage.removeItem('token')
    localStorage.removeItem("email")
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
}

    return (
        <div className='signOut-page'>
            <IconButton aria-describedby={id} onClick={handleClick} style={{ backgroundColor: 'white' }}>
                <div className="profileIcon"> < AccountCircleOutlinedIcon /></div>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }} >
                    <div className='userDetail'>
                        <div className='userName' >
                            <p> {localStorage.getItem("firstName")}
                                {localStorage.getItem("lastName")}</p>
                            <p>  {localStorage.getItem("email")}</p>
                        </div>
                        <div>
                            <Link to="/signin"> <Button className='signOut' onClick={signOut}>Sign Out</Button> </Link>
                        </div>
                    </div>
                </Typography>
            </Popover>
        </div>
    );
}