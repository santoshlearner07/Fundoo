import React, { Component } from "react";
import { Button } from "@material-ui/core";

import '../displayNote/DisplayNote.scss'

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
                    <input type="text" placeholder="Title"></input> <br></br>
                    <input type="text" placeholder="Description"></input>
                    <div className="displayThirdPart">
                        <div className="displayIcons">
                            <AddAlertOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorLensOutlinedIcon />
                            <PhotoOutlinedIcon />
                            <ArchiveOutlinedIcon />
                            <MoreVertOutlinedIcon />
                        </div>
                        <Button className="secondCButton" variant="text" onClick={this.changeTakeClose}>Close</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayNote