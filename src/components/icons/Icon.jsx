import React, { Component } from "react";

import '../icons/Icon.scss'

import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


export class Icon extends Component {
    render() {
        return (
            <div className="iconsSecondC">
                <IconButton><AddAlertOutlinedIcon /></IconButton>
                <IconButton><PersonAddAltOutlinedIcon /></IconButton>
                <IconButton><ColorLensOutlinedIcon /></IconButton>
                <IconButton><PhotoOutlinedIcon /></IconButton>
                <IconButton><ArchiveOutlinedIcon /></IconButton>
                <IconButton><MoreVertOutlinedIcon /></IconButton>
            </div>
        )
    }
}

export default Icon