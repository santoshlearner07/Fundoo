import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import UserService from "../../services/userService";
import NoteService from "../../services/noteService";

import Icon from "../icons/Icon";
import '../takeANote/TakeANote.scss'

import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';



const noteService = new NoteService();

export class TakeANote extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: true
        }
    }

    changeTakeOpen = () => {
        this.setState({
            open: false
        })
    }

    changeTakeClose = () => {
        this.setState({
            open: true
        })

        let data = {
            "title": this.state.title,
            "description": this.state.description
        }

        noteService.addNote(data)
            .then(() => {
                this.setState({
                    open: true,
                    title: '',
                    description: ''
                })
            })
    }

    getNotesOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <div>
                <div className="mainContainer">

                    {
                        this.state.open ?
                            <div className="firstContainer">
                                <input className="firstTitle" type="text" placeholder="Take a Note" onClick={this.changeTakeOpen} />
                                <div className="firstTitleIcon">
                                <IconButton>  <CheckBoxOutlinedIcon /></IconButton>
                                <IconButton>  <BrushOutlinedIcon /></IconButton>
                                <IconButton>  <PhotoOutlinedIcon /></IconButton>

                                </div>
                            </div>

                            :
                            <div className="secondContainer">
                                <input className="secondTitle" type="text" name="title" id="" placeholder="Title" onChange={(e) => this.getNotesOnChange} /><br></br>
                                <input className="secondDescription" type="text" name="description" id="" placeholder="Take a Note" onChange={(e) => this.getNotesOnChange} />
                                <div className="thirdPart">
                                    <div className="secondTitleIcon">
                                        <Icon />
                                    </div>

                                    <Button className="secondCButton" variant="text" onClick={this.changeTakeClose}>Close</Button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default TakeANote