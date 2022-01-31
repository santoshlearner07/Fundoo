import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../signOut/SignOut'
import Button from '@mui/material/Button';

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
                            Santosh Nandiyawar
                        </div>
                        <div className='userEmail'>
                            santoshwalker719@gmail.com
                        </div>
                        <div>
                            <Button className='signOut'>Sign Out</Button>
                        </div>
                    </div>
                </Typography>
            </Popover>
        </div>
    );
}