import React, { Component } from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';


export class DisplayNote extends Component {
    render() {
        return (
            <div className="mainDisplay">
                <div className="displayBox">
                    <div>Title</div>
                    <div>Description</div>
                    <div>
                        <AddAlertOutlinedIcon />
                        <PersonAddAltOutlinedIcon />
                        <ColorLensOutlinedIcon />
                        <PhotoOutlinedIcon />
                        <ArchiveOutlinedIcon />
                        <MoreVertOutlinedIcon />
                    </div>

                </div>
            </div>
        )
    }
}

export default DisplayNote