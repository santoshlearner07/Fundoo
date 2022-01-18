import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export class TakeANote extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: true
        }
    }

    changeTakeOpen =() =>{
        this.setState({
            open : false
        })
    }

    changeTakeClose = () =>{

    }



    render() {
        return (
            <div>
                <div className="mainContainer">

                    {
                        this.state.open ?
                            <div className="firstContainer">
                                <input type="text" placeholder="Take a Note" onClick={this.changeTakeOpen}/>
                                <div>
                                <CheckBoxOutlinedIcon />
                                <BrushOutlinedIcon />
                                <PhotoOutlinedIcon />

                                </div>
                            </div>

                            :
                            <div className="secondContainer">
                                <input type="text" name="" id="" /><br></br>
                                <input type="text" name="" id="" />
                                <div>
                                <AddAlertOutlinedIcon />
                                <PersonAddAltOutlinedIcon />
                                <ColorLensOutlinedIcon />
                                <PhotoOutlinedIcon />
                                <ArchiveOutlinedIcon />
                                <MoreVertOutlinedIcon />
                                    <Button variant="text" onClick={this.changeTakeClose}>Close</Button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default TakeANote